const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("heroes.json");
const middlewares = jsonServer.defaults({ static: "./build" });
// const path = require("path");
// const express = require("express");

const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.rewriter({ "api/*": "/$1" }));
server.use(router);
// server.use("/heroes", middlewares, router);
// server.use(express.static(path.join(__dirname, "build")));

// server.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

server.listen(port);
