import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { 
  Download, 
  Upload, 
  Save, 
  Edit, 
  Trash2, 
  Plus, 
  ChevronRight, 
  ExternalLink,
  Search,
  Mail,
  Phone,
  Heart,
  ShoppingCart,
  Settings,
  User,
  LogOut,
  Loader2
} from 'lucide-react';
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
    prefixIcon: { 
      control: false,
      description: 'Lucide React icon component to display before text'
    },
    suffixIcon: { 
      control: false,
      description: 'Lucide React icon component to display after text'
    },
    iconSize: { 
      control: { type: 'number', min: 8, max: 32, step: 2 },
      description: 'Override default icon size (auto-calculated based on button size)'
    },
    loader: { 
      control: false,
      description: 'Loading spinner icon component'
    },
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

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'PRIMARY',
    prefixIcon: Download,
    children: 'Download File',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'SECONDARY',
    children: 'Secondary Button',
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    variant: 'SECONDARY',
    suffixIcon: ExternalLink,
    children: 'Open Link',
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

export const WithIcons: Story = {
  render: () => React.createElement('div',
    { style: { display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' } },
    
    // Prefix Icons Section
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'Prefix Icons'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { prefixIcon: Download, children: 'Download' }),
        React.createElement(Button, { prefixIcon: Save, variant: 'SECONDARY', children: 'Save' }),
        React.createElement(Button, { prefixIcon: Plus, variant: 'PRIMARY', children: 'Add Item' }),
        React.createElement(Button, { prefixIcon: Search, variant: 'TERTIARY', children: 'Search' })
      )
    ),
    
    // Suffix Icons Section  
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'Suffix Icons'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { suffixIcon: ChevronRight, children: 'Continue' }),
        React.createElement(Button, { suffixIcon: ExternalLink, variant: 'TERTIARY', children: 'Open Link' }),
        React.createElement(Button, { suffixIcon: Upload, variant: 'SECONDARY', children: 'Upload File' })
      )
    ),
    
    // Both Icons Section
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'Both Icons'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { 
          prefixIcon: Mail, 
          suffixIcon: ChevronRight, 
          children: 'Send Email' 
        }),
        React.createElement(Button, { 
          prefixIcon: Edit, 
          suffixIcon: ExternalLink, 
          variant: 'SECONDARY',
          children: 'Edit in New Tab' 
        })
      )
    )
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to use Lucide React icons as prefixIcon and suffixIcon props. Icons automatically inherit the button colors and adapt to theme changes.',
      },
    },
  },
};

export const IconVariants: Story = {
  render: () => React.createElement('div',
    { style: { display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' } },
    
    // Action Buttons
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'Action Buttons'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { prefixIcon: Trash2, variant: 'DANGER', children: 'Delete' }),
        React.createElement(Button, { prefixIcon: Edit, variant: 'PRIMARY', children: 'Edit' }),
        React.createElement(Button, { prefixIcon: Settings, variant: 'TOOLS', children: 'Settings' }),
        React.createElement(Button, { prefixIcon: LogOut, variant: 'SECONDARY', children: 'Logout' })
      )
    ),
    
    // E-commerce Buttons  
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'E-commerce Actions'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { prefixIcon: ShoppingCart, children: 'Add to Cart' }),
        React.createElement(Button, { prefixIcon: Heart, variant: 'SECONDARY', children: 'Add to Wishlist' }),
        React.createElement(Button, { prefixIcon: Phone, variant: 'TERTIARY', children: 'Contact Support' })
      )
    ),
    
    // Different Sizes
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'Icon Sizing'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { 
          prefixIcon: User, 
          iconSize: 12,
          size: 'SMALL', 
          children: 'Custom Small (12px)' 
        }),
        React.createElement(Button, { 
          prefixIcon: User, 
          size: 'MEDIUM', 
          children: 'Auto Medium (16px)' 
        }),
        React.createElement(Button, { 
          prefixIcon: User, 
          iconSize: 24,
          size: 'LARGE', 
          children: 'Custom Large (24px)' 
        })
      )
    )
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows various Lucide React icons in different button variants and contexts. Icons automatically size based on button size (14px for SMALL, 16px for MEDIUM, 20px for LARGE), but can be overridden with the iconSize prop.',
      },
    },
  },
};

export const IconSizing: Story = {
  render: () => React.createElement('div',
    { style: { display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' } },
    
    // Auto Sizing
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'Automatic Icon Sizing'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { prefixIcon: Settings, size: 'SMALL', children: 'Small (14px)' }),
        React.createElement(Button, { prefixIcon: Settings, size: 'MEDIUM', children: 'Medium (16px)' }),
        React.createElement(Button, { prefixIcon: Settings, size: 'LARGE', children: 'Large (20px)' })
      )
    ),
    
    // Custom Sizing
    React.createElement('div', {},
      React.createElement('h3', { style: { margin: '0 0 12px 0', color: 'var(--color-primary)' } }, 'Custom Icon Sizing'),
      React.createElement('div', 
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Button, { prefixIcon: Heart, iconSize: 12, children: 'Custom 12px' }),
        React.createElement(Button, { prefixIcon: Heart, iconSize: 18, children: 'Custom 18px', variant: 'SECONDARY' }),
        React.createElement(Button, { prefixIcon: Heart, iconSize: 24, children: 'Custom 24px', variant: 'TERTIARY' })
      )
    )
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates automatic icon sizing based on button size and how to override with the iconSize prop for custom requirements.',
      },
    },
  },
};

export const WithLoading: Story = {
  args: {
    isLoading: true,
    prefixIcon: Download,
    loader: Loader2,
    children: 'Downloading...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates loading state with a Lucide spinner icon. The prefix icon is hidden during loading and replaced with the animated loader.',
      },
    },
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