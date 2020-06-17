import 'twin.macro';
import React, { Fragment, useEffect, useState } from 'react';
import useSWR, { useSWRPages } from 'swr';
import { GraphQLClient } from 'graphql-request';
import { RepoList } from '../../components/repo-list';
import { RepoPage } from '../../components/repo-page';
import { HollowButton } from '../../components/button';
import { Header } from '../../components/header';
import { LoginWithGithubButton } from '../../components/login-with-github-button';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const useToken = () => {
  const [tokenLoading, setTokenLoading] = useState(true);
  const [token, setToken] = useState();

  useEffect(() => {
    setTokenLoading(false);
    setToken(window.sessionStorage.getItem('github-token'));
  }, [setToken, setTokenLoading]);

  return { token, tokenLoading };
};

const GitHubPage = () => (
  <section>
    <Header />
    <GitHub />
  </section>
);

const GitHub = ({}) => {
  const { token, tokenLoading } = useToken();

  if (tokenLoading) {
    return 'Loading...';
  }

  if (!token) {
    return <LoginWithGithubButton />;
  }

  return <Repos token={token} />;
};

const Repos = ({ token }) => {
  const {
    pages, // an array of each page component
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    loadMore,
  } = useSWRPages(
    'project-page', // key of this page
    // ======== the actual Page component!
    ({ offset, withSWR }) => {
      // required: use `withSWR` to wrap your main SWR (source of your pagination API)
      const { data } = withSWR(
        useSWR(
          [
            `query ($after: String) {
              viewer {
                login
                repositories(
                  isFork: false,
                  isLocked: false,
                  orderBy: { field: NAME, direction: ASC },
                  first: 50
                  after: $after
                ) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                    startCursor
                  }
                  nodes {
                    id
                    name
                    nameWithOwner
                    viewerCanAdminister
                    url
                    defaultBranchRef {
                      name
                    }
                  }
                }
              }
            }`,
            token,
            offset,
          ],
          (query, token, offset) => {
            const graphQLClient = new GraphQLClient(GITHUB_GRAPHQL_API, {
              headers: {
                authorization: `Bearer ${token}`,
              },
            });
            return graphQLClient.request(query, { after: offset });
          }
        )
      );

      if (!data) return null;

      return <RepoPage repos={data.viewer.repositories.nodes} />;
    },
    // ========
    // a function accepts a SWR's `data`, and returns the offset of the next page (or null)
    ({ data }) => {
      return data?.viewer?.repositories?.pageInfo?.hasNextPage
        ? data.viewer.repositories.pageInfo.endCursor
        : null;
    },
    // (optional) outside deps of your Page component. in this case it's empty
    []
  );

  if (isEmpty) return 'No repos';

  return (
    <div tw="pb-24">
      <RepoList pages={pages} tw="pb-24" />
      {isReachingEnd ? null : (
        <p tw="mx-auto" css={{ width: 'max-content' }}>
          <HollowButton loading={isLoadingMore} onClick={loadMore}>
            Load More
          </HollowButton>
        </p>
      )}
    </div>
  );
};

export default GitHubPage;
