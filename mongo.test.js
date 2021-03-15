const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test-database`);

const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    age: Number,
})

mongoose.model('Students', productSchema);

const Students = mongoose.model('Students');

async function main(){
    await Students.create({
        name: "Anupam",
        age: 21
    });
    
    ret = await Students.find();
    console.log(ret);
    // product = await Product.findByIdAndUpdate(id, req.body);
    // product = await Product.findByIdAndDelete(id);
    // product = await Product.remove({name: req.body.name})

    return process.exit(1);
}
main();