var express = require("express");
var app = express();
app.locals.pretty = true;
app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/topic", function (req, res) {
  res.send("Hello");
});

app.get("/template", function (req, res) {
  res.render("temp", { _title: "Jade", time: Date() });
});

app.get("/", function (req, res) {
  res.send("Hello home page");
});

app.get("/dynamic", function (req, res) {
  var lis = "";
  for (var i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  var time = Date();
  var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        hello dynamic!
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
  res.send(output);
});

app.get("/123", function (req, res) {
  res.send('Hello 123, <img src="/123.png">');
});

app.get("/login", function (req, res) {
  res.send("login please");
});

app.listen(3000, function () {
  console.log("Connected 3000 port!");
});
