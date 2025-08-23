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

  // UI Background colors - using design system colors
  appBg: '#0D111D', // --color-body (dark)
  appContentBg: '#0D111D', // --color-body (dark)
  appPreviewBg: '#0D111D', // --color-body (dark)
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
  barBg: '#171B26', // --color-card (dark)

  // Form colors
  inputBg: '#171B26', // --color-card (dark)
  inputBorder: '#333333',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 6,

  // Button colors
  buttonBg: '#171B26', // --color-card (dark)
  buttonBorder: '#333333',
  booleanBg: '#333333',
  booleanSelectedBg: '#3992E0',
});
