# webpack-example

Example Webpack configuration code from the
[SurviveJS - Webpack](https://www.amazon.com/SurviveJS-Webpack-apprentice-Juho-Vepsäläinen-ebook/dp/B06XWZZGBS)
book. I've modified the examples a bit by splitting the config parts that were in the book's single `webpack.parts.js`
file into separate files for each part, and also by putting everything Webpack-related into the `webpack/` directory.

This was mainly an exercise to learn about all of the various things that Webpack can do, and I wouldn't necessarily go
all-in on Webpack like this for every project.

Features:
* Webpack main configuration is split into three files: one for production, one for local development, and one for
common configuration shared between both.
* Webpack configuration for individual tasks is further split into individual files in the `webpack/parts/` directory.
* Local development mode has live reloading after any local file changes with webpack-dev-server and visible errors
and warnings through the webpack-dev-server overlay.
* HTML is generated automatically with HtmlWebpackPlugin.
* CSS, JavaScript, fonts, and images are all loaded into Webpack.
* CSS is extracted to CSS files for production.
* CSS vendor prefixes are added when needed with Autoprefixer.
* CSS is linted with Stylelint.
* CSS is minified for production with cssnano.
* JavaScript is transpiled with Babel for better browser compatibility.
* JavaScript is linted with ESLint.
* JavaScript is minified with Babili and reduced further by free variable replacement with DefinePlugin.
* `component.js` has an example of a dynamic import for lazy-loading of JavaScript resources.
* User-facing JavaScript is split into `app.js` and `vendor.js` files so that users don't have to re-download heavy
third-party JS when application code is updated.
* Source maps are created for both CSS and JS files, using cheap-module-eval-source-map in development for speed and
source-map in production for accuracy.
* Git revisions are prepended to CSS and JS files with a comment in production to aid debugging.
* File names for CSS and JS files are hashed in production for cache control.
* Images below 15KB are inlined with base64 encoding for production.
* The `build/` directory is emptied with CleanWebpackPlugin before a production build.
* Performance warnings for overly large files are output to the console in production.

Here are all of the command line scripts that can be run:
* `npm run build` builds the app in production mode.
* `npm run lint:css` lints the CSS.
* `npm run lint:js` lints the JavaScript.
* `npm run start` is for local development. It runs webpack-dev-server and immediately refreshes the view in the
browser after any changes.
* `npm run stats` compiles Webpack stats into `webpack/stats.json` though I don't do anything with that here.
