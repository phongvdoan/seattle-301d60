'use strict';

const superagent = require('superagent');
const pg = require('pg');
const express = require('express');
const methodoverride = require('method-override');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(methodoverride('_method'));

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', (e) => console.error(e));
client.connect();

// home page supposed to display: stored books
app.get('/', getAllSavedBooks);

// search page
// form
app.get('/search', showSearchForm);

// book details about a single book
app.get('/book/:potato_book_id', showBookDetails);

app.put('/book/:tomato_book_id', (req, res) => {
  // TODO: update the data in sql
  // two things need to exist in my array, title, id
  console.log(req.params, req.body);
  const sqlQuery = 'UPDATE books SET title=$1 WHERE id=$2';
  const values = [req.body.title, req.params.tomato_book_id];
  client.query(sqlQuery, values).then(() => {

    res.redirect('/');
  });

});

app.delete('/delete-ginger', deleteOne);

app.listen(PORT, () => console.log(`up on ${PORT}`))
;

function getAllSavedBooks(req, res) {
  client.query('SELECT * FROM books;').then(stuffFromSql => {
    res.render('index', {bookArray : stuffFromSql.rows});
  });
}
function showSearchForm(req, res) {
  res.send('yo search');
}
function showBookDetails(req, res) {
  console.log(req.query, req.body, req.params);
  client.query('SELECT * FROM books WHERE id=$1', [req.params.potato_book_id]).then(potato => {
    res.render('book-detail', {singleBook : potato.rows[0]});
  });
}


function deleteOne(req, res){
  console.log(req.body);
  client.query('DELETE FROM books WHERE id=$1', [req.body.sqlId]).then(() => {
    res.redirect('/');
  });
}
