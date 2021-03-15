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
    let name = "Anupam";
    let age = 21;

    await Students.create({
        name: name,
        age: age
    });
    console.log(await Students.find());
    
    await Students.deleteOne({name})
    console.log(await Students.find());

    // product = await Students.findByIdAndUpdate(id, req.body);
    // product = await Students.findByIdAndDelete(id);

    return process.exit(1);
}
main();