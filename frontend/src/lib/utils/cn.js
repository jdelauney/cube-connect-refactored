import clsx from 'clsx';
import { mc } from './mc.js';

export const cn = (...cssClasses) => {
  return mc(clsx(cssClasses));
};
