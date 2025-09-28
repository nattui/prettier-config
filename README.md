# @nattui/prettier-config

A shareable [Prettier](https://prettier.io) configuration with opinionated defaults and useful plugins.

## Features

- **No semicolons** - Cleaner code without unnecessary punctuation
- **Automatic CSS property ordering** - Alphabetical sorting for consistent stylesheets
- **Package.json formatting** - Keeps your package.json files clean and organized
- **JSON sorting** - Recursive sorting of JSON files for better diffs and consistency

## Installation

Install the config as a development dependency:

```bash
# npm
npm install --save-dev @nattui/prettier-config

# yarn
yarn add --dev @nattui/prettier-config

# pnpm
pnpm add --save-dev @nattui/prettier-config

# bun
bun add --dev @nattui/prettier-config
```

## Usage

### Option 1: package.json (Recommended)

Add the following to your `package.json`:

```json
{
  "prettier": "@nattui/prettier-config"
}
```

### Option 2: Configuration file

Create a `.prettierrc` file in your project root:

```json
"@nattui/prettier-config"
```

### Option 3: Extending the configuration

If you need to override some settings, create a `.prettierrc.mjs` file:

```js
import nattPrettierConfig from "@nattui/prettier-config"

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...nattPrettierConfig,
  // Override any settings here
  semi: true, // Enable semicolons if you prefer
  singleQuote: true, // Use single quotes
}

export default config
```

## Configuration Details

This configuration includes the following settings:

- `semi: false` - No semicolons
- `cssDeclarationSorterOrder: "alphabetical"` - Alphabetical CSS property ordering
- `jsonRecursiveSort: true` - Recursive JSON sorting

### Included Plugins

- [`prettier-plugin-css-order`](https://github.com/Siilwyn/prettier-plugin-css-order) - Sorts CSS declarations
- [`prettier-plugin-packagejson`](https://github.com/matzkoh/prettier-plugin-packagejson) - Formats package.json files
- [`prettier-plugin-sort-json`](https://github.com/Gudahtt/prettier-plugin-sort-json) - Sorts JSON files recursively

## Editor Integration

Make sure you have the Prettier extension installed in your editor:

- **VS Code**: [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- **WebStorm/IntelliJ**: Built-in Prettier support
- **Vim/Neovim**: Various plugins available
- **Sublime Text**: [JsPrettier](https://packagecontrol.io/packages/JsPrettier)

## Scripts

Add these scripts to your `package.json` for easy formatting:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## Related

- [Prettier Documentation](https://prettier.io/docs/)
- [Sharing Prettier Configurations](https://prettier.io/docs/sharing-configurations)
