'use strict';

// dependencies
const pg = require('pg');
const express = require('express');
const methodoverride = require('method-override');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
// Method override
// decided if it should change a request into a DELETE or PUT
app.use(methodoverride('_method'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));


const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', (e) => console.error(e));
client.connect();

app.get('/', (req, res) => {
  const instruction = 'SELECT * FROM tasks;';
  client.query(instruction).then(function(sqlData){
    // console.log(sqlData.rows);
    const todoArray = sqlData.rows;
    if(todoArray.length > 0){
      res.render('index', { todoArray: todoArray });
      // res.render('index', { todoArray });
    } else {
      res.render('index');
    }

  });


});

app.get('/create-task', showCreateTask);

app.post('/create-task', handleCreateTask);

// :potato is a route parameter
app.get('/task/:potato', getOneTask);

app.get('/params/:first/:second/:third/:etc', (req, res) => {
  // console.log(req.params);
  res.send(req.params);
});

app.delete('/delete', deleteOneTask);

app.listen(process.env.PORT || 3000, () => console.log('we are up'));

// function renderTasks(sqlData){
//   console.log(sqlData.rows);
//   const todoArray = sqlData.rows;
// }

function showCreateTask(req, res){
  res.render('task-form');
}


function handleCreateTask(req, res){
  // console.log(req.body);
  const instruction = `INSERT INTO tasks 
  (title, description, contact, status, category, due)
   VALUES ($1, $2, $3, $4, $5, $6)`;

  //  const values = [req.body.title, req.body.description...]

  const values = Object.values(req.body);
  // console.log(values);



  client.query(instruction, values);
  // res.send('you did it');
  // if I want to send a user to another page
  // all of the pages on my site are localhost:3000/ and localhost:3000/create-task
  res.redirect('/');
}


function getOneTask(req, res){
  const instructions = 'SELECT * FROM tasks WHERE id=$1';
  // console.log(req.params);
  const values = [req.params.potato];
  // const values = [req.query.id];

  client.query(instructions, values).then(resultFromSql => {
    res.render('single-task', {theTask : resultFromSql.rows[0]});
  });
}

function deleteOneTask(req, res){
  console.log(req.query, 'query');
  console.log(req.params, 'params');
  console.log(req.body, 'body');
  client.query('DELETE FROM tasks WHERE id=$1', [req.body.id]).then(() => {
    res.redirect('/');
  });
}
