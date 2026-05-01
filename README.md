# 🎮 PixelArtUI React

[![npm version](https://badge.fury.io/js/pixelartui-react.svg)](https://www.npmjs.com/package/pixelartui-react)
[![NPM Downloads](https://img.shields.io/npm/dm/pixelartui-react.svg)](https://www.npmjs.com/package/pixelartui-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/Pixelartui/pixelartui-react.svg?style=social&label=Star)](https://github.com/Pixelartui/pixelartui-react)

A retro-themed, pixel-perfect React component library that brings the nostalgic charm of 8-bit and 16-bit era UIs to modern web applications.

**[📖 Live Storybook Demo](https://pixelartui.github.io/storybook)** | **[📦 npm Package](https://www.npmjs.com/package/pixelartui-react)** | **[🌐 Documentation](https://pixelartui.github.io)**

## ✨ Features

- 🎨 **Retro Aesthetic** - Authentic pixel art styling reminiscent of classic games
- ⚛️ **React Components** - Modern React components with TypeScript support
- 🎭 **Customizable** - Easily theme and customize to match your project
- 📱 **Responsive** - Works seamlessly across all device sizes
- ♿ **Accessible** - Built with accessibility best practices
- 🚀 **Performance** - Lightweight and optimized for production
- 📚 **Storybook** - Interactive component documentation and playground

## 🖼️ Component Showcase

### Button Component
```tsx
import { Button } from 'pixelartui-react';

function App() {
  return (
    <Button variant="primary" size="medium">
      Press Start
    </Button>
  );
}
```

### Card Component
```tsx
import { Card } from 'pixelartui-react';

function GameCard() {
  return (
    <Card title="High Scores" variant="retro">
      <p>Level completed! Score: 9999</p>
    </Card>
  );
}
```

> 💡 **See all components in action**: [Interactive Storybook Demo](https://pixelartui.github.io/storybook)

## 🚀 Quick Start

### Installation

```bash
# npm
npm install pixelartui-react

# yarn
yarn add pixelartui-react

# pnpm
pnpm add pixelartui-react
```

### Basic Usage

```tsx
import { Button, Card, Input } from 'pixelartui-react';
import 'pixelartui-react/dist/styles.css';

function RetroApp() {
  return (
    <div className="retro-app">
      <Card title="Welcome, Player 1">
        <Input placeholder="Enter your name" />
        <Button variant="primary">Start Game</Button>
      </Card>
    </div>
  );
}
```

## 📦 Available Components

- **Button** - Retro-styled buttons with multiple variants
- **Card** - Container components with pixel borders
- **Input** - Form inputs with pixel-perfect styling
- **Select** - Dropdown selects with retro theming
- **Modal** - Dialog boxes with classic game aesthetics
- **Progress Bar** - Animated progress indicators
- **Tabs** - Tab navigation with pixel borders
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with pixel frames
- **Typography** - Pixel-font text components

[View all components in Storybook →](https://pixelartui.github.io/storybook)

## 🎨 Theming

Customize the look and feel to match your brand:

```tsx
import { ThemeProvider } from 'pixelartui-react';

const customTheme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#1A1A2E',
  },
  pixelSize: 2,
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/Pixelartui/pixelartui-react.git
cd pixelartui-react

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build for production
npm run build
```

## 📖 Documentation

- **[Component API Documentation](https://pixelartui.github.io)**
- **[Storybook Examples](https://pixelartui.github.io/storybook)**
- **[Migration Guide](./docs/MIGRATION.md)** (if applicable)
- **[Theming Guide](./docs/THEMING.md)** (if applicable)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © [PixelArtUI](https://github.com/Pixelartui)

## 🌟 Show Your Support

If you find this project useful, please consider giving it a ⭐️ on GitHub!

## 📬 Community & Support

- **[GitHub Discussions](https://github.com/Pixelartui/pixelartui-react/discussions)** - Ask questions and share ideas
- **[Issues](https://github.com/Pixelartui/pixelartui-react/issues)** - Report bugs and request features
- **[Twitter](https://twitter.com/pixelartui)** - Follow for updates (if applicable)

## 🎮 Inspiration

Built for developers who love retro gaming aesthetics and want to bring that nostalgic feeling to modern web applications.

---

Made with 💖 and pixels
