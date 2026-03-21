---
title: "Code Coverage"
date: 2018-02-19
slug: "code-coverage"
permalink: "/2018/02/19/code-coverage/"
categories: projects SimpleDebugger code-coverage
---
## [Code Coverage] in [Jest]

[Code Coverage] is built in [Jest].
Only what is needed to do is [give `--coverage` parameter]:

```
jest --coverage
```

## Reports

Reports are generated as statical sites which are very readable.
Report sites are linked in a way that you can click on the names of files to get more detailed reports.

In detailed reports, you can notice which lines are covered and if all variants of code are covered.

Reports are sortable. You can sort'em by click on the header in the report table.

[Istanbul] is used under [Jest] to generate [Code Coverage] reports.

## Configuration

I didn't do any configuration. I hadn't to!

## npm script

I wrote npm script to run [Code Coverage] on watch:

```
"test:coverage": "jest --watch --coverage"
```

## Things to do

- Create github page

## Things I done

- add Code Coverage

[Code Coverage]: https://en.wikipedia.org/wiki/Code_coverage
[Jest]: https://facebook.github.io/jest/
[give `--coverage` parameter]: https://facebook.github.io/jest/docs/en/cli.html#coverage
[Istanbul]: https://github.com/istanbuljs/nyc/
