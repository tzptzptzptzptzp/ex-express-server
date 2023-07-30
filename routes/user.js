const express = require("express");
const router = express.Router();

// ポート番号の定義
const PORT = 3000;

router.get("/", (req, res) => {
  console.log(
    `Access to http://localhost:${PORT}${req.baseUrl} has been detected.`
  );
  res.send(
    `<h1>The browser is accessing <a href="http://localhost:${PORT}${req.baseUrl}">http://localhost:${PORT}${req.baseUrl}</a>.</h1>`
  );
});

router.get("/info", (req, res) => {
  console.log(
    `Access to http://localhost:${PORT}${req.baseUrl}${req.url} has been detected.`
  );
  res.send(
    `<h1>The browser is accessing <a href="http://localhost:${PORT}${req.baseUrl}${req.url}">http://localhost:${PORT}${req.baseUrl}${req.url}</a>.</h1>`
  );
});

module.exports = router;
