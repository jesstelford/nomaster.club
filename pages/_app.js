import 'twin.macro';
import React from 'react';
import NextApp from 'next/app';
import 'tailwindcss/dist/base.min.css';
import { CacheProvider } from '@emotion/core';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <div tw="mx-auto px-4 lg:px-0 max-w-screen-lg">
          <Component {...pageProps} />
        </div>
      </CacheProvider>
    );
  }
}
