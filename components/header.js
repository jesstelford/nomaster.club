import 'twin.macro';
import React from 'react';
import { Stack } from './layout';

export const Header = (props) => (
  <div tw="text-gray-700" {...props}>
    <Stack tw="text-center" gap="medium">
      <h1 tw="sm:text-3xl text-2xl font-medium text-center text-gray-900">
        No Master Club
      </h1>
      <p tw="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Remove <code>master</code> from your projects by renaming the default
        branch.
      </p>
    </Stack>
  </div>
);
