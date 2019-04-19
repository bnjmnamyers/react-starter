REACT STARTER
=============
This react starter project is largely inspired by Linh Nguyen My's article<br/> ["How to Create a React app from scrath using Webpack 4"](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75).

Installed Dependencies

---

* babel-core (Transforms code from ES6 to ES5 to work in older browsers)
* babel-loader (Transforms JS dependencies)
* babel-preset-env (Determines which transformations/plugins and polyfills to use based on the browser matrix you want to support)
* babel-preset-react (Babel preset for all React plugins, turns JSX into functions)
* css-loader (Resolves css files)
* file-loader (Allows importing of file-based assets into webpack managed JS and CSS files e.g. locally hosted custom fonts)
* html-webpack-plugin (Generates an HTML file with ```<script>``` injected... writes this to dist/index.html and minifies the file)
* node-sass (sass-loader has this as a dependency)
* react
* react-dom
* sass-loader (Allows webpack to compile sass into css)
* style-loader (Injects the styles into the DOM)
* webpack
* webpack-cli (Use webpack in the command line)
* webpack-dev-server (Launch a dev server that watches for changes and auto refreshes)

### Installation
This react starter project requires [Node.js](https://nodejs.org/en/) to run.

Install the dependencies and start the server.

```sh
$cd react-starter
$npm install
$npm start
```