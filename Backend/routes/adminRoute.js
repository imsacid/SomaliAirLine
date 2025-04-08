
const express = require("express")
const router = express.Router()

const adminMOdel = require("../model/adminModel")

router.post("/admin/create", async (req,res)=>{
    const newUser = adminMOdel(req.body)
    const saveUser = await newUser.save()
    if(saveUser){
        res.send("post has been created")
    }
})

router.post("/admin/login", async (req,res)=>{
    if(req.body.username && req.body.password){
 
     const user = await adminMOdel.findOne(req.body).select("-password")
 
     if(user){
         res.send(user)
 
     }
     else{
         res.send({
             error: "Incorecct password or username"
         })
     }
    }
    
    else{
     res.send({
         error: "Please Enter email and password"
     })
    }
 })
module.exports = router