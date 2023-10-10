const express = require("express");
const bodyParser = require("body-parser");

const hostname = '127.0.0.1';
const port = 3000;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/Task.html");
});
  
app.post("/display", function(req, res) {

    var name=req.body.name;
    var email=req.body.email;
    var course=req.body.course;
    var semester=req.body.semester;

    var info= name+ " \n"+ email + "\n"+course+"\n"+semester;
    res.send("<b> YOUR INFO : -</b>" + info)
  
});
  
app.listen(port, function(){
  console.log(`server is running on http://${hostname}:${port}/`);
})