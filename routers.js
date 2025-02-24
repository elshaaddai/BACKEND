const express = require("express");
const routers = express.Router();

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
