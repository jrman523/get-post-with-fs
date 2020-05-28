const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 5000;

app.use("/static", express.static("public"));
app.use("/libraries", express.static("node_modules"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/hello", function (req, res) {
  res.sendFile(__dirname + "/views/hello.html");
});

app.post("/api/test", function (req, res) {
  fs.writeFile("./data/player1.json", JSON.stringify(req.body), "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("saved");
  });
  res.send(req.body);
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/views/404.html");
});

app.listen(PORT, function () {
  console.log(`app listening http://localhost:${PORT}`);
});
