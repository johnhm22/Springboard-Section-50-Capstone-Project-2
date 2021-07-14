const express = require("express");
const cors = require("cors");

const app = express();
const ExpressError = require('./expressError');
const issueRoutes = require('./routes/issues');
const userRoutes = require('./routes/users');


app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

  

app.use("/issues", issueRoutes);
app.use("/users", userRoutes);



module.exports = app;
