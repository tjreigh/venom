# Venom

Multiplayer head-to-head snake game, built with React, Next.js, and typescript.

### App Template
This project was generated using [this template](https://github.com/pizzafox/nextjs-starter) by [@PizzaFox](https://github.com/pizzafox)

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

### Linting

This project uses [XO](https://github.com/xojs/xo) (which uses [ESLint](https://eslint.org) and some plugins internally) to perform static analysis on the TypeScript.
It reports things like unused variables or not following code conventions.

```sh
yarn run lint
```

Note that XO will also error if you have incorrect formatting, not just if your TypeScript code has errors.
