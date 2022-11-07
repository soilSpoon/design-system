import { keyframes, styled } from '../stitches.config';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const Spinner = styled('div', {
  display: 'inline-block',
  borderColor: 'currentColor',
  borderStyle: 'solid',
  borderRadius: '99999px',
  borderWidth: '2px',
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
  animation: `${spin} 0.45s linear infinite`,
  variants: {
    size: {
      xs: { size: '$3' },
      sm: { size: '$4' },
      md: { size: '$6' },
      lg: { size: '$8' },
      xl: { size: '$9' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
