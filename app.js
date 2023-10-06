const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.get("/name/:name", (req, res) => {
  res.status(200).send("Hello" + " " + req.params.name);
});

app.post("/name", (req, res) => {
  console.log(req.body);
  res.status(200).send("Hello" + " " + req.body.name);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});
