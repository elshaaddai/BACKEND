const express = require("express");
const routers = express.Router();

// inport path
const path = require("path");

// Path

// routers.get("/download", (req, res) => {
//   const filename = "logofik.png";
//   res.sendFile(path.join(__dirname + filename)); //gambar tidak ada dalam folder dowload
// });

// Download
routers.get("/download", (req, res) => {
  const filename = "logofik.png";
  res.sendFile(path.join(__dirname + "/download/" + filename), {
    headers: {
      "Content-Disposition": 'attachment; filename="logofik-photo.png"',
    },
  });
});

// cara pendek untuk download
// routers.get("/download", (req, res) => {
//   const filename = "logofik.png";
//   res.download(
//     path.join(__dirname + "/download" + filename),
//     "logofik-photo.png"
//   );
// });

// Routing
routers.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({
    status: "success",
    message: "login page",
    data: {
      username: username,
      password: password,
    },
  });
});

routers.get("/", (req, res) => res.send("Hello World"));
routers.get("/about", (req, res) =>
  res.status(200).json({
    status: "success",
    message: "about page",
    data: [],
  })
);

routers.post("/post", (req, res) => res.send("request dengan method post"));
routers.put("/put", (req, res) => res.send("request dengan method put"));
routers.delete("/delete", (req, res) =>
  res.send("request dengan method delete")
);
routers.patch("/patch", (req, res) => res.send("request dengan method patch"));

routers.all("/universal", (req, res) =>
  res.send(`request method ${req.method}`)
);

// Routing dinamis
// 1. menggunakan params
routers.get("/post/:id", (req, res) =>
  res.send(`Artikel ke - ${req.params.id}`)
);

// 2. menggunakan query string
routers.get("/post", (req, res) => {
  const { page, sort } = req.query;
  res.send(`Query yang didapatkan adalah, page : ${page}, sort : ${sort}`);
});

module.exports = routers;
