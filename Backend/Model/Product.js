const mongoose =  require('mongoose')
const {Schema} = mongoose

const ProductSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    instock:{
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product