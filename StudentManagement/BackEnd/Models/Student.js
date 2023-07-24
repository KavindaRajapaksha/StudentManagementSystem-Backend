const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const studentSchema= new Schema({
    
    name:{
        type: String,
        required: true, //backend validation
    },
    age:{
        type: Number,
        required: true, //backend validation
    },
    gender:{
        type: String,
        required: true, //backend validation
    }
  

})

const Student= mongoose.model("Student",studentSchema);//doc name and schema

module.exports = Student;