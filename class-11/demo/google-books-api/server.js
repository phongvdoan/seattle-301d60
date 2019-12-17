'use strict';

const express = require('express');
const ejs = require('ejs');
const superagent = require('superagent');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  superagent.get(`https://www.googleapis.com/books/v1/volumes?q=author+inauthor:${req.body.author}`).then(data => {

    const books = data.body.items.map(book => ({name: book.volumeInfo.title}));

    console.log(books);

    res.render('book-results', {
      books: books
    });
  });


});

app.listen(3000, () => console.log('lets look for books'));
