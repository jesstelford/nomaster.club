/** @jsx jsx */

import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { mapResponsiveProp, mq } from './media';
import * as tokens from './tokens';
import { ColorType, RadiiType, SpacingType } from './types';

export const Box = forwardRef(
  (
    {
      as: Tag = 'div',
      background,
      foreground,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX,
      marginY,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX,
      paddingY,
      radius,
      ...props
    },
    ref
  ) => {
    return (
      <Tag
        ref={ref}
        css={mq({
          // ensure height/width is declarative when padding involved
          boxSizing: 'border-box',

          // utility styles
          backgroundColor: mapResponsiveProp(background, tokens.color),
          borderRadius: mapResponsiveProp(radius, tokens.radii),
          color: mapResponsiveProp(foreground, tokens.color),
          marginBottom: mapResponsiveProp(marginBottom || marginY || margin, tokens.spacing),
          marginLeft: mapResponsiveProp(marginLeft || marginX || margin, tokens.spacing),
          marginRight: mapResponsiveProp(marginRight || marginX || margin, tokens.spacing),
          marginTop: mapResponsiveProp(marginTop || marginY || margin, tokens.spacing),
          paddingBottom: mapResponsiveProp(paddingBottom || paddingY || padding, tokens.spacing),
          paddingLeft: mapResponsiveProp(paddingLeft || paddingX || padding, tokens.spacing),
          paddingRight: mapResponsiveProp(paddingRight || paddingX || padding, tokens.spacing),
          paddingTop: mapResponsiveProp(paddingTop || paddingY || padding, tokens.spacing),
        })}
        {...props}
      />
    );
  }
);

Box.propTypes = {
  background: ColorType,
  foreground: ColorType,
  margin: SpacingType,
  marginBottom: SpacingType,
  marginLeft: SpacingType,
  marginRight: SpacingType,
  marginTop: SpacingType,
  marginX: SpacingType,
  marginY: SpacingType,
  padding: SpacingType,
  paddingBottom: SpacingType,
  paddingLeft: SpacingType,
  paddingRight: SpacingType,
  paddingTop: SpacingType,
  paddingX: SpacingType,
  paddingY: SpacingType,
  radius: RadiiType,
};
