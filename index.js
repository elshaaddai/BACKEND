const moment = require("moment");
const users = require("./users");
const express = require("express");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
const app = express();

// MiddleWare
const log = (req, res, next) => {
  console.log(
    moment().format("h:mm:ss a") + " " + req.originalUrl + " " + req.ip
  );
  next();
};

app.use(morgan("tiny"));
app.use(errorHandler);

// EXPRESS JS

// routing express tidak perlu pakai if else lagi
app.get("/", (req, res) => res.send("Hello World"));
app.get("/about", (req, res) =>
  res.status(200).json({
    status: "success",
    message: "about page",
    data: [],
  })
);

app.post("/post", (req, res) => res.send("request dengan method post"));
app.put("/put", (req, res) => res.send("request dengan method put"));
app.delete("/delete", (req, res) => res.send("request dengan method delete"));
app.patch("/patch", (req, res) => res.send("request dengan method patch"));

app.all("/universal", (req, res) => res.send(`request method ${req.method}`));

// Routing dinamis
// 1. menggunakan params
app.get("/post/:id", (req, res) => res.send(`Artikel ke - ${req.params.id}`));

// 2. menggunakan query string
app.get("/post", (req, res) => {
  const { page, sort } = req.query;
  res.send(`Query yang didapatkan adalah, page : ${page}, sort : ${sort}`);
});

// middleware untuk 404
app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "resource tidak ditemukan",
  });
});

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, hostname, () =>
  console.log(`Server running at http://localhost:${port}`)
);

// EXERCISE 3

// const moment = require('moment');
// const users = require('./users');
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => res.status(200).json({
//     message: 'This is the home page'
// }))

// app.get('/about', (req, res) => res.status(200).json({
//     status: 'success',
//     message: 'response success',
//     description: 'exercise #3',
//     date: moment().format('MMMM Do YYYY, h:mm:ss a')
// }))

// app.get('/users', (req, res) => res.status(200).json(users))

// const hostname = '127.0.0.1';
// const port = 3000;
// app.listen(port, hostname, ()=>console.log(`Server running at http://localhost:${port}`));

// EXERCISE 2

// const server = http.createServer( (req,res) => {
//     const url = req.url;
//     if (url === '/'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/json');
//         res.write('This is the home page')
//     }
//     else if (url === '/about'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/json');
//         res.write(JSON.stringify({
//             status:'success',
//             message:'response success',
//             description: 'exercise #02',
//             date: moment().format(' MMMM Do YYYY, h:mm:ss a')
//         }))
//     }
//     else if (url === '/users'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/json');
//         res.write(JSON.stringify(users))
//     }
//     else{
//         res.statusCode = 404;
//         res.setHeader('Content-Type','text/json')
//         res.write('404 Users Not Found');
//     }

//     res.end();
// })

// const hostname = '127.0.0.1';
// const port = 3000;
// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}`);
// });

// PERTEMUAN 1

// const http = require('http');
// const {hello,greetings} = require('./helloWorld');
// const moment = require('moment')

// const server = http.createServer( (req,res) => {
//         // res.write(hello)
//         // res.write(greetings())
//     const url = req.url;
//     if (url === '/users'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/json');
//         res.write(JSON.stringify({
//             status:'success',
//             message:'users',
//             date: moment().format(' MMMM Do YYYY, h:mm:ss a')
//         }))
//     }
//     else if (url === '/post'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/json');
//         res.write(JSON.stringify({
//             status:'success',
//             message:'post',
//             date: moment().format(' MMMM Do YYYY, h:mm:ss a')
//         }))
//     }
//     else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type','text/json');
//         res.write(JSON.stringify({
//             status:'Not Found',
//             message:'Tidak Ditemukan',
//             date: moment().format(' MMMM Do YYYY, h:mm:ss a')
//         }))
//     }

//     res.end();
// })

// const hostname = '127.0.0.1';
// const port = 3000;
// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}`);
// });
