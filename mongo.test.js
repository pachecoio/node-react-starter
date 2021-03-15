const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test-database`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Creating schema
const {Schema} = mongoose;
const productSchema = new Schema({name: String, age: Number}, {versionKey: false});
mongoose.model('Students', productSchema);
const Students = mongoose.model('Students');

// Adding and deleting
async function main(){
    // Resetting the document
    await Students.deleteMany({});

    // Inserting some data values
    await Students.create({name: "Rahul", age: 21});
    await Students.create({name: "Vijay", age: 23});
    await Students.create({name: "Virat", age: 39});
    await Students.create({name: "Hacker", age: 22});
    console.log(await Students.find());
    
    if((await Students.find({name: "Hacker"})).length == 1){
        console.log("Element found. Deleting now.");
        await Students.deleteOne({name: "Hacker"})
        console.log("Element found. Deleted successfully.");
    } else {
        console.log("Error occured.");
    };
    // console.log(await Students.find());
    
    return process.exit(0);
}
main();