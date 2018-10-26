const HTTP_PORT = process.env.PORT || 8181;
// Installing Express.js
const express = require('express');
// creating the app
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// Sending public folder to Server to enable CSS and Front ende
const Http = new XMLHttpRequest();
function onhttpstart() {
    console.log("Express http server listening on " + HTTP_PORT);  
}
app.get("/", function(req,res) {
    res.json({"ERROR" : "NEED SOME INFO"});
})
app.get("/today-fact", function(req,res) {
    let today = new Date();
    let URL="http://www.numbersapi.com/" + parseInt(today.getMonth() + 1) + "/" + today.getDate() + "/date";
    Http.open("GET",URL);
    Http.send();
    Http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(Http.responseText);
            res.json({"text" :Http.responseText});
        }
    }
})
app.use((req,res) => {
    res.json({"ERROR": "WE DONT HAVE THAT"});
})
app.listen(HTTP_PORT,onhttpstart);
