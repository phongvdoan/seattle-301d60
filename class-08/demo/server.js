'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
app.use(cors());

// this is postgres' client
// takes a paramater of database url
// put your computer's version of this string into your .env
const client = new pg.Client('postgres://ncarignan:password@localhost:5432/demodayeight');
client.on('error', error => console.error(error));
client.connect();

app.get('/', (req, res) => {
  const SQL = 'SELECT * FROM people;';
  client.query(SQL).then(sqlResponse => {
    console.log(sqlResponse);
    res.send(sqlResponse.rows);
  });


});

app.get('/add', (req, res) => {
  // const SQL = `INSERT INTO people(
  //   first_name,
  //   ssn,
  //   ninja_status
  // ) VALUES(
  //   'nicholas',
  //   1234,
  //   TRUE
  // )`;
  const SQL = `INSERT INTO people(
    first_name,
    ssn,
    ninja_status
  ) VALUES(
    $1, 
    $2,
    $3
  )`; // 1 refers to index 0

  // has an optional second parameter of an array of placeholders (things that match up to the templates specified by $)
  client.query(SQL, [req.query.name, 6547, true]);
  res.sendStatus(200);
});

app.listen(3000, () => {console.log('it worked');});
