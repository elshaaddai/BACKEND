const mongoose = require("mongoose");

// buat schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    status: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// buat model
const User = mongoose.model("User", userSchema);

module.exports = User;
