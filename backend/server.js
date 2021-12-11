const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("./db.js");

const app = express();
const routeAkses = require("./routes.js");
const { Mongoose } = require("mongoose");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAkses);

app.listen(4000, () => {
  console.log("Server Berhasil dijalankan pada port: 4000 ");
});
