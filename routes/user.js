const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(
    `Access to http://localhost:${PORT}${req.url} has been detected.`
  );
  res.send(
    `<h1>The browser is accessing <a href="http://localhost:${PORT}${req.url}">http://localhost:${PORT}${req.url}</a>.</h1>`
  );
});

router.get("/info", (req, res) => {
  console.log(
    `Access to http://localhost:${PORT}${req.url} has been detected.`
  );
  res.send(
    `<h1>The browser is accessing <a href="http://localhost:${PORT}${req.url}">http://localhost:${PORT}${req.url}</a>.</h1>`
  );
});

module.exports = router;
