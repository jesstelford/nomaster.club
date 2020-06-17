import 'twin.macro';
import React from 'react';
import { LoginWithGithubButton } from '../components/login-with-github-button';
import { Header } from '../components/header';

const Home = ({}) => (
  <section>
    <Header />
    <p tw="mx-auto" css={{ width: 'max-content' }}>
      <LoginWithGithubButton />
    </p>
  </section>
);

export default Home;
