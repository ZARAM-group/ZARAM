const user=require('../model/user');


module.exports={

    getAll:(req,res)=>{
       user.find().then(user=>res.send(user))
    },

    addToCart:(req,res)=>{
        const {userId,itemId}=req.params
        user.findByIdAndUpdate(userId,{$push:{cart:itemId}}).then(user=>res.send(user))
    }

}