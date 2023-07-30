const express = require("express");
const app = express();

// ポート番号の定義
const PORT = 3000;

app.get("/", (req, res) => {
  console.log(
    `Access to http://localhost:${PORT}${req.url} has been detected.`
  );
  res.send(
    `<h1>The browser is accessing <a href="http://localhost:${PORT}${req.url}">http://localhost:${PORT}${req.url}</a>.</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}`);
});
