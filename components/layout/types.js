import PropTypes from 'prop-types';

import * as tokens from './tokens';

const ColorKeys = Object.keys(tokens.color);
const RadiiKeys = Object.keys(tokens.radii);
const SpacingKeys = Object.keys(tokens.spacing);
const BreakpointKeys = Object.keys(tokens.breakpoints);

export const BreakpointType = PropTypes.oneOf(BreakpointKeys);
export const ColorType = PropTypes.oneOfType([
  PropTypes.oneOf(ColorKeys),
  PropTypes.arrayOf(PropTypes.oneOf(ColorKeys)),
]);
export const RadiiType = PropTypes.oneOfType([
  PropTypes.oneOf(RadiiKeys),
  PropTypes.arrayOf(PropTypes.oneOf(RadiiKeys)),
]);
export const SpacingType = PropTypes.oneOfType([
  PropTypes.oneOf(SpacingKeys),
  PropTypes.arrayOf(PropTypes.oneOf(SpacingKeys)),
]);
export const AlignType = PropTypes.oneOf(['normal', 'left', 'center', 'right']);
