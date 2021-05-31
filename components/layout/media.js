import facepaint from 'facepaint';

import { breakpoints } from './tokens';

const breakMap = Object.values(breakpoints).map(width => `@media (min-width: ${width}px)`);

/**
 * @function mq - use array syntax to declare property values
 * @see https://github.com/emotion-js/facepaint
 */
export const mq = facepaint(breakMap);

// helper for mapping tokens when maybe array
export const mapResponsiveProp = (value, valueMap) => {
  if (!value) {
    return null;
  }

  if (Array.isArray(value)) {
    return value.map(key => (key == null ? null : valueMap[key]));
  }

  return valueMap[value];
};

// helper if array property declaration isn't appropriate
// <div css={{ [minBreak('medium')]: { property: 'value' } }} />
export const minBreak = key => {
  let width = breakpoints[key];
  return `@media (min-width: ${width}px)`;
};

// the breakpoints are designed to go up i.e. min-width
// if a max-width is necessary (hopefully rare) it's nice to provide a helper
// <div css={{ [maxBreak('medium')]: { property: 'value' } }} />
export const maxBreak = key => {
  let width = breakpoints[key];
  return `@media (max-width: ${width - 1}px)`;
};
