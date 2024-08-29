const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    obj = {
        a: "Nhuz",
        b: "Bajra"
    }
    res.send(obj)
})

router.post("/createUser", (req,res)=>{
    console.log(req.body)
    res.send(req.body)
    const user= User(req.body)
    user.save()
})


module.exports = router