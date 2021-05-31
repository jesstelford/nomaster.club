import tw from 'twin.macro';
import React, { Fragment, useState, createContext, useContext } from 'react';
import { useCheckem } from 'react-checkem';
import { Columns, Column } from './layout';
import { Checkbox } from './checkbox';

export const RepoList = ({ children, ...props }) => {
  const { registerSelectAll, handleChange } = useCheckem({
    name: 'repo-select',
  });
  return (
    <Columns
      gap="large"
      template="minmax(0, max-content) minmax(0, max-content) minmax(0, 1fr) minmax(0, max-content)"
      {...props}
    >
      <Column as={Checkbox} tw="self-center" />
      <Column span="3">Options</Column>
      {children}
    </Columns>
  );
};

const Repo = (props) => {
  const { register, handleChange } = useCheckem({ name: 'repo-select' });
  return (
    <Fragment>
      <label css={[{ display: 'contents' }, ,]}>
        {/*<input type="checkbox" tw="self-center" />*/}
        {props.defaultBranchRef?.name === 'master' ? (
          <Column
            as={Checkbox}
            tw="self-center"
            ref={register}
            onChange={handleChange}
          />
        ) : (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            tw="text-green-500 w-6 h-6 self-center"
            css={[!props.viewerCanAdminister && tw`opacity-25`]}
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
        )}
        <div
          tw="flex flex-col self-center"
          css={[!props.viewerCanAdminister && tw`opacity-25`]}
        >
          <span tw="tracking-widest font-medium text-gray-900">
            {props.name}
          </span>
          <a
            tw="mt-1 text-gray-500 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={props.url}
          >
            {props.nameWithOwner}
            <svg
              tw="w-4 h-4 inline"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <p
          tw="self-center"
          css={[!props.viewerCanAdminister && tw`opacity-25`]}
        >
          {props.defaultBranchRef?.name ? (
            <span
              tw="py-1 px-3 rounded text-sm font-medium tracking-widest leading-relaxed"
              css={[
                props.defaultBranchRef.name === 'master'
                  ? tw`bg-red-100 text-red-500`
                  : tw`bg-green-100 text-green-500`,
              ]}
            >
              {props.defaultBranchRef.name}
            </span>
          ) : (
            <em tw="text-sm text-gray-500">No default branch</em>
          )}
        </p>
      </label>
      {props.viewerCanAdminister ? (
        <span />
      ) : (
        <div
          className="group"
          tw="self-center flex items-center justify-center relative w-8 h-8 bg-indigo-100 rounded-full text-indigo-500 font-bold"
        >
          i
          <div
            tw="hidden group-hover:block absolute w-64 bg-black p-4 rounded text-sm text-white font-normal"
            css={{ bottom: 'calc(100% + 10px)', right: '1rem' }}
          >
            You do not have permissions to change the default branch for this
            repo.
            <div
              tw="absolute transform -translate-y-1/2 w-0 h-0"
              css={{
                right: 0,
                top: '100%',
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderRight: '10px solid black',
              }}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export const RepoPage = ({ repos }) => {
  return (
    <Fragment>
      {repos.map((repo) => (
        <Fragment key={repo.id}>
          <div tw="border-t-2 border-gray-200 col-span-4" />
          <Repo {...repo} />
        </Fragment>
      ))}
    </Fragment>
  );
};
