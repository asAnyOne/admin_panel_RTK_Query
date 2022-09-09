import { create, router as _router, defaults } from "json-server";
import { join } from "path";
import { static as _static } from "express";
const server = create();
const router = _router("heroes.json");
const middlewares = defaults({ static: "build" });
const port = process.env.PORT || 3001;

// server.use(middlewares);
// server.use(jsonServer.rewriter({ "api/*": "/$1" }));
// server.use(router);
server.use("/heroes", middlewares, router);
server.use(_static(join(__dirname, "build")));

server.get("/*", function (req, res) {
  res.sendFile(join(__dirname, "build", "index.html"));
});

server.listen(port);
