 # [Toy Robot application](https://toy-robot.now.sh/)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/hjemmel/toy-robot)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hjemmel/toy-robot)
[![CircleCI](https://circleci.com/gh/hjemmel/toy-robot.svg?style=svg)](https://circleci.com/gh/hjemmel/toy-robot)

## How to Run the application and the tests

### Requirements

* [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [Docker Compose](https://docs.docker.com/compose/install/) installed in the machine

## Run the tests

```sh
make test
```

### Run the application

```sh
make dev
```

## CI / CD

Application is built using [CircleCI](https://circleci.com/gh/hjemmel/toy-robot/) and deployed in [ZEIT now](https://toy-robot.now.sh/)

## Technologies / Libraries

-   [Webpack](https://webpack.github.io/) - module bundler & task runner
-   [Styled Components](https://github.com/styled-components/styled-components) - Visual primitives for the component age 💅
-   [Expressjs](https://expressjs.com) -  web framework for Node.js
-   [Yarn](https://yarnpkg.com/en/) - package manager
-   [TypeScript](https://www.typescriptlang.org) - Typed superset of javascript that compiles to plain javascript
-   [ESLint](https://eslint.org/) - Lint tool for TypeScript
-   [Jest](https://jestjs.io) - Test Suite
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - builds on top of dom-testing-library by adding APIs for working with React components.
