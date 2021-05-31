import 'twin.macro';
import React, { Fragment, useState } from 'react';
import { LoginWithGithubButton } from '../components/login-with-github-button';
import { Header } from '../components/header';

import { CheckemProvider, useCheckem } from 'react-checkem';

const Example = () => (
  <CheckemProvider name="example-checkbox-group">
    <ExampleInner />
  </CheckemProvider>
);

const ExampleInner = () => {
  const [showMore, setShowMore] = useState(false);
  const { register, registerSelectAll, handleChange } = useCheckem({
    name: 'example-checkbox-group',
  });
  return (
    <Fragment>
      <label>
        <input
          type="checkbox"
          ref={registerSelectAll}
          onChange={handleChange}
        />
        Select All
      </label>
      <label>
        <input type="checkbox" ref={register} onChange={handleChange} />
        Item 1
      </label>
      <label>
        <input type="checkbox" ref={register} onChange={handleChange} />
        Item 2
      </label>
      <label>
        <input
          type="checkbox"
          ref={register}
          onChange={(event) => {
            setShowMore(!!event.target.checked);
            handleChange(event);
          }}
        />
        Item 3
      </label>
      {showMore ? (
        <Fragment>
          <br />
          <label>
            <input type="checkbox" ref={register} onChange={handleChange} />
            Item 4
          </label>
          <label>
            <input type="checkbox" ref={register} onChange={handleChange} />
            Item 5
          </label>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

const Home = ({}) => (
  <section>
    <Header />
    <p tw="mx-auto" css={{ width: 'max-content' }}>
      <LoginWithGithubButton />
    </p>
    <Example />
  </section>
);

export default Home;
