import { themeGet, Theme } from 'styled-system';

export const theme: Theme = {
  breakpoints: ['38em', '62em', '68em', '110em'],
  fonts: {
    normal:
      'apple-system, BlinkMacSystemFont, "Helvetica Neue", helvetica, arial, sans-serif',
    mono: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  // @ts-ignore
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34794
  fontSizes: [
    '.5625rem',
    '.6875rem',
    '.8125rem',
    '.9375rem',
    '1.063rem',
    '1.188rem',
    '1.313rem',
    '1.438rem',
    '1.688rem',
    '2.188rem',
    '3.625rem',
  ],
  // @ts-ignore
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34794
  space: [
    '0',
    '.3125rem',
    '.625rem',
    '.9375rem',
    '1.25rem',
    '1.5625rem',
    '2.1875rem',
    '2.8125rem',
    '4.063rem',
    '5rem',
  ],
  radii: [0, '.1875rem', '.5rem', '625rem'],
  // @ts-ignore
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34794
  colors: {
    black: 'hsl(0, 0%, 0%)',
    blacks: [
      'hsla(0, 0%, 0%, .9)',
      'hsla(0, 0%, 0%, .7)',
      'hsla(0, 0%, 0%, .5)',
      'hsla(0, 0%, 0%, .3)',
      'hsla(0, 0%, 0%, .1)',
    ],
    white: 'hsl(0, 0%, 100%)',
    whites: [
      'hsla(0, 0%, 100%, .9)',
      'hsla(0, 0%, 100%, .7)',
      'hsla(0, 0%, 100%, .5)',
      'hsla(0, 0%, 100%, .3)',
      'hsla(0, 0%, 100%, .1)',
    ],
    gray: 'hsl(208, 16%, 76%)',
    grays: [
      'hsl(208, 32%, 99%)',
      'hsl(208, 28%, 97%)',
      'hsl(208, 24%, 93%)',
      'hsl(208, 20%, 86%)',
      'hsl(208, 16%, 76%)',
      'hsl(208, 12%, 46%)',
      'hsl(208, 16%, 15%)',
      'hsl(208, 20%, 10%)',
      'hsl(208, 24%, 7%)',
    ],
    blue: 'hsl(208, 98%, 50%)',
    blues: [
      'hsl(208, 99%, 99%)',
      'hsl(208, 96%, 97%)',
      'hsl(208, 78%, 78%)',
      'hsl(208, 76%, 68%)',
      'hsl(208, 98%, 50%)',
      'hsl(208, 82%, 45%)',
      'hsl(208, 99%, 35%)',
      'hsl(208, 99%, 12%)',
      'hsl(208, 99%, 10%)',
    ],
    green: 'hsl(142, 68%, 42%)',
    greens: [
      'hsl(142, 60%, 99%)',
      'hsl(142, 60%, 97%)',
      'hsl(142, 40%, 72%)',
      'hsl(142, 34%, 64%)',
      'hsl(142, 68%, 42%)',
      'hsl(142, 62%, 40%)',
      'hsl(142, 60%, 38%)',
      'hsl(142, 60%, 12%)',
      'hsl(142, 60%, 10%)',
    ],
    yellow: 'hsl(52, 100%, 46%)',
    yellows: [
      'hsl(54, 100%, 99%)',
      'hsl(54, 100%, 97%)',
      'hsl(54, 100%, 92%)',
      'hsl(54, 100%, 72%)',
      'hsl(52, 100%, 46%)',
      'hsl(52, 100%, 40%)',
      'hsl(52, 100%, 18%)',
      'hsl(52, 100%, 13%)',
      'hsl(52, 100%, 10%)',
    ],
    red: 'hsl(0, 100%, 45%)',
    reds: [
      'hsl(0, 100%, 99%)',
      'hsl(0, 100%, 97%)',
      'hsl(0, 85%, 92%)',
      'hsl(0, 85%, 78%)',
      'hsl(0, 100%, 65%)',
      'hsl(0, 100%, 45%)',
      'hsl(0, 100%, 40%)',
      'hsl(0, 100%, 12%)',
      'hsl(0, 100%, 10%)',
    ],
  },
};

export function themeColor(key: string, fallback?: string) {
  return themeGet(`colors.${key}`, fallback)({ theme });
}