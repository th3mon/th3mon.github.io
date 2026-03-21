---
title: "Refactoring: use ES6"
date: 2018-01-23
slug: "refactoring-es6"
permalink: "/2018/01/23/refactoring-es6/"
categories: projects SimpleDebugger refactoring es6
---
## ES6

When I started [SimpleDebugger] 5 years ago the [ES5] was a standard. So I refactored code to ES6 using `class` and moving stuff to separate modules. `index.js` file is only start point code. Its grabbing all needed files and exports the main module which is [SimpleDebugger].

### Class

I don’t really like this thing because it causes confusion about objects in JavaScript. I hope it is well known that JavaScript has prototype based architecture. There are no classes in JS.

I love prototypes. It is so different from class object-oriented architecture. I feel prototypes gives developer more freedom than classes. Prototypes are more flexible.

Sure it is cool to have some shortcut to define `Constructors` (I will write post what I mean `"Constructors"` in near future or you can read about it: [From constructors to classes]) and I really don’t know why the `class` is chosen.

I used it in [SimpleDebugger] and it works fine.

### [Modules]

I moved [SimpleDebugger] Constructor and **removeNode()** to separate files.

[SimpleDebugger] has its own file and it exports only this module.

I moved **removeNode()** to **dom.js**. This function is not the default of this module. I think **dom** module will not have any default. It will be the collection of functions to do stuff on DOM.

## Satisfy TODO notes

I added some TODO notes in the past and well, I satisfied them.

One of those notes was about adding version a number to the bundles. I searched for some plugins for [Webpack]. There are some on [Github] but I realized I don't need a plugin. It is really simple to do that. You can grab the version of the project from `package.json` file and put to filename and source map.

```js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const version = require('../package.json').version;

module.exports = function (env) {
  return {
    devtool: 'cheap-module-source-map',
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: `[name].${version}.bundle.js`,
      sourceMapFilename: `[name].${version}.map`
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].bundle.css'
      }),
      new HtmlWebpackPlugin({
        title: 'SimpleDebugger',
        alwaysWriteToDisk: true
      }),
      new HtmlWebpackHarddiskPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      port: 7777,
      host: 'localhost',
      hot: true,
      noInfo: false,
      stats: 'minimal'
    }
  };
};
```

And that's it! Simple enough!

## Added bump version [npm] script

I added [npm] script for bumping the version number. I know this will be helpful. I used it in my work, so this is tested on the live object!

```
"version-bump": "npm run set-tag-prefix && npm version"
```

## Things to do

- Fix MainContainer: Now it enlarges and would cover all window view
- Create demo page
- Create github page
- add CI
- add Code Coverage

## Things I done

- Refactored Code to ES6
- Moved code to separate modules
- Satisfied TODO notes
- created [npm] script for bumping version

[SimpleDebugger]: https://github.com/th3mon/SimpleDebugger
[ES5]: https://en.wikipedia.org/wiki/ECMAScript
[From constructors to classes]: http://exploringjs.com/es6/ch_core-features.html#sec_from-constr-to-class
[modules]: http://exploringjs.com/es6/ch_modules.html
[Modules]: http://exploringjs.com/es6/ch_modules.html
[Webpack]: https://webpack.github.io/
[Github]: https://github.com/
[npm]: https://www.npmjs.com/