const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test-database`);

// Creating schema
const {Schema} = mongoose;
const productSchema = new Schema({name: String, age: Number});
mongoose.model('Students', productSchema);
const Students = mongoose.model('Students');

// Adding and deleting
async function main(){
    await Students.deleteMany({});

    await Students.create({name: "Anupam", age: 21});
    await Students.create({name: "Anu", age: 23});
    await Students.create({name: "Pam", age: 22});
    console.log(await Students.find());
    
    await Students.deleteOne({name: "Pam"})
    console.log(await Students.find());

    // await Students.findByIdAndUpdate(id, req.body);
    // await Students.findByIdAndDelete(id);

    return process.exit(1);
}
main();