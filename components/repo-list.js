import 'twin.macro';
import React from 'react';
export const RepoList = ({ pages, ...props }) => (
  <div
    tw="container px-5 mx-auto grid gap-5"
    css={{
      gridTemplateColumns:
        'minmax(0, max-content) minmax(0, max-content) minmax(0, 1fr) minmax(0, max-content)',
    }}
    {...props}
  >
    <span />
    <h2 tw="text-2xl font-medium text-gray-900 mb-2">Repo</h2>
    <h2 tw="text-2xl font-medium text-gray-900 mb-2">Default branch</h2>
    {pages}
  </div>
);
