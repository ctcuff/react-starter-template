# Yet Another React App

## Why

`create-react-app` doesn't always cut it, but I can never remember how to set up a React project from scratch... This repo contains some super minimal boilerplate code for a starter React project created using rsbuild. This template uses `yarn` instead of `npm`.

## What's Included

- [eslint](https://github.com/eslint/eslint) and [prettier](https://github.com/prettier/prettier)
- [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), to format and lint files with pre-commit hooks
- SCSS


## Usage with git clone

In order to use this template, you'll need to clone the repo. <kbd>Use this template</kbd> will create a template from the master branch.

1. `mkdir some_folder && cd $_`
2. `git clone https://github.com/ctcuff/react-starter-template.git .`
3. `rm -rf .git` (Remove starter version control)
4. `git init` (Initialize your own git repo)
5. `yarn`

From there, you probably want to rename the `react-starter-template` folder to whatever the name of your new project is. Don't forget to rename it in [package.json](https://github.com/ctcuff/react-starter-template/blob/master/package.json#L2) too!
