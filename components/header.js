import 'twin.macro';
import React from 'react';

export const Header = () => (
  <div tw="container px-5 py-24 mx-auto text-gray-700">
    <div tw="text-center mb-20">
      <h1 tw="sm:text-3xl text-2xl font-medium text-center text-gray-900 mb-4">
        No Master Club
      </h1>
      <p tw="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Remove <code>master</code> from your projects by renaming the default
        branch.
      </p>
    </div>
  </div>
);
