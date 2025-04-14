const express = require("express");
const routers = express.Router();
// const users = require("./users");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const client = require("./mongodb");
const ObjectId = require("mongodb").ObjectId;

// get all users
routers.get("/users", async (req, res) => {
  try {
    const db = client.db("latihan");
    const users = await db.collection("users").find().toArray();
    res.json({
      status: "success",
      message: "list users",
      data: users,
    });
  } catch (error) {
    res.json({
      status: "error",
    });
  }
});

// get single users
routers.get("/users/:id", async (req, res) => {
  try {
    const db = client.db("latihan");
    const user = await db.collection("users").findOne({
      _id: new ObjectId(req.params.id),
    });
    res.status(200).json({
      status: "success",
      message: "single user",
      data: user,
    });
  } catch (error) {
    res.json({
      status: "error",
    });
  }
});

// insert users
// update users
// delete users
// get order user (join/aggregate)

// ==================
// exercise 5
// ==================

// post users
// routers.post("/users", (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).json({ message: "Masukkan data yang akan diubah" });
//   }

//   const newUser = {
//     id: users.length + 1,
//     name,
//   };
//   users.push(newUser);

//   res.status(200).json({
//     message: "User berhasil ditambahkan",
//     data: newUser,
//   });
// });

// download
// routers.get("/assets", (req, res) => {
//   const filename = "logofik.png";
//   res.sendFile(path.join(__dirname + "/assets/" + filename), {
//     headers: {
//       "Content-Disposition": 'attachment; filename="logofik-photo.png"',
//     },
//   });
// });

// post upload
// const imageFilter = (req, res, cb) => {
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//     return cb(null, false);
//   }
//   cb(null, true);
// };
// const upload = multer({ dest: "public", imageFilter });

// routers.post("/upload", upload.single("file"), (req, res) => {
//   const file = req.file;
//   if (file) {
//     const target = path.join(__dirname, "public", file.originalname);
//     fs.renameSync(file.path, target);
//     res.send("file berhasil diupload");
//   } else {
//     res.send("file gagal diuplaod");
//   }
// });

// put. edit berdasarkan nama
// routers.put("/users/:name", (req, res) => {
//   const { name: newName } = req.body;
//   const userName = req.params.name.toLocaleLowerCase();

//   if (!newName) {
//     return res.status(400).json({
//       message: "User tidak memasukan data pada request body",
//     });
//   }

//   const user = users.find((u) => u.name.toLowerCase() === userName);

//   if (!user) {
//     return res.status(404).json({ message: "Data user tidak ditemukan" });
//   }
//   user.name = newName;

//   res.status(200).json({
//     message: "User berhasil diperbarui",
//     data: user,
//   });
// });

// delete
// routers.delete("/users/:name", (req, res) => {
//   const userName = req.params.name.toLowerCase();
//   const userIndex = users.findIndex((u) => u.name.toLowerCase() === userName);

//   const deleteUser = users.splice(userIndex, 1)[0];

//   res.status(200).json({
//     message: "User berhasil dihapus",
//     data: deleteUser,
//   });
// });

// ===============================================================================================

// ===============================
// upload file menggunakan multer
// ===============================

// const fs = require("fs");
// const multer = require("multer");

// ===============
// import path
// ===============

// const path = require("path");

// routing upload file menggunakan multer
// const imageFilter = (req, res, cb) => {
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//     return cb(null, false);
//   }
//   cb(null, true);
// };
// const upload = multer({ dest: "public", imageFilter });

// routers.post("/upload", upload.single("file"), (req, res) => {
//   const file = req.file;
//   if (file) {
//     const target = path.join(__dirname, "public", file.originalname);
//     fs.renameSync(file.path, target); //rename file agar sama dengan original name. jika tidak pakai maka file random akan terupload
//     res.send("file berhasil diupload");
//   } else {
//     res.send("file gagal diuplaod");
//   }
// });

// =========
// Path
// =========

// routers.get("/download", (req, res) => {
//   const filename = "logofik.png";
//   res.sendFile(path.join(__dirname + filename)); //gambar tidak ada dalam folder dowload
// });

// Download
// routers.get("/download", (req, res) => {
//   const filename = "logofik.png";
//   res.sendFile(path.join(__dirname + "/download/" + filename), {
//     headers: {
//       "Content-Disposition": 'attachment; filename="logofik-photo.png"',
//     },
//   });
// });

// cara pendek untuk download
// routers.get("/download", (req, res) => {
//   const filename = "logofik.png";
//   res.download(
//     path.join(__dirname + "/download" + filename),
//     "logofik-photo.png"
//   );
// });

// Routing
// routers.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   res.status(200).json({
//     status: "success",
//     message: "login page",
//     data: {
//       username: username,
//       password: password,
//     },
//   });
// });

// routers.get("/", (req, res) => res.send("Hello World"));
// routers.get("/about", (req, res) =>
//   res.status(200).json({
//     status: "success",
//     message: "about page",
//     data: [],
//   })
// );
// routers.put("/about", (req, res) =>
//   res.status(200).json({
//     status: "success",
//     message: "about page",
//     data: [],
//   })
// );

// routers.post("/post", (req, res) => res.send("request dengan method post"));
// routers.put("/put", (req, res) => res.send("request dengan method put"));
// routers.delete("/delete", (req, res) =>
//   res.send("request dengan method delete")
// );
// routers.patch("/patch", (req, res) => res.send("request dengan method patch"));
// routers.all("/universal", (req, res) =>
//   res.send(`request method ${req.method}`)
// );

// // Routing dinamis
// // 1. menggunakan params
// routers.get("/post/:id", (req, res) =>
//   res.send(`Artikel ke - ${req.params.id}`)
// );
// // 2. menggunakan query string
// routers.get("/post", (req, res) => {
//   const { page, sort } = req.query;
//   res.send(`Query yang didapatkan adalah, page : ${page}, sort : ${sort}`);
// });

module.exports = routers;
