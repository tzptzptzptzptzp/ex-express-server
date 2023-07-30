const express = require("express");
const app = express();
const userRouter = require("./routes/user");

// ポート番号の定義
const PORT = 3000;

// ミドルウェアの使用
app.use(mylogger);

//静的ファイルの使用
// app.use(express.static("public"));

app.set("view engine", "ejs");

// ルーティングの定義
app.get("/", (req, res) => {
  console.log(
    `Access to http://localhost:${PORT}${req.baseUrl} has been detected.`
  );
  // res.send(
  //   `<h1>The browser is accessing <a href="http://localhost:${PORT}${req.baseUrl}">http://localhost:${PORT}${req.baseUrl}</a>.</h1>`
  // );
  res.render("index", { port: PORT, url: req.baseUrl });
});

app.use("/user", userRouter);

// ミドルウェアの定義
function mylogger(req, res, next) {
  console.log("middleware");
  next();
}

app.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}`);
});
