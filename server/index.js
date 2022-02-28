const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const static = path.resolve(__dirname,'../static');


app.use(express.static(static));


app.listen(PORT,()=>{
    console.log('Утки в топке');
})