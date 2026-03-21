---
title: "Demo Page and scrollable Main Container"
date: 2018-02-10
slug: "demo-page-and-scrollable-main-container"
permalink: "/2018/02/10/demo-page-and-scrollable-main-container/"
categories: projects SimpleDebugger
---
## Demo Page

I prepared Demo Page for testing and adding new features purposes.

I prepared two [npm] scripts:
- the first for building Demo Page files - `build:demo`
- the second for running the dev server - `start:demo`

Scripts using [Webpack] which use config file prepared for Demo Page. I just duplicated `config/dev.js` file and made some changes in it ([Added Demo - config file]).

## Scrollable Main Container

### The problem with height of Main Container

In Main Container appears all messages. When a message was added or deleted then the height of Main Container actualized. It was possible to cover all page's content when Main Container had many messages.

### How did I fix the problem?

I thought that the Main Container should have a fixed height and that it should be scrollable. This solved the problem of covering the content of the page by [SimpleDebugger].

## Things to do

- add CI
- add Code Coverage
- Create github page

## Things I done

- Create demo page
- Fix Main Container: Now it enlarges and would cover all window view

[SimpleDebugger]: https://github.com/th3mon/SimpleDebugger
[Webpack]: https://webpack.github.io/
[npm]: https://www.npmjs.com/
[Added Demo - config file]: https://github.com/th3mon/SimpleDebugger/commit/1692fccff90595885146f9ad0cafe25888bceeae#diff-2be2302728160105338b268d775be73a
