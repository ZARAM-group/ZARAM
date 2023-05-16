const mongoose = require('mongoose');

const schema= mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  type: String,
  size: String,
  gender: String,
  description: String,
  conditions: Array
})

const items=mongoose.model("items",schema)

module.exports=items
