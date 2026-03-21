---
title: "How I fixed the issue with using SimpleDebugger in a browser"
date: 2018-04-09
slug: "fix-cant-use-by-script-tag"
permalink: "/2018/04/09/fix-cant-use-by-script-tag/"
categories: SimpleDebugger
---
## I made a mistake

I configured [Webpack] for an app, not for library and that was the mistake I made.
[Start your own JavaScript library using webpack and ES6] post was very helpful and [Authoring Libraries] from Webpack documentation.
I changed [Webpack]'s configuration. [SimpleDebugger] can be used as `<script>` tag in a browser.

## What else I changed

### I extracted Logger

I changed conception and [SimpleDebugger] is whole library now.
For now, it has only Logger module.
Logger is tool for logging the messages like [SimpleDebugger] was.
So functionally nothing is changed.

### ClassNames refactor

I refactored ClassNames and every class is written in [kebab-case].

### Demo

I've changed code [Demo].
[SimpleDebugger] is loaded as a global variable.
You can play with it, e.g.:

```js
var myLogger = new SimpleDebugger.Logger(0);

myLogger.add('Testing... Testing...');
```

[Webpack]: https://webpack.github.io/
[Start your own JavaScript library using webpack and ES6]: http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6
[Authoring Libraries]: https://webpack.js.org/guides/author-libraries/
[SimpleDebugger]: https://github.com/th3mon/simple-debugger
[kebab-case]: http://wiki.c2.com/?KebabCase
[Demo]: https://rawgit.com/th3mon/simple-debugger/develop/index.html
