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
$ # Install globally via npm
$ npm i -g github-pr-api

$ # Start server bound to 127.0.0.1:8080
$ github-pr-api --host 127.0.0.1 --port 8080
```
**^^npm bin directory must be in your path variable to work^^**

### Option 3: Local Setup (useful for forking or contributing)
```shell
$ # Clone the repo or download and extract the zip, then cd into it
$ git clone git@github.com:micaiahwallace/github-pr-api.git
$ cd github-pr-api

$ # Inside the project directory, install dependencies using npm
$ npm install

$ # Start up the server, the api url will be log to the console
$ npm start # Append CLI options here
```

## CLI Options
Further configuration can be specified with the following command line flags:
```
github-pr-api [options]

Options:
  --ip    127.0.0.1 - IP address to bind, default: 0.0.0.0 for all ip's
  --port  8080      - Port to bind, default: 0 to let system decide
```