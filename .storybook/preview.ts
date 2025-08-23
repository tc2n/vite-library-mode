import type { Preview } from '@storybook/react-vite'
import type { Decorator } from '@storybook/react'
import React, { useEffect } from 'react'
import { addons } from 'storybook/preview-api'
// Import global styles for the library
import '../lib/styles/index.css'
import lightTheme from './theme'
import darkTheme from './dark-theme'

// Theme decorator to apply data-theme attribute
const withTheme: Decorator = (Story, context) => {
  const { theme: selectedTheme } = context.globals;

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // Remove existing theme attributes
    htmlElement.removeAttribute('data-theme');
    
    // Apply the selected theme
    if (selectedTheme && selectedTheme !== 'light') {
      htmlElement.setAttribute('data-theme', selectedTheme);
    }
    
    // Update multiple elements for comprehensive dark mode styling
    const body = document.body;
    const storybookRoot = document.getElementById('storybook-root');
    const previewWrapper = document.getElementById('storybook-preview-wrapper');
    
    // Apply theme classes to multiple elements
    [htmlElement, body, storybookRoot, previewWrapper].forEach(element => {
      if (element) {
        element.classList.remove('light-theme', 'dark-theme');
        element.classList.add(`${selectedTheme || 'light'}-theme`);
      }
    });
    
    // Emit theme change to manager
    const channel = addons.getChannel();
    channel.emit('STORYBOOK_THEME_CHANGE', selectedTheme || 'light');
    
    return () => {
      // Cleanup on unmount  
      htmlElement.removeAttribute('data-theme');
      [htmlElement, body, storybookRoot, previewWrapper].forEach(element => {
        if (element) {
          element.classList.remove('light-theme', 'dark-theme');
        }
      });
    };
  }, [selectedTheme]);

  return React.createElement(Story);
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },

    docs: {
      theme: lightTheme,
    },
  },
  
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;