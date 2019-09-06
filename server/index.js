require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const controller = require("./controller");
app.use(express.json());

const port = 4005;

let { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
  console.log("database connected");
  app.set("db", db);
});

app.get("/api/houses", controller.getHouses);
app.post("/api/addHouse/:id", controller.addHouse);
app.delete("/api/deleteHouse/:id", controller.deleteHouse);

app.listen(port, () => console.log(`Port running on ${port}`));
