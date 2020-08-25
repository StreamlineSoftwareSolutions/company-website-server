const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Hopefully this is working");
});

app.get("/api/test", (req, res) => {
  res.json("Test message.");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
