# Github PR API

The purpose of this API is to allow the client to access detailed information about open pull requests for a given github repository. The project is a standalone node API that can be run on any machine that has the node runtime installed.

## Quick Start

**Prerequisites: Install the [Node Runtime](https://nodejs.org/en/)**

### Option 1 (fastest): Using npx
```shell
$ npx github-pr-api # Start the server on a random port bound to 0.0.0.0
```

### Option 2: npm global install
```shell
$ npm i -g github-pr-api # Install globally via npm
$ github-pr-api --host 127.0.0.1 --port 8080 # Start server bound to 127.0.0.1:8080
```
**^^npm bin directory must be in your path variable to work^^**

### Option 3: Local Setup (useful for forking or contributing)
1. Clone the repo or download and extract the zip: `git clone https://github.com/micaiahwallace/github-pr-api`
2. Inside the project directory, install dependencies using npm `npm install`
3. Start up the server with `npm start` and the api url will be displayed in the console

## CLI Options
Further configuration can be specified with the following command line flags:
```shell
$ github-pr-api     \
  --ip 127.0.0.1    \ # IP address to bind, default: 0.0.0.0 for all ip's
  --port 6000       \ # Port to bind, default: 0 to let system decide
```