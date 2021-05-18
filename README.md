# Yet Another React App

## Why

`create-react-app` doesn't always cut it, but I can never remember how to set up a React project from scratch... This repo contains some super minimal boilerplate code for a starter React project. This template uses `yarn` instead of `npm`, but if you'd like to use `npm`, just delete `yarn.lock`.

## What's Included

- [eslint](https://github.com/eslint/eslint) and [prettier](https://github.com/prettier/prettier) (along with some opinionated formatting rules)
- [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), to format and lint files with pre-commit hooks
- Webpack 5 and the other 700 dev dependencies needed to run a single JS file
- SCSS out of the box, along with [postcss](https://github.com/postcss/postcss) and [autoprefixer](https://github.com/postcss/autoprefixer)
- Some simple but yet somehow still confusing webpack configuration
  - Includes hot reload
  - Support for importing SVG and PNG
  - Support for importing raw text files (along with markdown and shader code because why not?)
- `package.json` scripts to format JS and SCSS files and a script to lint JS files

## Usage with git clone

In order to use this TypeScript template, you'll need to clone the repo. <kbd>Use this template</kbd> will create a template from the master branch.

1. `mkdir some_folder && cd $_`
2. `git clone -b typescript https://github.com/ctcuff/react-starter-template.git .`
3. `rm -rf .git` (Remove starter version control)
4. `git init` (Initialize your own git repo)
5. `yarn` (or `npm install`) (Install dependencies)

From there, you probably want to rename the `react-starter-template` folder to whatever the name of your new project is. Don't forget to rename it in [package.json](https://github.com/ctcuff/react-starter-template/blob/master/package.json#L2) too!

## Explanation of dependencies

In case you were wondering why there's so much stuff in `package.json`

### dependencies

- `react`, `react-dom`: Necessary React packages

### devDependencies

- `@babel/core`, `@babel/preset-env`, `@babel/preset-react`, `babel-loader`: Used to transpile JS/React files and allows JSX syntax
- `@babel/plugin-transform-runtime`: Allows the use of `async` and `await`
- `autoprefixer`, `postcss`, `node-sass`: Automagically adds vendor prefixes and transpiles future CSS syntax. node-sass allows SCSS to be used.
- `css-loader`, `postcss-loader`, `sass-loader`, `style-loader`: Allows CSS and SCSS files to be imported from JS files. Also allows webpack to process CSS with postcss.
- `eslint` (and other eslint plugins), `prettier`: Linting and formatting partially based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript)
- `husky`, `lint-staged`: Runs custom hooks like linting and formatting before commits
- `babel-eslint`, `eslint-webpack-plugin`: Allows webpack to throw errors and display warnings in the console if eslint rules are broken
- `html-webpack-plugin`: Offers customization over webpack's HTML entry point
- `webpack`, `webpack-cli`, `webpack-dev-server`: Necessary webpack packages. Allows you to run a configurable development server that auto-reloads when files change.
