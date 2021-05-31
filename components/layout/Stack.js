/** @jsx jsx */

import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Box } from './Box';
import { mapResponsiveProp, mq } from './media';
import { spacing } from './tokens';
import { AlignType, SpacingType } from './types';

export const Stack = forwardRef(({ gap, align, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      css={mq({
        display: 'grid',
        rowGap: mapResponsiveProp(gap, spacing),
        justifyItems: align,
        // Why minmax(0, 1fr)? To prevent grid blow-out. See:
        // https://css-tricks.com/preventing-a-grid-blowout/
        gridTemplateColumns: `minmax(0, 1fr)`,
      })}
      {...props}
    />
  );
});

Stack.propTypes = {
  /** The size of the gap between each child. */
  gap: SpacingType,
  align: AlignType,
};
Stack.defaultProps = {
  gap: 'none',
  align: 'normal',
};
