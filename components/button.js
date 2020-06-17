import 'twin.macro';
import React from 'react';

export const Button = (props) => (
  <a
    tw="cursor-pointer text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    {...props}
  />
);

export const HollowButton = (props) => (
  <a
    tw="cursor-pointer bg-transparent border-black border py-2 px-8 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg"
    {...props}
  />
);
