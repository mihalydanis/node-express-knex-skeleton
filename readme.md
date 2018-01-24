# Node Express Knex Skeleton

A simple Node.js based skeleton, using Express and Knex.

## Usage

To use the migration CLI, install Knex globally

```
$ npm install knex -g
```

Example migration included, type either
```
$ knex migrate:latest
$ knex migrate:latest --env staging
$ knex migrate:latest --env production
```

Seeding
```
$ knex seed:run
```

## Built With

* [Express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node
* [Knex](https://github.com/tgriesser/knex) - A SQL query builder that is flexible, portable, and fun to use
