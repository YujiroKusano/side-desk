const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

// curl http://localhost:3000/name/kusano
app.get("/name/:name", (req, res) => {
  console.log(req.params.name);
  res.status(200).send("Hello" + " " + req.params.name);
});

// curl -X POST -H 'Content-Type: application/json;charset=UTF-8' -d '{ "name": "aaaaaa" }' http://localhost:3000/name/
app.post("/name", (req, res) => {
  console.log(req.body);
  res.status(200).send("Hello" + " " + req.body.name);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});
