const express = require("express");
const helmet = require("helmet");

const UserRouter = require("./users/user-router.js");
const Posts = require("./posts/posts-model.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/users", UserRouter);

server.get("/api/posts", (req, res) => {
  Posts.all()
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get posts" });
    });
});

module.exports = server;
