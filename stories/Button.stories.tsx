import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default { title: 'Example/Button', component: Button } as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: StoryObj<typeof Button> = { args: { label: 'Button' } };

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
