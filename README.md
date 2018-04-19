# MineQ-API-NodeJS-Template
A template project for a nodejs API
***
## Setting up

Clone this repo, remove `.git` directory. Then initialize new git repository and install modules:
```bash
npm install
```

## Directory structure

* `server`: the source for the app goes here.
  * `controllers`: application controllers.
  * `core`: contains application config and base utils like logger.
    * `config`: application config. You can put configuration for different environments here.
    * `logger`: application logger. You can configure it to different environments.
  * `instances`: contains instances of db connectors.
  * `middlewares`: custom app middlewares.
  * `models`: application models for communication with database.
  * `routers`: API endpoints go here, and are automatically loaded at startup.
* `static`: folder containing static files which are served by `koa-static` 

## Database client
  There are two example db clients available: 
  * [mongoose](https://www.npmjs.com/package/mongoose) for MongoDB
  * [sequelize](https://www.npmjs.com/package/sequelize) for SQL Server
 
  You can remove them if you don't need to access DB.

## npm run scripts
  * Runs the TypeScript compiler to compile the app. Files are emitted to dist/:
  ```bash
  npm run compile
  ```
  * Executes ```compile``` and serves files from ```dist/``` directory
  ```bash
  npm run start
  ```
  * Runs the app in development mode. Uses nodemon to apply changes automatically.

  ```bash
  npm run watch
  ```

## Swagger documentation

* [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) module enables to integrate Swagger using JSDoc comments in code. Setup instructions can be found here - [Getting started](https://github.com/Surnet/swagger-jsdoc/blob/HEAD/docs/GETTING-STARTED.md).

* [koa2-swagger-ui](https://www.npmjs.com/package/koa2-swagger-ui) allows you to host swagger ui from swagger-jsdoc output.
