const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routeruser = require("./routes/user");

const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use("/user", routeruser);


mongoose.connect (
    'mongodb+srv://niharika:cqqTNB8nSQjsIwNR@cluster0.ezoor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(result => {
    app.listen(3000);
})
.catch(err => console.log(err));