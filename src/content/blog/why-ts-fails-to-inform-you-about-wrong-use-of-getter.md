---
title: "Why TypeScript fails to inform you about wrong use of getter?"
date: 2019-03-27
slug: "why-ts-fails-to-inform-you-about-wrong-use-of-getter"
permalink: "/2019/03/27/why-ts-fails-to-inform-you-about-wrong-use-of-getter/"
categories: typescript, javascript
---
## What Happend

While refactoring Switcher class in one of my projects I got error:

> error TS2349: Cannot invoke an expression whose type lacks a call signature. Type 'Switcher' has no compatible call signatures.

"What the hell?!" - I thought. I looked into given line number of the error log. It looked like: `path/to/file/switcher.ts(line,column)` and in that line and column was only getter... I googled entire error message and found nothing that could help me. The solution is very easy and that is the reason of no solution on internet. But I couldn't figure out how to fix the problem.

I asked my collegue to look into the code, which looks similiar to:

```ts
class Switcher {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  click(): void {
    console.log(`Switcher ${this.name} was clicked.`)
  }
}

class Page {
  private get switcher(): Switcher {
    return new Switcher('page');
  }

  toggleSwitcher() {
    this.switcher().click();
  }
}

const page = new Page();

page.toggleSwitcher();

```

He found problem and solution very quickly. Do you know the solution? YES! In `toggleSwitcher()` method `switcher` is called but this is a getter not the method. When I got rid of brackets it worked fine. If I didn't call for help I could wrestle with this for hour or more.

## The next day

The next day I struggled with the fact I didn't realize what was the reason behind the error. Why I didn't notice that I called getter as a method?
I wrote the same code in JS.

```js
class Switcher {
  constructor(name) {
    this.name = name;
  }

  click() {
    console.log(`Switcher ${this.name} was clicked.`)
  }
}

class Page {
  get switcher() {
    return new Switcher('page');
  }

  toggleSwitcher() {
    this.switcher().click();
  }
}

const page = new Page();

page.toggleSwitcher();

```

It logged me a message:

> Uncaught TypeError: this.switcher is not a function
    at Page.toggleSwitcher (<anonymous>:17:10)
    at <anonymous>:23:6

Wow! This message clearly said that `this.switcher` is not a function. Not some lack of a signature like it was in TS error message! If TS could log this instead of crap it give to me, I think I wouldn't ask anybody for help! `this.switcher is not a function`! Just like that! Bad TypeScript! BAAAD!!!
