const { text } = require("body-parser");
const express=require("express");
const morgan=require("morgan");
const http=require("http");
const bodyParser= require('body-parser');
const { hostname } = require("os");
const hosttname ='localhost';
const port=3000;

const dishRouter = require('./routes/dishRouter');

app.use('/dishes', dishRouter);

const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

// app.all('/dishes',(req,res,next)=>{

//   res.statusCode=200;

//   res.setHeader('Content-Type','text/plain');
//   // res.end("<html><body><h1> This is EXPRESS</h1></body></html>");

//   next();

// });

// app.get('/dishes',(req,res,next)=>{

//   res.end('we will return to you');

// }
// );

// app.put('/dishes',(req,res,next)=>{

//   res.end('we will return to you'+ req.body.name );



// });

// app.delete('/dishes',(req,res,next)=>{

//   res.end('we will delete' );



// });
// app.post('/dishes',(req,res,next)=>{

//   statusCode=403;
//   res.end('we do not support put');



// });
app.use((req,res,next)=>{


  //  console.log(req.headers);
    res.statusCode=200;

    res.setHeader('Content-Type','text/html');
    res.end("<html><body><h1> This is EXPRESS</h1></body></html>");

}


);

const server=http.createServer(app);

server.listen(port,hosttname,()=>{console.log(`server running at http://${hosttname}/${port}`);});

