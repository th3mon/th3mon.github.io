---
title: "Continuous Integration"
date: 2018-02-16
slug: "continuous-integration"
permalink: "/2018/02/16/continuous-integration/"
categories: projects SimpleDebugger ci continuous-integration
---
## Why simple project as [SimpleDebugger] needs [CI]?

Answer is simple.
- I what to learn something new
- [CI] is not so much known topic for me
- for fun!

## Why I chose [CircleCI]?

### I didn't want use [TravisCi]
- I saw [TravisCi] in many projects on [Github]
- I think I will use it in some other project
- I wanted something new for me

### [CircleCI]

It is very easy to start working with it.
I don't quite remember what things must be done but there is the reason for it.
[CircleCI] needs a config file and connection with project repository.
Of course, you need to register on [CircleCI].

I made mistake and [CircleCI] gives me some errors at the start.
It was my fault.
I didn't changed needed version of nodeJS in config file.
When I fixed it [CircleCI] just started!

I added integration with [Slack].
When I commit something I get a message on [Slack] about the results from [CircleCI].
It is AWESOME!

I added badges to [README] file.
It shows the status of branches **master** and **develop**.

#### [Fun Fun Function]

I saw series about [CI] on [Fun Fun Function] channel on [Youtube].
You can watch it too: [Continuous Integration - What's the point?].
[Fun Fun Function] is great show of [@mpj].
He is talking a lot about JavaScript but it isn't only one thing which he talks about.
You definitely should give him a try and watch some movie.

## Things to do

- add Code Coverage
- Create github page

## Things I done

- add CI
  - integration with [CircleCI]
  - integration with [Slack]
  - badges in [README] file

[SimpleDebugger]: https://github.com/th3mon/SimpleDebugger
[CI]: https://en.wikipedia.org/wiki/Continuous_integration
[CircleCI]: https://circleci.com/
[TravisCi]: https://travis-ci.org/
[Github]: https://github.com/
[Fun Fun Function]: https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q
[Youtube]: https://youtube.com/
[@mpj]: https://twitter.com/mpjme
[Continuous Integration - What's the point?]: https://youtu.be/ymPOI4gWQFY
[Slack]: https://slack.com/
[README]: https://github.com/th3mon/SimpleDebugger/blob/master/README.md
