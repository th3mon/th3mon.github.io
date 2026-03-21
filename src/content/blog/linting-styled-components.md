---
title: "Lint Styled Components"
date: 2020-08-14
slug: "linting-styled-components"
permalink: "/2020/08/14/linting-styled-components/"
categories: React
---
**TLDR:** Do [VSC] jest wtyczka koloryzująca style napisane za pomocą [Styled Components] oraz najwidoczniej uruchamia się dodatkowo process lintowania -> [vscode-styled-components]

Podczas implementowania projektu z [8 Projects with Designs you can do to Become FRONT-END developer - DEV] zastanawiałem się czy style napisać w [SCSS] czy może jednak użyć [Styled Components].

Tak naprawdę decyzji jeszcze nie podjąłem. Część styli mam w [SCSS] a część w [Styled Components].

## stylelint-processor-styled-components

Jedna sprawa mi przeszkadzała. Style z [Styled Components] nie przechodziły przez [stylelint]'a. Natrafiłem na [stylelint-processor-styled-components]. "Świetnie!" pomyślałem i zastosowałem rady z dokumentacji. Problem w tym, że od tegomomentu pipe dla CSS i SCSS przestał mi działać. Jakoś dużo czasu nie chciałem spędzić na rozwiązanie tego problemu i zaparkowałem temat na [branchu](https://github.com/th3mon/button-component/tree/stylelint-styled-components).

## vscode-styled-components

Zajrzałem do [dokumentacji Styled Components]. Zauważyłem, że jest wtyczka do kolorowania składni CSS'ów w [Styled Components] -> [vscode-styled-components]. Doinstalowałem i ku memu zaskoczeniu [VSC] uruchomił lint dla styli w komponencie używającym [Styled Components].

## Podsumowanie

Myślę, że nie mam się co przejmować, którą drogą iść oraz cieszę się, że stylelint mi działa! Dodatkowo nie musiałem spędzać zbyt dużo czasu na rozwiązanie problemu lub szukaniu jego obejścia. Więcej czasu mi zajęło napisanie tego posta!

[VSC]: https://code.visualstudio.com/
[vscode-styled-components]: https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
[8 Projects with Designs you can do to Become FRONT-END developer - DEV]: https://dev.to/nghiemthu/8-projects-with-designs-you-can-do-to-become-front-end-developer-4pf8
[SCSS]: https://sass-lang.com/
[Styled Components]: https://styled-components.com/
[dokumentacji Styled Components]: https://styled-components.com/docs/tooling#jest-integration
[stylelint]: https://stylelint.io/
[stylelint-processor-styled-components]: https://github.com/styled-components/stylelint-processor-styled-components
[React Testing Library]: https://testing-library.com/docs/react-testing-library/intro
