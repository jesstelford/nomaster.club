import { forwardRef } from 'react';
export const Checkbox = forwardRef((props, ref) => (
  <input ref={ref} type="checkbox" {...props} />
));
