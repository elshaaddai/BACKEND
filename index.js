// =============================================================
// Exercise 5
// =============================================================

const http = require("http");
const express = require("express");
const moment = require("moment");
const users = require("./users");
const morgan = require("morgan");
const app = express();
const path = require("path");
const cors = require("cors");
const routers = require("./routers");

// middleware morgan
app.use(morgan("tiny"));

// middleware untuk akses program file statik di folder public
app.use(express.static(path.join(__dirname, "public")));

// middleware body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware cors
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

// get semua users
app.get("/users", (req, res) => res.status(200).json(users));
// get users berdasarkan nama
app.get("/users/:name", (req, res) => {
  const userName = req.params.name.toLowerCase();
  const user = users.find((u) => u.name.toLowerCase() === userName);

  // error data tidak ada
  if (!user) {
    return res.status(404).json({ message: "Data user tidak ditemukan" });
  }
  res.status(200).json(user);
});
app.use(express.json());

// menghubungkan file routers.js untuk menangani request
app.use(routers);

// middleware untuk 404
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "resource tidak ditemukan",
  });
});
// middleware error handling (500)
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "terjadi kesalahan pada server",
  });
});

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, hostname, () =>
  console.log(`Server running at http://localhost:${port}`)
);
// ======================================================================== //

// =========================================================================
// cors
// =========================================================================

// const http = require("http");
// const express = require("express");
// const moment = require("moment");
// const users = require("./users");
// const morgan = require("morgan");
// const app = express();
// const path = require("path");

// // cors
// const cors = require("cors");

// // routers
// const routers = require("./routers");
// const log = (req, res, next) => {
//   console.log(
//     moment().format("h:mm:ss a") + " " + req.originalUrl + " " + req.ip
//   );
//   next();
// };

// app.use(morgan("tiny"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public"))); //buat gambar langsung bisa di akses
// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500",
//     methods: ["GET", "PUT"], //allow access ke method //preflight request
//   })
// );

// // routers
// app.use(routers);

// // middleware untuk 404
// app.use((req, res) => {
//   res.status(404).json({
//     status: "error",
//     message: "resource tidak ditemukan",
//   });
// });

// const hostname = "127.0.0.1";
// const port = 3000;
// app.listen(port, hostname, () =>
//   console.log(`Server running at http://localhost:${port}`)
// );
// ===========================================================================================//

// ===============
// Exercise 4
// ===============

// const moment = require("moment");
// const users = require("./users");
// const express = require("express");
// const morgan = require("morgan");
// const errorHandler = require("errorhandler");
// const app = express();
// app.use(morgan("tiny"));

// app.get("/users", (req, res) => res.status(200).json(users));
// app.get("/users/:name", (req, res) => {
//   const userName = req.params.name.toLowerCase();
//   const user = users.find((u) => u.name.toLowerCase() === userName);

//   if (!user) {
//     return res.status(404).json({ message: "Data user tidak ditemukan" });
//   }
//   res.status(200).json(user);
// });

// // middleware untuk 404
// app.use((req, res) => {
//   res.status(404).json({
//     status: "error",
//     message: "resource tidak ditemukan",
//   });
// });
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     status: "error",
//     message: "terjadi kesalahan pada server",
//   });
// });

// const hostname = "127.0.0.1";
// const port = 3000;
// app.listen(port, hostname, () =>
//   console.log(`Server running at http://localhost:${port}`)
// );
// ====================================================================================================//

// ==============
// EXERCISE 3
// ==============

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
// ===========================================================================================================//

// ==========
// EXERCISE 2
// ==========

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
// =========================================================================================================

// ==============
// PERTEMUAN 1
// ==============

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
