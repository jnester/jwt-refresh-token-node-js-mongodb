// const config = require("../config/auth.config");
const db = require("../models");
const { bookmark: Bookmark, tag: Tag } = db;
// const mongoose = require("mongoose");

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");


exports.tags = async (req, res) => {
  try {
    Tag.find(
      {
        // _id: {
        //   $ne: null
        // },
        userid: req.userId
      },
      (err, bookmarks) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        res.status(200).send(bookmarks)
      }
    );
    // // Bookmark.find({})
    // //   .exec(async (err, bookmarks) => {
    // //     res.status(200).send(bookmarks)
    // //   })
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}

exports.getOne = async (req, res) => {
  try {
    Bookmark.findOne(
      {
        url: req.query.url,
        userid: req.userId
      },
      (err, bookmarks) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        res.status(200).send(bookmarks)
      }
    );
    // // Bookmark.find({})
    // //   .exec(async (err, bookmarks) => {
    // //     res.status(200).send(bookmarks)
    // //   })
  } catch (err) {
    return res.status(500).send({ message: err });
  }

  // res.status(200).send('complete')
}

exports.save = async (req, res) => {
  try {
    Bookmark.findOneAndUpdate({
      url: req.body.url,
      userid: req.userId
    }, req.body, { upsert: true }, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send('Succesfully saved.');

    });
  } catch (err) {
  }
}

exports.getAll = async (req, res) => {
  try {
    Bookmark.find(
      {
        userid: req.userId
      },
      (err, bookmarks) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        res.status(200).send(bookmarks)
      }
    );
    // // Bookmark.find({})
    // //   .exec(async (err, bookmarks) => {
    // //     res.status(200).send(bookmarks)
    // //   })
  } catch (err) {
    return res.status(500).send({ message: err });
  }

  // res.status(200).send('complete')
}