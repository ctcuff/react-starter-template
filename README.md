# Yet Another React Template

`create-react-app` doesn't always cut it, but I can never remember how to set up a React project from scratch... This repo contains some super minimal boilerplate code for a starter React project.

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
