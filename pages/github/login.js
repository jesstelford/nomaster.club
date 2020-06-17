import React, { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const GitHubLogin = (props) => {
  useEffect(() => {
    if (props.access_token) {
      window.sessionStorage.setItem('github-token', props.access_token);
      window.location = '/github';
    }
  });

  if (props.access_token) {
    return 'Loading...';
  } else {
    return (
      <div>
        <h1>Something went wrong</h1>
        <pre>{props.error || 'An error occured'}</pre>
      </div>
    );
  }
};

export async function getServerSideProps({ query }) {
  const data = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_GITHUB_APP_CLIENT_ID,
      client_secret: process.env.GITHUB_APP_CLIENT_SECRET,
      code: query.code,
      state: query.state,
    }),
  }).then((res) => res.json());

  return {
    props: data,
  };
}

export default GitHubLogin;
