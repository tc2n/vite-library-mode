# @tc2n/vite-library-mode

A modern React component library built with Vite in library mode, TypeScript, and Storybook.

## Features

- 🚀 **Vite** - Fast build tool with HMR
- ⚛️ **React 19** - Latest React with TypeScript support
- 📚 **Storybook** - Component documentation and testing
- 🎨 **CSS Modules** - Scoped styling with theme support
- 🧪 **Vitest** - Fast unit testing with browser support
- 📦 **GitHub Package Registry** - Automated publishing
- 🔧 **ESLint** - Code quality and consistency
- 🎯 **TypeScript** - Full type safety

## Installation

```bash
npm install @tc2n/vite-library-mode
```

## Usage

```tsx
import { Button } from '@tc2n/vite-library-mode';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build library
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

## Release & Tagging Workflow

This project uses a structured approach for versioning and releases with automated GitHub Actions.

### Creating a Release

Follow these steps to create a new release:

```bash
# Update version in package.json only (patch/minor/major)
npm version patch --no-git-tag-version

# Commit the version change
git add package.json
git commit -m "Bump version to 1.0.1"

# Create annotated tag with detailed message
git tag -a v1.0.1 -m "Release v1.0.1

- Fix button styling issue
- Improve dropdown accessibility  
- Update documentation"

# Push with follow-tags to trigger GitHub Actions
git push origin main --follow-tags
```

### Automated Release Process

When you push tags using `--follow-tags`, the GitHub Actions workflow will automatically:

1. ✅ **Build** - Compile TypeScript and bundle the library
2. 🧪 **Test** - Run all tests to ensure quality
3. 📦 **Package** - Create distribution files
4. 🚀 **Release** - Create GitHub release with changelog
5. 📤 **Publish** - Deploy to GitHub Package Registry (optional)

### Version Guidelines

- **Patch** (`v1.0.1`) - Bug fixes, documentation updates
- **Minor** (`v1.1.0`) - New features, backward compatible
- **Major** (`v2.0.0`) - Breaking changes

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
