---
title: "[PL] My Cookbook | Unit Tests"
date: 2019-01-04
slug: "my-cookbook-unit-tests.pl"
categories: MyCookbook
---
## Unit tests

Zauważyłem, że nie ma konfiguracji dla testowania kodu testami jednostkowymi.

### Jest

Jest jest test runnerem i frameworkiem wspierającym pisanie testów jednostkowych. Bardzo lubię w jaki sposób używa się Jest'a w konsoli. Myślę, ze w bardzo przejrzysty sposób pokazuje wynik działania testów.

Pogrzebałem w sieci i znalazłem repozytorium https://github.com/datencia/ionic2-jest-example, z którego wziąłem konfigurację dla Jest'a.

### Dependencies

Sposób budowania zależności nie spodobał mi się jaki był przedstawiony w przykładowych testach w repozytorim. Problem polegał na zbyt skomplikowanym przygotowaniem modułów. Zainstalowałem wtyczkę jest-createspyobj i napisałem proste moki za pomocą tej wtyczki.

### Spies Implementation Process

Implementację zrobiłem puszczając testy. Na podstawie logów dostarczyłem kod, który nie powodował błędów. Na tym poziomie nie jest istotne jak faktycznie te moduły są zaimplementowane. Spies mają jedynie udawać, że działają poprawnie.

### Index.ts
By łatwo się importowało Spies przygotowałem zbiorczy plik z exportami.
Tutaj źródło /mocks/index.ts
