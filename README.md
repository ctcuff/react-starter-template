# Yet Another React App But It's TypeScript

`create-react-app` doesn't always cut it, but I can never remember how to set up a React project from scratch... This repo contains some super minimal boilerplate code for a starter React project. This template uses `yarn` instead of `npm`, but if you'd like to use `npm`, just delete `yarn.lock`.

## What's Included
- [eslint](https://github.com/eslint/eslint) and [prettier](https://github.com/prettier/prettier) (along with some opinionated formatting rules)
- [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), to format and lint files with pre-commit hooks
- Webpack 5 and the other 700 dev dependencies needed to run a single JS file
- SCSS out of the box, along with [postcss](https://github.com/postcss/postcss) and [autoprefixer](https://github.com/postcss/autoprefixer)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for that sexy type checking (yes, I know TypeScript exists...)
- Some simple but yet somehow still confusing webpack configuration
    - Includes hot reload
    - Support for importing svgs and pngs
- `package.json` scripts to format JS and SCSS files and a script to lint JS files

## Usage with git clone
The easy way to use this template is to just click the <kbd>Use this template button</kbd>, but if you wan't to clone this and edit the files before uploading it to GitHub, follow these steps:
1. `mkdir some_folder && cd $_`
2. `git clone https://github.com/ctcuff/react-starter-template.git .`
3. `rm -rf .git` <small>Remove starter version control</small>
4. `git init` <small>Initialize your own git repo</small>
5. `yarn` (or `npm install`) <small>Install dependencies</small>

From there, you probably want to rename the `react-starter-template` folder to whatever the name of your new project is. Don't forget to rename it in [package.json](https://github.com/ctcuff/react-starter-template/blob/master/package.json#L2) too!

## Explanation of dependencies
In case you were wondering why there's so much stuff in `package.json`
### dependencies
- `prop-types`: For static type checking
- `react`, `react-dom`:  Necessary React packages

### devDependencies
- `@babel/core`, `@babel/preset-env`, `@babel/preset-react`, `babel-loader`: Used to transpile JS/React files and allows JSX syntax
- `@babel/plugin-transform-runtime`: Allows the use of `async` and `await`
- `autoprefixer`, `postcss`, `node-sass`: Automagically adds vendor prefixes and transpiles future CSS syntax. node-sass allows SCSS to be used.
- `css-loader`, `postcss-loader`, `sass-loader`, `style-loader`: Allows CSS and SCSS files to be imported from JS files. Also allows webpack to process CSS with postcss.
- `eslint`, `eslint-plugin-react`, `prettier`: Linting and formatting
- `husky`, `lint-staged`: Runs custom hooks like linting and formatting after commits
- `babel-eslint`, `eslint-webpack-plugin`: Allows webpack to throw errors and display warnings in the console if eslint rules are broken
- `html-webpack-plugin`: Offers customization over webpack's HTML entry point
- `webpack`, `webpack-cli`, `webpack-dev-server`: Necessary webpack packages. Allows you to run a configurable development server that auto-reloads when files change.
