const mongoose = require("mongoose");

const Tag = mongoose.model(
  "Tag",
  new mongoose.Schema({
    category: String,
    userid: String
  })
);

module.exports = Tag;
