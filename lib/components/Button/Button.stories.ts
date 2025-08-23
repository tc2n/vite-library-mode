import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    size: { control: 'select', options: ['SMALL', 'MEDIUM', 'LARGE'] },
    variant: { control: 'select', options: ['PRIMARY', 'SECONDARY', 'TERTIARY', 'DANGER', 'TOOLS'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'PRIMARY',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'SECONDARY',
    children: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    size: 'LARGE',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'SMALL',
    children: 'Small Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'TERTIARY',
    children: 'Tertiary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'DANGER',
    children: 'Danger Button',
  },
};

export const AllVariants: Story = {
  render: () => React.createElement('div', 
    { style: { display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' } },
    React.createElement('div', 
      { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
      React.createElement(Button, { variant: 'PRIMARY', children: 'Primary' }),
      React.createElement(Button, { variant: 'SECONDARY', children: 'Secondary' }),
      React.createElement(Button, { variant: 'TERTIARY', children: 'Tertiary' }),
      React.createElement(Button, { variant: 'DANGER', children: 'Danger' }),
      React.createElement(Button, { variant: 'TOOLS', children: 'Tools' })
    ),
    React.createElement('div', 
      { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
      React.createElement(Button, { size: 'SMALL', children: 'Small' }),
      React.createElement(Button, { size: 'MEDIUM', children: 'Medium' }),
      React.createElement(Button, { size: 'LARGE', children: 'Large' })
    ),
    React.createElement('p', 
      { style: { margin: 0, color: 'var(--color-primary)', fontSize: '14px' } },
      '👆 Try switching themes using the toolbar above to see how these buttons adapt!'
    )
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates all button variants and sizes. Use the theme toggle in the toolbar to see how the design system adapts between light and dark modes using CSS custom properties.',
      },
    },
  },
};