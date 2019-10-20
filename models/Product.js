const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
})
mongoose.model('products', productSchema);

class Product {
    constructor({name, description}) {
        this.name = name;
        this.description = description;
    }
}

module.exports = Product;