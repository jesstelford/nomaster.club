import 'twin.macro';
import React from 'react';
import { Button } from './button';

export const LoginWithGithubButton = (props) => (
  <Button
    href={`https://github.com/login/oauth/authorize?client_id=${
      process.env.NEXT_PUBLIC_GITHUB_APP_CLIENT_ID
    }&scope=repo&redirect_uri=${encodeURIComponent(
      'http://localhost:3000/github/login'
    )}`}
    {...props}
  >
    Load Your GitHub Repos
  </Button>
);
