// Connecting mongoose to MongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test-database`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Creating schema
mongoose.model('courses', new mongoose.Schema(
    {
        course_id: {type: String, minLength: 5, maxLength: 5, unique: true, },
        name: {type: String, minLength: 5, maxLength: 100, unique: true},
        prof_id: {type: String, minLength: 5, maxLength: 5}
    },
    {versionKey: false}
));

// The main schema object which we will use to query
const Courses = mongoose.model('courses');

// Adding and deleting
async function main(){
    // Resetting the document
    await Courses.deleteMany({});

    // Inserting some data values
    data = require("./initData/initial.courses.json");
    for(i=0; i<data.length; i++){
        await Courses.create({
            course_id: data[i].course_id,
            name: data[i].name,
            prof_id: data[i].prof_id,
        });
    }

    // Showing values
    console.log(await Courses.find());

    // if((await Students.find({name: "Hacker"})).length == 1){
    //     console.log("Element found. Deleting now.");
    //     await Students.deleteOne({name: "Hacker"})
    //     console.log("Element found. Deleted successfully.");
    // } else {
    //     console.log("Error occured.");
    // };
    // console.log(await Students.find());
    
    return process.exit(0);
}
main();