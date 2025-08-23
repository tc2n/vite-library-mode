import { create } from 'storybook/theming/create';

export default create({
  base: 'dark',

  // Typography
  fontBase: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"SF Mono", Monaco, Inconsolata, "Roboto Mono", Consolas, "Droid Sans Mono", monospace',

  // Brand
  brandTitle: 'Design System',
  brandUrl: 'https://example.com',
  brandTarget: '_self',

  // Colors matching your dark theme
  colorPrimary: '#3992E0', // --color-primary dark mode
  colorSecondary: '#B3B3B3',

  // UI Background colors  
  appBg: '#121212',
  appContentBg: '#1a1a1a', 
  appPreviewBg: '#1a1a1a',
  appBorderColor: '#333333',
  appBorderRadius: 8,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#121212',
  textMutedColor: '#B3B3B3',

  // Toolbar colors
  barTextColor: '#B3B3B3',
  barSelectedColor: '#3992E0',
  barHoverColor: '#5BA3E6',
  barBg: '#1e1e1e',

  // Form colors
  inputBg: '#1e1e1e',
  inputBorder: '#333333',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 6,

  // Button colors
  buttonBg: '#1e1e1e',
  buttonBorder: '#333333',
  booleanBg: '#333333',
  booleanSelectedBg: '#3992E0',
});
