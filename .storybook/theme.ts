import { create } from 'storybook/theming/create';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"SF Mono", Monaco, Inconsolata, "Roboto Mono", Consolas, "Droid Sans Mono", monospace',

  // Brand
  brandTitle: 'Design System',
  brandUrl: 'https://example.com',
  brandTarget: '_self',

  // Colors matching your design system
  colorPrimary: '#0877DB', // --color-primary
  colorSecondary: '#585C6D',

  // UI Background colors - using design system colors
  appBg: '#FAFBFC',
  appContentBg: '#FFFFFF', // --color-body (light)
  appPreviewBg: '#FFFFFF', // --color-body (light)
  appBorderColor: '#E1E4E8',
  appBorderRadius: 8, // Based on your --border-radius-8

  // Text colors
  textColor: '#24292E', // Dark text for readability
  textInverseColor: '#FFFFFF', // --color-white
  textMutedColor: '#6A737D',

  // Toolbar colors
  barTextColor: '#6A737D',
  barSelectedColor: '#0877DB', // --color-primary
  barHoverColor: '#0366D6', // Slightly darker primary
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FAFBFC',
  inputBorder: '#E1E4E8',
  inputTextColor: '#24292E',
  inputBorderRadius: 6,

  // Button colors
  buttonBg: '#FAFBFC',
  buttonBorder: '#E1E4E8',
  booleanBg: '#E1E4E8',
  booleanSelectedBg: '#0877DB', // --color-primary
});
