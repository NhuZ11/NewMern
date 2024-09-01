const express = require('express')
const Product = require('../Model/Product')
const User = require('../Model/User')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET)

const { body, validationResult } = require('express-validator')

//creating user with using post "api/auth/createuser"
router.post("/createUser", [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ error: "email already exists." })
            }

            const salt = await bcrypt.genSalt(10)
            const securePass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePass,
            })

        const data = {
            user:{
                id: user.id
            }
        }    
        const authToken = jwt.sign(data,JWT_SECRET)
        console.log(authToken)
        res.json({user, authToken})
        } catch (error) {
            res.status(500).send("Internal server error")
        }
        // console.log(req.body)
        // res.send(req.body)
        // const user= User(req.body)
        // user.save()
    })


//login user with using post "api/auth/login"
router.post("/login", [
    
    body('email').isEmail(),
    body('password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const {email, password} = req.body
        try{
            let user = await User.findOne({email})
            if(!user){
                return res.status(400).json({errors: "Invalid Credentials."})
            }
            const passwordCompare = await bcrypt.compare(password, user.password)
            if(!passwordCompare){
                return res.status(400).json({errors: "Invalid Credentials."})
            }
            const data = {
                user:{
                    id: user.id
                }
            }    
            const authToken = jwt.sign(data,JWT_SECRET)
            console.log(authToken)
            res.json({user, authToken})

        }catch(error){
            res.status(500).send("Internal server error")
        }
    }
)




router.post("/createProduct", (req, res) => {
    console.log(req.body)
    res.send(req.body)
    const product = Product(req.body)
    product.save()
})


module.exports = router





















// router.get("/", (req, res) => {
//     obj = {
//         a: "Nhuz",
//         b: "Bajra"
//     }

//     res.send(obj)
// })