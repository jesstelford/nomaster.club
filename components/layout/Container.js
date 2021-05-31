/** @jsx jsx */

import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { mq } from './media';
import { spacing } from './tokens';

const sizeMap = {
  small: 320,
  medium: 1024,
  large: 1280,
};

export const Container = ({ size, ...props }) => {
  let width = sizeMap[size];

  return (
    <div
      css={mq({
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: width,
        paddingLeft: [spacing.small, null, spacing.medium],
        paddingRight: [spacing.small, null, spacing.medium],
      })}
      {...props}
    />
  );
};

Container.propTypes = {
  /** The size of the container. */
  size: PropTypes.oneOf(Object.keys(sizeMap)),
};
Container.defaultProps = {
  size: 'medium',
};
