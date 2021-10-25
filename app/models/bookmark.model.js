const mongoose = require("mongoose");

const Bookmark = mongoose.model(
  "Bookmark",
  new mongoose.Schema({
    url: String,
    category: String,
    title: String,
    userid: String,
  })
);

module.exports = Bookmark;
