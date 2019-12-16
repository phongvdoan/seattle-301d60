# Warm-Up Exercise
Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```
'use strict';

const express = require('express');
const pg = require('pg');

const app = express();
cons PORT = 3000;

const client = new pg.Client('postgres://ncarignan:password@localhost:5432/peeps');
client.connect();

// localhost:3000/?username=ncarignan&password=supersecretpassword
app.get('/',  (request, response) => {
// when we select first in the app we have built, we do so to prevent duplicates
  let SQL = 'INSERT INTO users (username, age, password) VALUES ($1, $2, $3)';

  // the purpose of the values variable : store in the database
  let values = [request.query.username, request.query.age, request.query.password ];
  
  client.query(SQL, values)
    .then(result => {
      response.send(result.rowCount);
    })
})

app.listen(PORT, () {
  console.log('Listening on ${PORT}')}
);
```

## schema.sql

```
DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  age INTEGER NOT NULL
);
```
