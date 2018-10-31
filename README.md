# Hooks.guide

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

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
- If you add a new markdown file, you have to go to `src/docs.js` file and just make a dummy change to trigger a webpack build. This runs the babel macro again.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/3108160?v=4" width="100px;"/><br /><sub><b>Raathigeshan Kugarajan</b></sub>](https://twitter.com/Raathigesh)<br />[💻](https://github.com/Raathigesh/hooks.guide/commits?author=Raathigesh "Code") [🎨](#design-Raathigesh "Design") [💡](#example-Raathigesh "Examples") [📖](https://github.com/Raathigesh/hooks.guide/commits?author=Raathigesh "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/4931048?v=4" width="100px;"/><br /><sub><b>Vivek Nayyar</b></sub>](https://www.viveknayyar.in/)<br />[💻](https://github.com/Raathigesh/hooks.guide/commits?author=vivek12345 "Code") [💡](#example-vivek12345 "Examples") [📖](https://github.com/Raathigesh/hooks.guide/commits?author=vivek12345 "Documentation") |
| :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
