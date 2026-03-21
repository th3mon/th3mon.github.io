---
title: "Use Gulp in Simple Debugger"
date: 2017-12-02
slug: "simple-debugger-use-gulp"
permalink: "/2017/12/02/simple-debugger-use-gulp/"
categories: projects gulp SimpleDebugger
---
## Gulp and BrowserSync

I installed [Gulp] and plugins.

I did some configuration.

I installed [BrowserSync].

Everything started work but I realized that I won't have support for newest ECMAScript. So... I've installed [Babel] and gulp plugin for it. And there started trouble.

I wanted that [SimpleDebugger] should be easily used in projects without dependencies needed to install. I want rid of [jQuery]. I love [jQuery]. The reason for ridding of it is that I don't want that [SimpleDebugger] had any dependencies.

## Bundle won't work

The bundled file, prepared by [Babel], just didn't work in a browser. I dropped [Babel] after hours of figuring out how to fix it.

Today I started thinking that I should use [Babel] with [Webpack]. I will go that way. I think I will not need [Gulp] anymore and that is sad. I spend some time to configure [Gulp]. I think [Gulp] is the great tool and really easy to use.

## So... Maybe Webpack will be helpful

Maybe I think about [Webpack] as a hard to use is that I do not really know how it should be configured. I know that [Webpack] is really powerful.

I want also use [BrowserSync] which I think is really cool and useful.

## Things to do

- use [Webpack]
- use [Babel]
- configure [Webpack] to use [BrowserSync]
- rid of [Gulp] if it is necessary

## Things done

- added [Gulp] and plugins
  - [gulp-concat]
  - [gulp-eslint]
  - [gulp-load-plugins]
  - [gulp-sourcemaps]
  - [gulp-uglify-es]
  - [gulp-util]
- [ESLint] configuration file

## Things I didn't do

- It has one dependency - [jQuery] and I will rid of it.

[SimpleDebugger]: https://github.com/th3mon/SimpleDebugger
[Babel]: https://babeljs.io/
[jQuery]: https://jquery.com/
[Webpack]: https://webpack.github.io/
[Gulp]: https://gulpjs.com/
[BrowserSync]: https://www.browsersync.io/
[gulp-concat]: https://github.com/contra/gulp-concat
[gulp-eslint]: https://github.com/adametry/gulp-eslint
[gulp-load-plugins]: https://github.com/jackfranklin/gulp-load-plugins
[gulp-sourcemaps]: https://github.com/gulp-sourcemaps/gulp-sourcemaps
[gulp-uglify-es]: https://github.com/zgwit/gulp-uglify-es
[gulp-util]: https://github.com/gulpjs/gulp-util
[ESLint]: https://eslint.org/
