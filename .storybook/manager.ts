import { addons } from 'storybook/manager-api';
import lightTheme from './theme';
import darkTheme from './dark-theme';

// Ensure proper initialization
addons.register('theme-switcher', () => {
  const channel = addons.getChannel();
  
  // Listen for theme changes from the preview
  channel.on('STORYBOOK_THEME_CHANGE', (themeName) => {
    const theme = themeName === 'dark' ? darkTheme : lightTheme;
    addons.setConfig({ theme });
  });

  // Set initial theme
  addons.setConfig({
    theme: lightTheme,
  });
});
