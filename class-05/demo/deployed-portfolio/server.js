'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/webpage', function(request, response){
  response.sendFile(__dirname + '/public/index.html');
});

// routes are the addresses/ locations/ endpoints that respond to a request

// visiting the route causes the callback functino to be invoked
app.get('/gingerkisses', function(request, response){
  console.log('someone wants ginger kisses');
  response.send({
    kiss: 'heres a kiss <3',
    from: 'ginger'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('great job nicholas, you started a server on port 3000');
});
