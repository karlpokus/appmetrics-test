require('appmetrics-dash').monitor();

const express = require('express');
const app = express();

app.get('/simple', function simpleHandler(req, res) {
  res.send(`Hello World!\n`);
});

app.get('/delay', function delayHandler(req, res) {
	setTimeout(() => {
		res.send('1000 ms delay');
	}, 1000);
});

app.listen(3000, () => {
	console.log('node server running..');
});
