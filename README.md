# MineQ-API-NodeJS-Template
A template project for a nodejs API
***
## Setting up

Clone this repo, remove `.git` and `examples` directory. Then initialize new git repository and install modules:
```bash
npm install
```

## Directory structure

* `app`: the source for the app goes here.
  * `routers`: API endpoints go here, and are automatically loaded at startup.
  * `middlewares`: custom app middlewares.
  * `controllers`: application controllers.
  * `models`: application models for communication with database.
  * `config`: application config. You can put configuration for different environments here.

## Database client
  To add database client to your application you can use any available npm module. For example:
  * [mongoose](https://www.npmjs.com/package/mongoose) for MongoDB
  * [mssql](https://www.npmjs.com/package/mssql) for Microsoft SQL Server

## npm run scripts
  * Runs the babel CLI to compile the app. Files are emitted to dist/:
  ```bash
  npm run build
  ```
  * Executes ```build``` and serves files from ```dist/``` directory
  ```bash
  npm run start
  ```
  * Runs the app in development mode. Uses babel-node to compile code. Also uses nodemon to apply changes automatically.

  ```bash
  npm run watch
  ```
