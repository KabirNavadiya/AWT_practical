
const express = require('express');
const rateLimit=require('express-rate-limit')

const bodyParser = require("body-parser");
const hostname = '127.0.0.1';
const port = 3000;


const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(rateLimit({
    //windowMs: 15 * 60 * 1000  //15 minutes
    windowMs : 5000, //5seconds
    max:3,
    message:{
        // ..
        //..
        // ..
        
    }
}))

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");

})
app.listen(port,()=>{
    console.log(` server 🚀 is running on http://${hostname}:${port}/`);
    
  })