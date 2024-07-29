[![Node.js CI](https://github.com/stbestichhh/stlib-guard/actions/workflows/node.js.yml/badge.svg)](https://github.com/stbestichhh/stlib-guard/actions/workflows/node.js.yml)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# @stlib/guard

## Table of contents

* [Description](#about)
* [Getting started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)  
  * [Usage](#usage)  
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Authors](#authors)
* [License](#license)

## About

**@stlib/guard** - is a library which provides guards to node.js. You simply set metadata somewhere, and checks for existing of this metadata somewhere else to deny access to something. 

## Getting started

### Prerequisites

* yarn `npm i -g yarn` or `corepack enable`

> [!IMPORTANT]
> **Node.js 18.x+** version must be installed in your OS.

### Installation

```shell
$ yarn add @stlib/guard
```

### Usage

1. Set metadata:

```TypeScript
import { Guardian } from '@stlib/guard';

Guardian.setMetadata('Key', ['some', 'data']);

// Also you can remove metadata
Guardian.removeMetadata('Key');
```
2. Use guard somewhere in the code

```TypeScript
import { Guardian, MetaGuard } from '@stlib/guard';

Guardian.useGuard(new MetaGuard('Key'));
Guardian.useGuard(new MetaGuard('NotExistingKey')); // Will throw MetaException

// Also you can get all metas
MetaGuard.getMetas();
```

#### Creating your own Guards and Exceptions

Example:

```TypeScript
import { Guard, GuardException } from '@stlib/guard';

export class NewGuard extends Guard {
  constructor(key: string) {
    super(key);
  }
  
  protected checkData {
    const metas = Guard.getMetas();
    if (metas.has(this.metaKey)) { 
      throw new NewException('Bad metadata exists');  
    }
  }
}

export class NewException extends GuardException {
  readonly code: number = 400;

  constructor(message: string, options?: { [key: string]: string | number }) {
    super(message, options);
  }
}
```

> [!NOTE]
> You can provide any personal implementations you want

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

Project changes are writen in changelog, see the [CHANGELOG.md](CHANGELOG.md).

We use [SemVer](https://semver.org/) for versioning.
For the versions available, see the [tags](https://github.com/stbestichhh/stlib-guard/tags) on this repository.

For the supported and unsupported versions, see the [SECURITY.md](SECURITY.md).

## Authors

- [@stbestichhh](https://www.github.com/stbestichhh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
