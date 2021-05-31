/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Children, forwardRef, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box';
import { mapResponsiveProp, mq } from './media';
import { spacing } from './tokens';
import { SpacingType } from './types';
export const Cluster = forwardRef(
  (
    {
      children,
      gap = 'none',
      as: Tag,
      innerAs: InnerTag = 'div',
      childAs: ChildTag = 'div',
      ...props
    },
    ref
  ) => {
    const offset = mapResponsiveProp(gap, spacing);
    return (
      <Box ref={ref} css={{ overflow: 'hidden' }} as={Tag} {...props}>
        <InnerTag
          css={mq({
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -offset,
            marginTop: -offset,
          })}
        >
          {Children.map(children, (child, idx) => {
            if (!isValidElement(child)) {
              return null;
            }

            return (
              <ChildTag
                key={child.key || idx}
                css={mq({ paddingLeft: offset, paddingTop: offset })}
              >
                {child}
              </ChildTag>
            );
          })}
        </InnerTag>
      </Box>
    );
  }
);

Cluster.propTypes = {
  /** Each element in the cluster. */
  children: PropTypes.node.isRequired,
  /** The size of the gap between each element in the cluster. */
  gap: SpacingType,
};
