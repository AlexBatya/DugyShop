
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
res.sendFile(`${__dirname}/static/index.html`);
});

app.listen(3000, () => {
    console.log('Application listening on port 3333!');
});

// http://localhost:3000