# Phonetical

[![NPM Version](https://badge.fury.io/js/phonetical.svg)](https://badge.fury.io/js/phonetical)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ToeFungi_phonetical&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ToeFungi_phonetical)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ToeFungi_phonetical&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ToeFungi_phonetical)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ToeFungi_phonetical&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ToeFungi_phonetical)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ToeFungi_phonetical&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ToeFungi_phonetical)

Phonetical provides the ability to translate text into a phonetic alphabet string.

**This project is still in development. Please report any bugs or feature requests as an
[issue](https://github.com/ToeFungi/phonetical/issues/new).**

## Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
  - [Translate to phonetic alphabet](#tophoneticstext-dictionary)
  - [Dictionaries](#dictionaries)
- [Tests](#tests)
- [Issues](#issues)
- [Contributions](#contributions)
- [License](#license)

## Getting Started

You can get started with cloning the Phonetical repository by using the following command:

```bash
$ git clone git@github.com:ToeFungi/phonetical.git
$ cd phonetical
$ npm i
```

## Installation

Use the following command to install the Phonetical package:

```
npm i phonetical
```

## Usage

#### .toPhonetics(text, dictionary)

Convert a string to a phonetic alphabet string.

```typescript
import { Phonetical, InternationalDictionary } from './Phonetical'

const text = 'Hello there'

const natoTranslation = Phonetical.toPhonetics(text)
const internationalTranslation = Phonetical.toPhonetics(text, InternationalDictionary)
```

#### Dictionaries

The library comes with various predefined dictionaries which can be used to translate text into a phonetic string.

- [NATO Dictionary](http://www.sckans.edu/~sireland/radio/code.html)  
  This is the default dictionary.
- [English Dictionary](http://www.sckans.edu/~sireland/radio/code.html)
- [American Dictionary](http://www.sckans.edu/~sireland/radio/code.html)
- [Italian Dictionary](http://www.sckans.edu/~sireland/radio/code.html)
- [German Dictionary](http://www.sckans.edu/~sireland/radio/code.html)
- [International Dictionary](http://www.sckans.edu/~sireland/radio/code.html)

## Tests

To run tests, you should be able to simply run be able to run the following.

```bash
$ npm run test
$ npm run coverage
```

The testing framework used is Mocha. Chai and nyc are used for assertions and coverage reporting respectively. Ensure 
that any new changes are covered by an accompanying test suite.

## Issues

If you find any problems while working with this library, please log an issue
[here](https://github.com/ToeFungi/phonetical/issues) so that development can begin to rectify the error.

## Contributions

This project is completely open source and as such, you are invited to make contributions. Fork the project, make some
changes and make the pull request. If you have any feedback regarding the functionality, please don't hesitate to open
an issue so this can be resolved. Please ensure that any pull requests have unit tests that cover any additional
functionality.

## License

MIT License

Copyright (c) 2021 Alex Pickering
