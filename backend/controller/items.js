const items=require("../model/items")

module.exports={

  getByColor: (req,res)=>{
    const { color }=req.params
    items.find({color: color}).then(items=>res.send(items))
  },

  getByGender: (req,res)=>{
    const { gender }=req.params
    items.find({gender: gender}).then(items=>res.send(items))
  },

}