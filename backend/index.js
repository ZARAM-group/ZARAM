require("dotenv").config()
const express = require('express');
const cors = require("cors")
const app = express();
const user=require("./routes/user.js")
const connectDB=require("./database/connection")

const port = 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
connectDB()

app.use("/user",user)

app.listen(port, () => {
  console.log(`app listening at ${process.env.url}`);
});