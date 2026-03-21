---
title: "Unit Tests helped rid of jQuery"
date: 2018-01-08
slug: "ut-helped-rid-of-jquery"
permalink: "/2018/01/08/ut-helped-rid-of-jquery/"
categories: projects SimpleDebugger Jest UnitTests
---
## Xmas

I wrote some code during Xmas. Little but very important. I added [Jest] to running Unit Tests. That helped me to rid of [jQuery]. I learned again some DOM API methods which I forgot that exist.

## Unit Tests

Running tests with [Jest] is very delightful.
All you need to do is on [Jest] documentation website. Adding [Jest] was a very simple task to do.
When all config was ready I wrote tests which tested existing features. Then I started another task...

## Rid of [jQuery]

…which was rid of [jQuery].
One of the goals from the start of mine comeback to [SimpleDebugger] project was rid of [jQuery].
It is not reason that I don't like [jQuery]. I want to [SimpleDebugger] to be independent.

With unit tests rid of dependence was easy. I always knew when I broke something and detected which feature works wrong and I fixed it.

## Future of [SimpleDebugger]

Now I will need refactor code to ES6 and prepare some demo page.

I prepared [Trello Board] for this project.

On this board I will add ideas for some new features.

## Things to do

- Demo site
- think about new features
- Setup use linter

## Things I done

- changed path to dist folder
- Unit Tests
  - now I can run Unit Tests with [Jest]
  - added Unit Tests
- added [linter] for JS
- rid of [jQuery]
- added .editorconfig

[SimpleDebugger]: https://github.com/th3mon/SimpleDebugger
[Trello Board]: https://trello.com/b/kjFt3yJd/simpledebugger
[jQuery]: https://jquery.com/
[Jest]: http://facebook.github.io/jest/
