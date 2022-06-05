const { text } = require("body-parser");
const express=require("express");
const morgan=require("morgan");
const http=require("http");
const { hostname } = require("os");
const hosttname ='localhost';
const port=3000;


const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{


  //  console.log(req.headers);
    res.statusCode=200;

    res.setHeader('Content-Type','text/html');
    res.end("<html><body><h1> This is EXPRESS</h1></body></html>");

}


);

const server=http.createServer(app);

server.listen(port,hosttname,()=>{console.log(`server running at http://${hosttname}/${port}`);});

