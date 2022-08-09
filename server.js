const color = require('colors')
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
res.sendFile(`${__dirname}/static/index.html`);
});

app.get('/basket', (req, res) => {
res.sendFile(`${__dirname}/static/basket.html`);
});

app.listen(3000, () => {
    console.log(color.green('Сервер запускается, батенька...'));
});

// http://localhost:3000