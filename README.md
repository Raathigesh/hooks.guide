# Hooks.guide

Collection of small hooks curated as a single collection.

- 🍍 A collection of small React hooks
- 💡 All examples are interactive. Experiment as you wish.
- 🎈 Copy snippets to clipboard with a click
- 💄 Prettify the snippets

## How do I add a new Hook?

The hooks are documented using markdown in `public/docs` directory.

To add a new hook,

- Add a new markdown file under a folder. The name of the file is used as the navigation link in sidebar.
  - Document the hook under `community` folder if the hook doesn't belong to a published npm module
- Refer `public/docs/template.md` for documentation guide
- Make a pull request

## How does this work?

This is a project bootstrapped by [create-react-app](https://github.com/facebook/create-react-app). The hooks are documented using markdown in `public/docs` folder.

The markdown files are downloaded and displayed as you view the hooks.

But navigation sidebar needs to know all the markdown files avilable so it can display the names of them. Thanks to [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros), we read the markdown file structure during build time and use it for navigation and routes. The macro is available in `src/docs-macro` folder. The macro is used in `src/docs.js`.

## Contribute

- Run `yarn install`
- Run `yarn start` to start the app in dev mode
- If you add a new markdown file, you have to go to `src/docs.js` file and just make a dummy change to traigger a webpack build. This runs the babel macro again.
