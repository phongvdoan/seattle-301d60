'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
// new middleware is urlencoded
app.use(express.urlencoded( {extended:true} ));

// document.getElementById('button')
// .addEventListener('click', callback)
// this was a handler for gets
// a form with a method of post can only talk to a server on an app.post
// on a get the data lives on the property query of `req`
// on a post the data lives on the property ____
app.post('/', (req, res) => {
  console.log(req.body);
  const name = req.body['first-name'];
  const lname = req.body['last-name'];
  const contact = req.body.contact;
  res.send(`ROUTE: '/' yo ${lname}, ${name} you wanna be contacted by ${contact} right?`);
});

app.post('/ice-cream', (req, res) =>{
  res.send('ROUTE : "/ice-cream" ' + req.body['ice-cream'] + ' is great');
});

app.post('/dog', (req, res)=>{
  res.send('ginger is da bomb');
});

// 3 things to talk to a server
// the correct method of the form (post)
// the correct action on the form (relative path to the route) ie: /location
// an endpoint on the server (on the app) on a .post route
// with the same route as the action
// middleware to get the data from the post (express.urlencoded)

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

/*
this is using the http GET method
http://localhost:3000/?
first-name=nicholas
&last-name=carignan
&message=asdf
&phone=123-456-7891
&contact=phone
&contactw=email
*/

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
