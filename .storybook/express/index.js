// const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
// const { execSync } = require("child_process");

// const server = express();
const port = 3000;

const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname, "../../storybook-static"),
  bodyParser: true,
});

const server = jsonServer.create();
const router = jsonServer.router({});

server.use(middlewares);

// const commitHash = execSync("git rev-parse HEAD").toString().trim();

// const generateUrlWithHash = req => {
//   const parsedUrl = new URL(req.originalUrl, `http://${req.headers.host}`);
//   parsedUrl.searchParams.set("hash", commitHash);

//   return parsedUrl.toString();
// };

// const redirectWithCommitHash = (req, res, next) => {
//   // Only matches "/" with or without query params appended. The second condition is to avoid redirection loop.
//   if (req.path === "/" && req.query.hash !== commitHash) {
//     const urlWithHash = generateUrlWithHash(req);
//     res.redirect(urlWithHash);
//   } else {
//     next();
//   }
// };

// server.use(redirectWithCommitHash);
// Serve static files from the specified folder
// server.use(express.static(path.join(__dirname, "../../storybook-static")));

// Start the server
server.listen(port, () =>
  console.log(`JSON Server is running on port ${port}`)
);
