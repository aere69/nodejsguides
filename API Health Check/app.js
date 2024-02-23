const express = require("express");
const app = express();

//Routes
app.use("/", require("./routes/login"));
app.use('/healthcheck', require('./healthcheck'));

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port " + PORT));