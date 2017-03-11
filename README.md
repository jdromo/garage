# What JavaScript Everywhere Really Looks Like | SXSW 2017 | The Garage

Welcome to the Garage. This is the demo project for the SXSW 2017 workshop: What JavaScript Everywhere Really Looks Like. This is world's most uselessly complex garage door opener. It includes hardware controllers, backend web services, and iOS, Android, desktop, and web clients for controlling a garage door, all written completely in JavaScript.

[See a video of the garage in action.](https://monosnap.com/file/ckyBtfoe2AHDFmVcPk6UyYxDCuy42n)

During the workshop, we'll be guiding you through this system, as well as offering the opportunity to complete some exercises related to the system.

This repository includes all aspects of the Garage system.

*NOTE: The API must be running to use any of the control clients.*

## Dependencies

- [Node](https://nodejs.org/en/) (v7 or newer)
- [Redis](https://redis.io/) (Windows users may try to use [the Windows port](https://github.com/MSOpenTech/redis/releases).)
- [Yarn](https://yarnpkg.com/en/)

(If you don't have Node, Redis, or Yarn, and can't successfully download them, we have some binaries and installers available on USB drives.)

Install Node and Redis. After Node is installed, install Yarn by running `npm install -g yarn` or by choosing any of the other [recommended Yarn installation methods](https://yarnpkg.com/lang/en/docs/install/#mac-tab).

If you run into issues using Yarn, double check that your PATH is
correctly
[configured for Yarn](https://yarnpkg.com/lang/en/docs/install/#alternatives-tab).

Our final exercise uses React Native, which has some additional
dependencies on iOS and Android. Run through the React
Native
[getting started guide](https://facebook.github.io/react-native/docs/getting-started.html) to
ensure you have everything setup for these environments.

## Exercises

Our three exercises can be found in the [`/exercises` directory](https://github.com/ltk/garage/tree/master/exercises) in this repository. The exercises are ordered by level of difficulty/prerequisite knowledge (i.e. If you are a beginner to JavaScript, you will feel most comfortable with [Exercise 1](https://github.com/ltk/garage/tree/master/exercises/1-investigation)).

## Running the API

### Setup

```
cp .env.example .env
yarn install
```

### Start

```
yarn start
```

This single command will start a Redis server, the Node API server, and the Node worker.

## Viewing the complete projects

In addition to the exercises folder, we've included an completed
folder with completed versions of every exercise.

### Running answer for exercise 1

```bash
cd completed/1-investigation

# Fetch dependencies
yarn install

yarn start:web

# or

yarn start desktop
```

### Running answer for exercise 2

```bash
cd completed/2-changing

# Fetch dependencies
yarn install

yarn start:web

# or

yarn start desktop
```

### Running answer for exercise 3

Exercise three uses React Native, which has some additional
dependencies on iOS and Android. Run through the React Native getting
started guide to ensure you have everything setup for these
environments:

https://facebook.github.io/react-native/docs/getting-started.html

```bash
cd completed/3-creation

# Fetch dependencies
yarn install

yarn start:ios

# or

yarn start:android

# or

yarn start:web
```

## Getting Help

During the workshop, we'll be around to help answer any question you
have or help trouble shoot any error you encounter. Just ask!
