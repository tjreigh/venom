# [Next.js](https://nextjs.org/) Starter

[![Build Status](https://github.com/pizzafox/nextjs-starter/workflows/CI/badge.svg)](https://github.com/pizzafox/nextjs-starter/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Next.js + TSX starter template.

## Developing

### Prequisites

This project uses [Node.js](https://nodejs.org) 12 to build.

This project uses [Yarn](https://yarnpkg.com) to install dependencies, although you can use another package manager like [npm](https://www.npmjs.com) or [pnpm](https://pnpm.js.org).

```sh
yarn install
# or `npm install`
# or `pnpm install`
```

### Building

Run the `build` script to build the project for production.

### Running the built app

There are a number of ways to serve your app once you have built it for production.

#### Server

You can use the `start` script to start a server that will serve your app

```sh
yarn start
```

#### Static export

You can also export the built site as a static site consisting of just HTML, JS, and CSS files.

```sh
yarn export
```

#### Development testing

You can start a development server served at `localhost:3000` by default.

```sh
yarn dev
```

### Style

This project uses [Prettier](https://prettier.io) and [XO](https://github.com/xojs/xo).

You can run Prettier in the project with this command:

```sh
yarn run style
```

You can run XO with this command:

```sh
yarn run lint
```

Note that XO will also error if you have TypeScript errors, not just if your formatting is incorrect.

### Linting

This project uses [XO](https://github.com/xojs/xo) (which uses [ESLint](https://eslint.org) and some plugins internally) to perform static analysis on the TypeScript.
It reports things like unused variables or not following code conventions.

```sh
yarn run lint
```

Note that XO will also error if you have incorrect formatting, not just if your TypeScript code has errors.
