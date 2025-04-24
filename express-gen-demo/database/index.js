const { mongoUrl } = require("../config");
const mongoose = require("mongoose");

mongoose
  .connect(mongoUrl)
  .then((req) => console.log("koneksi berhasil"))
  .catch((error) => console.log("koneksi gagal", error));
