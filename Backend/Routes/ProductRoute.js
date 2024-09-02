const express =  require('express')
const Product = require('../Model/Product')
const fetchUser = require('../Middleware/FetchUser')
const router = express.Router()


//testing self done
// router.post("/createProduct", (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
//     const product = Product(req.body)
//     product.save()
// })


//get all product taught wala

router.get('/getallproducts',fetchUser,  async(req,res)=>{
   try {
    const products = await Product.find({user:req.user.id})
    res.json(products)
   } catch (error) {
    res.status(500).send("Internal server error")
   }

})

module.exports = router