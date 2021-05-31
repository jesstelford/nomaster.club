/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Children, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box } from './Box';
import { mapResponsiveProp, mq, maxBreak } from './media';
import { spacing } from './tokens';
import { BreakpointType, SpacingType } from './types';

// Parent
// ------------------------------

export const Columns = forwardRef(({ collapse, gap = 'none', span, template, ...props }, ref) => {
  if (typeof template !== 'undefined' && typeof span !== 'undefined') {
    console.warn(
      `Can only specify one of 'template' or 'span' on <Columns> component. Defaulting to 'template'`
    );
  }

  let collapsedStyles = collapse
    ? {
        [maxBreak(collapse)]: {
          gridTemplateColumns: 'none',
        },
      }
    : {};

  let gridTemplateColumns;

  if (template) {
    gridTemplateColumns = template;
  } else {
    let count = Children.count(props.children);
    gridTemplateColumns = `repeat(${span || count}, 1fr)`;
  }

  return (
    <Box
      ref={ref}
      css={mq({
        alignItems: 'start',
        display: 'grid',
        gap: mapResponsiveProp(gap, spacing),
        gridTemplateColumns,
        ...collapsedStyles,
      })}
      {...props}
    />
  );
});

Columns.propTypes = {
  /** An element representing a column for uniform widths, or a `Column` component. */
  children: PropTypes.node.isRequired,
  /** At which breakpoint, if any, should the columns collapse. */
  collapse: BreakpointType,
  /** The size of the gap between each column. */
  gap: SpacingType,
  /** Explicityly set the number of total columns, for use with the `Column` component. */
  span: PropTypes.number,
  /** Explicityly set the width of each column. Passed to gridTemplateColumns */
  columnWidths: PropTypes.arrayOf(PropTypes.string),
};

// Child
// ------------------------------

export const Column = forwardRef(({ span = 1, ...props }, ref) => {
  const gridColumn = resolveSpans(span);

  // Why minWidth: 0? To prevent grid blow-out. See:
  // https://css-tricks.com/preventing-a-grid-blowout/
  return <Box ref={ref} css={mq({ gridColumn, minWidth: 0 })} {...props} />;
});

Column.propTypes = {
  /** The content of the column. */
  children: PropTypes.node,
  /** How many of the total columns to span. */
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};

const resolveSpans = value => {
  if (Array.isArray(value)) {
    return value.map(v => (v == null ? null : `span ${v}`));
  }

  return value == null ? null : `span ${value}`;
};
