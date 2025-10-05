import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { 
  Info, 
  ExternalLink, 
  Download, 
  Settings, 
  HelpCircle, 
  AlertTriangle,
  CheckCircle 
} from 'lucide-react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'The element that triggers the tooltip'
    },
    content: {
      control: false,
      description: 'Custom ReactNode content (takes precedence over other props)'
    },
    heading: {
      control: 'text',
      description: 'Heading text for the tooltip'
    },
    para: {
      control: 'text',
      description: 'Paragraph/body text for the tooltip'
    },
    headingIcon: {
      control: false,
      description: 'Optional icon component to render next to the heading'
    },
    button: {
      control: false,
      description: 'Optional button to render in the tooltip'
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip placement relative to trigger with automatic collision detection'
    },
    offset: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
      description: 'Distance between tooltip and trigger element'
    }
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic tooltip with just text
export const BasicText: Story = {
  args: {
    para: 'This is a simple tooltip with some helpful text.',
    children: React.createElement(Button, { variant: 'SECONDARY' }, 'Hover for tooltip')
  }
};

// Tooltip with heading and paragraph
export const WithHeading: Story = {
  args: {
    heading: 'Helpful Information',
    para: 'This tooltip provides additional context and guidance for the user.',
    children: React.createElement(Button, { 
      variant: 'PRIMARY', 
      prefixIcon: Info 
    }, 'Info Button')
  }
};

// Tooltip with icon in heading
export const WithHeadingIcon: Story = {
  args: {
    heading: 'Settings',
    headingIcon: Settings,
    para: 'Configure your application preferences and options here.',
    children: React.createElement(Button, { 
      variant: 'TOOLS', 
      prefixIcon: Settings,
      size: 'SMALL'
    }, 'Settings')
  }
};

// Tooltip with a regular action button
export const WithActionButton: Story = {
  args: {
    heading: 'Download Available',
    headingIcon: Download,
    para: 'Your file is ready to download. Click the button below to start the download.',
    button: React.createElement(Button, {
      variant: 'PRIMARY',
      size: 'SMALL',
      prefixIcon: Download,
      onClick: () => console.log('Download started')
    }, 'Download Now') as React.ReactElement<typeof Button>,
    children: React.createElement(Button, { 
      variant: 'SECONDARY',
      prefixIcon: Download
    }, 'File Ready')
  }
};

// Tooltip with a link button (as requested)
export const WithLinkButton: Story = {
  args: {
    heading: 'Learn More',
    headingIcon: ExternalLink,
    para: 'Visit our documentation to learn more about this feature.',
    button: React.createElement(Button, {
      variant: 'TERTIARY',
      size: 'SMALL',
      suffixIcon: ExternalLink,
      // This creates a link-like button that opens external docs
      onClick: () => window.open('https://example.com/docs', '_blank', 'noopener,noreferrer')
    }, 'View Docs') as React.ReactElement<typeof Button>,
    children: React.createElement(Button, { 
      variant: 'SECONDARY',
      prefixIcon: HelpCircle
    }, 'Need Help?')
  }
};

// Tooltip with custom content
export const CustomContent: Story = {
  args: {
    content: React.createElement('div', { 
      style: { 
        padding: '8px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }
    }, [
      React.createElement('div', { 
        key: 'title',
        style: { 
          fontWeight: 600,
          color: '#059669',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }
      }, [
        React.createElement(CheckCircle, { key: 'icon', size: 16 }),
        'Success!'
      ]),
      React.createElement('p', { 
        key: 'message',
        style: { margin: 0, fontSize: '14px' }
      }, 'Your changes have been saved successfully.'),
      React.createElement('small', { 
        key: 'timestamp',
        style: { opacity: 0.7, fontSize: '12px' }
      }, 'Last updated: just now')
    ]),
    children: React.createElement(Button, { 
      variant: 'PRIMARY',
      prefixIcon: CheckCircle
    }, 'Changes Saved')
  }
};

// Warning tooltip
export const Warning: Story = {
  args: {
    heading: 'Destructive Action',
    headingIcon: AlertTriangle,
    para: 'This action cannot be undone. Please make sure you want to proceed.',
    button: React.createElement(Button, {
      variant: 'DANGER',
      size: 'SMALL',
      onClick: () => console.log('Destructive action confirmed')
    }, 'Confirm') as React.ReactElement<typeof Button>,
    children: React.createElement(Button, { 
      variant: 'DANGER',
      prefixIcon: AlertTriangle
    }, 'Delete Item')
  }
};

// Different trigger elements
export const DifferentTriggers: Story = {
  args: {
    children: React.createElement('span', {}, 'Placeholder')
  },
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, [
    // Button trigger
    React.createElement(Tooltip, {
      key: 'button',
      heading: 'Button Trigger',
      para: 'This tooltip is triggered by a button.',
      children: React.createElement(Button, { size: 'SMALL' }, 'Button')
    }),
    
    // Text trigger
    React.createElement(Tooltip, {
      key: 'text',
      heading: 'Text Trigger',
      para: 'This tooltip is triggered by hovering over text.',
      children: React.createElement('span', {
        style: {
          textDecoration: 'underline',
          cursor: 'help',
          color: '#3b82f6'
        }
      }, 'Hover this text')
    }),
    
    // Icon trigger
    React.createElement(Tooltip, {
      key: 'icon',
      heading: 'Icon Trigger',
      para: 'This tooltip is triggered by an icon.',
      children: React.createElement('button', {
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, React.createElement(Info, { size: 20, color: '#6b7280' }))
    })
  ])
};

// Different placements
export const Placements: Story = {
  args: {
    children: React.createElement('span', {}, 'Placeholder')
  },
  render: () => React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '40px',
      padding: '60px',
      alignItems: 'center',
      justifyItems: 'center'
    }
  }, [
    // Top
    React.createElement(Tooltip, {
      key: 'top',
      heading: 'Top Placement',
      para: 'Tooltip positioned above the trigger',
      placement: 'top',
      children: React.createElement(Button, { size: 'SMALL' }, 'Top')
    }),
    
    // Left
    React.createElement(Tooltip, {
      key: 'left',
      heading: 'Left Placement',
      para: 'Tooltip positioned to the left of the trigger',
      placement: 'left',
      children: React.createElement(Button, { size: 'SMALL' }, 'Left')
    }),
    
    // Right
    React.createElement(Tooltip, {
      key: 'right',
      heading: 'Right Placement',
      para: 'Tooltip positioned to the right of the trigger',
      placement: 'right',
      children: React.createElement(Button, { size: 'SMALL' }, 'Right')
    }),
    
    // Bottom
    React.createElement(Tooltip, {
      key: 'bottom',
      heading: 'Bottom Placement',
      para: 'Tooltip positioned below the trigger',
      placement: 'bottom',
      children: React.createElement(Button, { size: 'SMALL' }, 'Bottom')
    })
  ])
};

// Collision detection demo
export const CollisionDetection: Story = {
  args: {
    children: React.createElement('span', {}, 'Placeholder')
  },
  render: () => React.createElement('div', {
    style: {
      padding: '20px',
      minHeight: '400px',
      position: 'relative',
      border: '2px solid #e5e7eb',
      borderRadius: '8px'
    }
  }, [
    React.createElement('h3', { 
      key: 'title',
      style: { 
        margin: '0 0 20px 0', 
        fontSize: '16px',
        fontWeight: 600 
      } 
    }, 'Collision Detection Demo'),
    React.createElement('p', { 
      key: 'desc',
      style: { 
        margin: '0 0 20px 0', 
        fontSize: '14px',
        color: '#666' 
      } 
    }, 'Try hovering the buttons near the edges. Tooltips automatically flip to stay visible!'),
    
    // Top edge - should flip down
    React.createElement(Tooltip, {
      key: 'top-edge',
      heading: 'Edge Detection',
      para: 'This tooltip will flip to bottom when near the top edge',
      placement: 'top',
      children: React.createElement(Button, { 
        size: 'SMALL',
        style: { position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)' }
      }, 'Near Top Edge')
    }),
    
    // Left edge - should flip right  
    React.createElement(Tooltip, {
      key: 'left-edge',
      heading: 'Left Edge',
      para: 'This tooltip will flip to the right when near the left edge',
      placement: 'left',
      children: React.createElement(Button, { 
        size: 'SMALL',
        style: { position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }
      }, 'Near Left')
    }),
    
    // Right edge - should flip left
    React.createElement(Tooltip, {
      key: 'right-edge', 
      heading: 'Right Edge',
      para: 'This tooltip will flip to the left when near the right edge',
      placement: 'right',
      children: React.createElement(Button, { 
        size: 'SMALL',
        style: { position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }
      }, 'Near Right')
    }),
    
    // Bottom edge - should flip up
    React.createElement(Tooltip, {
      key: 'bottom-edge',
      heading: 'Bottom Edge', 
      para: 'This tooltip will flip to top when near the bottom edge',
      placement: 'bottom',
      children: React.createElement(Button, { 
        size: 'SMALL',
        style: { position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }
      }, 'Near Bottom')
    }),
    
    // Center - normal behavior
    React.createElement(Tooltip, {
      key: 'center',
      heading: 'Center Position',
      para: 'This tooltip has plenty of space and will show in its preferred position',
      placement: 'top',
      children: React.createElement(Button, { 
        variant: 'PRIMARY',
        style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
      }, 'Center')
    })
  ])
};

// Custom offset examples
export const CustomOffset: Story = {
  args: {
    children: React.createElement('span', {}, 'Placeholder')
  },
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      gap: '40px',
      padding: '40px',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, [
    React.createElement(Tooltip, {
      key: 'small-offset',
      heading: 'Small Offset',
      para: 'Tooltip with 4px offset',
      placement: 'top',
      offset: 4,
      children: React.createElement(Button, { size: 'SMALL' }, 'Small Gap')
    }),
    React.createElement(Tooltip, {
      key: 'default-offset',
      heading: 'Default Offset',
      para: 'Tooltip with default 8px offset',
      placement: 'top',
      children: React.createElement(Button, { size: 'SMALL' }, 'Default Gap')
    }),
    React.createElement(Tooltip, {
      key: 'large-offset',
      heading: 'Large Offset',
      para: 'Tooltip with 16px offset',
      placement: 'top',
      offset: 16,
      children: React.createElement(Button, { size: 'SMALL' }, 'Large Gap')
    })
  ])
};

// Minimal tooltip
export const Minimal: Story = {
  args: {
    para: 'Simple tooltip',
    children: React.createElement('span', {
      style: {
        padding: '4px 8px',
        background: '#f3f4f6',
        borderRadius: '4px',
        cursor: 'help',
        fontSize: '14px'
      }
    }, '?')
  }
};
