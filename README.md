
<h1 align="center">
  <br>
  Challenges técnico 42i
  <br>
</h1>

![screenshot](https://github.com/pablopissoni/challenges_42i/blob/main/screenshots/Front_Ejemplos.png?raw=true?raw=true)

## Challenge
The challenge consists of 2 exercises: Smallest Difference and Non-Constructible Change

### *Smallest Difference*
Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

const a = `[1, 3, 15, 11, 2]`;

const b = `[23, 127, 235, 19, 8]`;

**smallestDifference(a, b);** *output: 3*

### *Non-Constructible Change*
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
 git clone https://github.com/pablopissoni/challenges_42i.git

# Go into the repository
 cd challenges_42i

# Install dependencies
 npm install

# Run the app
 npm start
```

> Start in ➜  Local:   http://localhost:5173/

## Running docker

You can run the localy without docker run

```bash
$ npm start
```

build the Docker image

```bash
$ docker build -t <username>/challenge-42-web
```

to load the docker image use

```bash
$ docker run -p 3000:5173 -d <username>/challenge-42-web
```
## Testing

You can run the tests this way:

```bash
# Run test
$ npm test
```
![screenshot](https://github.com/pablopissoni/challenges_42i/blob/main/screenshots/test.png?raw=true?raw=true)
---
