---
title: "Use Webpack in Simple Debugger"
date: 2017-12-08
slug: "simple-debugger-use-webpack"
permalink: "/2017/12/08/simple-debugger-use-webpack/"
categories: projects SimpleDebugger Webpack
---
## Webpack

I configured [Webpack]! I had some troubles but at the end I did it!
I have [Babel], [Sass] and automatically generated **index.html** with linked bundle files.

## DevServer, Live Reloading and HMR

For first I wanted to use dev server which I configured with [Gulp]. For some reason, it didn’t work worked well with [Webpack]. Maybe I've made some mistake. I don't know honestly. So I started to search how to do it with [Webpack].

### DevServer

[Webpack] has a plugin for this purpose: [webpack-dev-server]. I used the guide from official [Webpack]'s site: [Using webpack-dev-server].

## Watch mode

[In this guide] is also example of watch configuration. I don't know if I need watch mode yet. Maybe not.

### HMR

[HMR] is working perfectly but I had some strange issues. For start, I had a configuration that generated index.html with bundled files in the main folder. It didn’t replace modules on change and also [webpack-dev-server] didn’t reload page either. When I configured to generate index.html file in /dist folder it started to work!

You can go to [dev.js] file on [SimpleDebugger’s Github]. It has some crazy configuration which I found at [Webpack 2 - A full tutorial]. I went through this tutorial in the past and it was great. I need to watch it again to recall wisdom from it.

## It works

I did this all in the night from 7 dec 2017 to 8 dec 2017. I do sleep well but I had 4-hour sleep twice on a day. I sometimes have that kind of freaky sleep cycle… Normally I sleep about 8 hours. It was kind of fun to do stuff with [Webpack]. I was worried that I will not understand what I’m doing because when I met [Webpack] first it was so different from Gulp and hard to understand how [Webpack] should be configured.

I gained some experience and [Webpack] is simpler for me but I have questions without answers about [Webpack] and I will search for this answers.

## Things to do

- It has one dependency - [jQuery] and I will rid of it.
- Setup Unit Testing
- Setup use linter

## Things I done

- Weback configuration

## Things I will not do

- configure [Webpack] to use [BrowserSync]

[SimpleDebugger]: https://github.com/th3mon/SimpleDebugger
[SimpleDebugger’s Github]: https://github.com/th3mon/SimpleDebugger
[jQuery]: https://jquery.com/
[Gulp]: https://gulpjs.com/
[webpack-dev-server]: https://github.com/webpack/webpack-dev-server
[Webpack]: https://webpack.github.io/
[Using webpack-dev-server]: https://webpack.js.org/guides/development/#using-webpack-dev-server
[In this guide]: https://webpack.js.org/guides/development/#using-watch-mode
[dev.js]: https://github.com/th3mon/SimpleDebugger/blob/feature/webpack/config/dev.js
[SimpleDebugger's Github]: https://github.com/th3mon/SimpleDebugger
[Webpack 2 - A full tutorial]: https://www.youtube.com/watch?v=eWmkBNBTbMM&feature=youtu.be
[BrowserSync]: https://www.browsersync.io/
[HMR]: https://webpack.js.org/guides/hot-module-replacement/
[Babel]: https://babeljs.io/
[Sass]: http://sass-lang.com/
