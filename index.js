const express = require("express");
const path = require("path");

const app = express();
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 3333, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${
      process.env.PORT || 3333
    }`
  );
});
