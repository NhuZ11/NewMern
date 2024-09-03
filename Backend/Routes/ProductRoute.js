const express = require('express')
const Product = require('../Model/Product')
const fetchUser = require('../Middleware/FetchUser')
const { body, validationResult } = require('express-validator')
const router = express.Router()


//testing self done
// router.post("/createProduct", (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
//     const product = Product(req.body)
//     product.save()
// })


//get all product taught wala

router.get('/getallproducts', fetchUser, async (req, res) => {
   try {
      const products = await Product.find({ user: req.user.id })
      res.json(products)
   } catch (error) {
      res.status(500).send("Internal server error")
   }

})



//add products
router.post('/addproduct', fetchUser,
   [
      body('title').isLength({ min: 3 }),
      body('description').isLength({ min: 5 })],
   async (req, res) => {

      try {
         const { title, description, price, instock } = req.body
         const errors = validationResult(req)
         if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(400).json({ errors: errors.array() });
         }
         const product = new Product({
            title, description, price, instock, user: req.user.id
         })
         const savedProduct = await product.save()
         res.json(savedProduct)

      } catch (error) {
         res.status(500).send("Internal server error")
      }
   })


   //update product

   router.put('/updateproduct/:id', fetchUser, async(req,res)=>{
      const { title, description, price, instock } = req.body
      try {
        const newProduct={}
        if(title){newProduct.title=title}
        if(description){newProduct.description=description}
        if(price){newProduct.price=price}
        if(instock){newProduct.instock=instock}   

        let product = await Product.findById(req.params.id)
        if(!product){
         
         return res.status(404).send("Product not found.")
        }

        if(!product.user || product.user.toString()!==req.user.id){
         return res.status(404).send("Not allowed.")
        }

        product = await Product.findByIdAndUpdate(req.params.id,{$set:newProduct},{new:true})
        res.json(product)

      } catch (error) {
         console.log(error)
         res.status(500).send("Internal server error")
      }
   })

module.exports = router