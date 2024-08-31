const express = require('express')
const Product = require('../Model/Product')
const User = require('../Model/User')
const router = express.Router()
const bcrypt = require('bcryptjs')

const { body, validationResult } = require('express-validator')

router.get("/", (req, res) => {
    obj = {
        a: "Nhuz",
        b: "Bajra"
    }
    obj = {
        a: "Nhuz",
        b: "Bajra"
    }
    res.send(obj)
})

router.post("/createUser", [// username must be an email
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 })], 
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({error:"email already exists."})
        }

        const salt = await bcrypt.genSalt(10)
        const securePass = await bcrypt.hash(req.body.password,salt) 
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass,
        }).then(user => res.json(user));
        // console.log(req.body)
        // res.send(req.body)
        // const user= User(req.body)
        // user.save()
    })

router.post("/createProduct", (req, res) => {
    console.log(req.body)
    res.send(req.body)
    const product = Product(req.body)
    product.save()
})


module.exports = router

//44454488adsfasdfasdf
//dsafasdfasdfasdfasdfasdfasdfasdfasdf