# Contributing to PixelArtUI React

First off, thank you for considering contributing to PixelArtUI React! It's people like you that make this component library a great tool for the React community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [How to Contribute](#how-to-contribute)
- [Component Guidelines](#component-guidelines)
- [Code Style](#code-style)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pixelartui-react.git
   cd pixelartui-react
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/Pixelartui/pixelartui-react.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

5. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

This starts the development server with hot-reloading enabled.

### Running Storybook

```bash
npm run storybook
```

This opens Storybook at `http://localhost:6006` where you can view and test components interactively.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Building for Production

```bash
npm run build
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format
```

## How to Contribute

### Types of Contributions

We welcome many types of contributions:

- **Bug fixes** - Fix issues in existing components
- **New components** - Add new pixel art components
- **Documentation** - Improve docs, add examples, fix typos
- **Tests** - Add or improve test coverage
- **Examples** - Create demo applications using the library
- **Accessibility** - Improve a11y support
- **Performance** - Optimize component performance

### Your First Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Documentation improvements

## Component Guidelines

When creating or modifying components, follow these guidelines:

### Component Structure

```
src/components/YourComponent/
├── YourComponent.tsx          # Component implementation
├── YourComponent.test.tsx     # Unit tests
├── YourComponent.stories.tsx  # Storybook stories
├── YourComponent.styles.ts    # Styled components or CSS modules
├── types.ts                   # TypeScript types
└── index.ts                   # Exports
```

### Component Template

```tsx
import React from 'react';
import { YourComponentProps } from './types';
import * as S from './YourComponent.styles';

/**
 * YourComponent provides [brief description]
 * 
 * @example
 * ```tsx
 * <YourComponent variant="primary">Click me</YourComponent>
 * ```
 */
export const YourComponent = React.forwardRef<HTMLDivElement, YourComponentProps>(
  ({ children, variant = 'default', className, ...props }, ref) => {
    return (
      <S.Container ref={ref} variant={variant} className={className} {...props}>
        {children}
      </S.Container>
    );
  }
);

YourComponent.displayName = 'YourComponent';
```

### Required Elements for New Components

1. **TypeScript Support** - All components must be fully typed
2. **Accessibility** - Follow WCAG 2.1 AA standards
3. **Tests** - Minimum 80% code coverage
4. **Storybook Stories** - At least one story per variant
5. **Documentation** - JSDoc comments and props documentation
6. **Pixel Art Styling** - Follow the retro/pixel art design system
7. **Responsive** - Works on mobile, tablet, and desktop

### Design System Compliance

- Use the theme system for colors, spacing, and typography
- Maintain pixel-perfect borders and styling
- Follow existing component patterns
- Ensure visual consistency with other components

## Code Style

We use ESLint and Prettier to maintain code quality and consistency.

### Style Guidelines

- Use **functional components** with hooks
- Use **TypeScript** for all new code
- Use **named exports** for components
- **Avoid default exports** except for lazy-loaded components
- Use **descriptive variable names**
- Keep components **small and focused** (single responsibility)
- Prefer **composition over inheritance**

### File Naming

- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `types.ts` or `ComponentName.types.ts`
- Tests: `ComponentName.test.tsx`
- Stories: `ComponentName.stories.tsx`

### Import Order

```tsx
// 1. React and external libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// 2. Internal utilities and hooks
import { useTheme } from '../../hooks';
import { formatValue } from '../../utils';

// 3. Types
import type { ButtonProps } from './types';

// 4. Styles
import * as S from './Button.styles';
```

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
feat(Button): add disabled state styling

Add pixel-art styled disabled state for Button component with
proper color contrast and cursor changes.

Closes #123
```

```bash
fix(Modal): prevent body scroll when modal is open

Fixes issue where page could scroll while modal was displayed.

Fixes #456
```

## Pull Request Process

1. **Update your fork** with the latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Ensure all tests pass**:
   ```bash
   npm test
   npm run lint
   npm run build
   ```

3. **Update documentation** if needed:
   - Update README if adding new components
   - Add/update Storybook stories
   - Update TypeScript types

4. **Create a Pull Request**:
   - Use a clear, descriptive title
   - Reference related issues (e.g., "Closes #123")
   - Provide detailed description of changes
   - Add screenshots/GIFs for UI changes
   - Check "Allow edits from maintainers"

5. **Wait for review**:
   - Address reviewer feedback
   - Make requested changes in new commits
   - Re-request review when ready

6. **After approval**:
   - Maintainers will merge your PR
   - Your contribution will be included in the next release!

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Screenshots (if applicable)
Add screenshots or GIFs

## Checklist
- [ ] Tests pass locally
- [ ] Linting passes
- [ ] Added/updated tests
- [ ] Updated documentation
- [ ] Added Storybook stories
- [ ] Follows code style guidelines
```

## Reporting Bugs

### Before Submitting a Bug Report

- Check the [existing issues](https://github.com/Pixelartui/pixelartui-react/issues)
- Check the [Discussions](https://github.com/Pixelartui/pixelartui-react/discussions)
- Verify the bug exists in the latest version

### How to Submit a Bug Report

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) and include:

- **Description** - Clear description of the bug
- **Steps to Reproduce** - Detailed steps to reproduce
- **Expected Behavior** - What should happen
- **Actual Behavior** - What actually happens
- **Environment** - Browser, OS, Node version, package version
- **Screenshots** - Visual evidence if applicable
- **Code Sample** - Minimal reproduction code

## Suggesting Features

### Before Submitting a Feature Request

- Check if the feature already exists
- Check [existing feature requests](https://github.com/Pixelartui/pixelartui-react/issues?q=is%3Aissue+label%3Aenhancement)
- Discuss in [GitHub Discussions](https://github.com/Pixelartui/pixelartui-react/discussions) first

### How to Submit a Feature Request

Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- **Problem Statement** - What problem does this solve?
- **Proposed Solution** - Your suggested implementation
- **Alternatives** - Other solutions you've considered
- **Use Cases** - Real-world examples
- **Design Mockups** - Visual examples if applicable

## Community

- **[GitHub Discussions](https://github.com/Pixelartui/pixelartui-react/discussions)** - Ask questions, share ideas
- **[Discord](https://discord.gg/pixelartui)** - Real-time community chat (if applicable)
- **[Twitter](https://twitter.com/pixelartui)** - Follow for updates (if applicable)

### Ways to Get Involved

- Answer questions in Discussions
- Review pull requests
- Improve documentation
- Create example projects
- Share your projects using PixelArtUI
- Write blog posts or tutorials

## Recognition

Contributors are recognized in:
- The README contributors section
- Release notes for significant contributions
- The all-contributors bot

## Questions?

If you have questions not covered here, feel free to:
- Open a [Discussion](https://github.com/Pixelartui/pixelartui-react/discussions/new)
- Reach out to maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to PixelArtUI React! 🎮✨
