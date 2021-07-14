# Github PR API

The purpose of this API is to allow the client to access detailed information about open pull requests for a given github repository. The project is a standalone node API that can be run on any machine that has the node runtime installed.

# Quick Start

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

$ # Start up the server, the api url will log to the console
$ npm start # Append CLI options here
```

## CLI Options
Further configuration can be specified with the following command line flags:
```
github-pr-api [options]

Options:
  --ip    127.0.0.1 - IP address to bind, default: 0.0.0.0 for all ip's
  --port  8080      - Port to bind, 0 to let system decide, default: 8080
```

# API Documentation

## Fetch all Pull Requests

`GET /pulls` - Fetch a list of pull requests for a given repository

**Query Parameters**

* **repo** - Specify the repository URL in one of the following formats:
    * Full url: `https://github.com/user/repo`
    * Schemaless: `github.com/user/repo`
    * Just repo: `user/repo`
* **per_page** - Max number of results to return per response page (default: 30)
* **page** - Page number to start at based on per_page number (default: 1)

**Example Request**

```bash
# Retreive the 3rd page of mongodb pull requests for a 50 count page
GET /pulls?repo=mongodb/mongo&per_page=50&page=3
```

**Example Response**
```json
{
  "total_count": 57,
  ...
  "items": [
    {
      "id": 942018531,
      "number": 1409,
      "title": "SERVER-58467 Czech and Slovak FTS stemmers",
      ...
    }
    ...
  ]
}
```

---

## Get a single Pull Request

`GET /pulls/{pr}` - Fetch a pull request details by pr number

**URL Parameters**

* **pr** - A pull-request number for a repository

**Query Parameters**

* **repo** - Specify the repository URL in one of the following formats:
    * Full url: `https://github.com/user/repo`
    * Schemaless: `github.com/user/repo`
    * Just repo: `user/repo`

**Example Request**

```bash
# Retreive a specific pull request on the mongodb repo
GET /pulls/1380?repo=mongodb/mongo
```

**Example Response**
```json
{
  "number": 1380,
  "title": "Update baton.md",
  "state": "open",
  "locked": false,
  "merged": false,
  "commits": 1,
  ...
}
```