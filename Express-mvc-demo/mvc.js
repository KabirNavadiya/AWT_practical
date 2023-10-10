const express = require("express");
const app = express();
const bodyparser=require('body-parser');
const router = require('./routes/userRoutes');
const hostname = '127.0.0.1';
const port = 4000;

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended : true}));

app.use('/user',router);

app.get('/',(req,res)=>{
    res.send('Server started (mvc)');
})


app.listen(port,()=>{
    console.log(` server 🚀 is running on http://${hostname}:${port}/`);
    
  })