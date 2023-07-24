const express =require('express');
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const cors=require("cors");
const dotenv=require("dotenv");
const app = express();


const PORT=process.env.PORT || 9070;
app.use(cors());
app.use(bodyParser.json());

const URL="mongodb+srv://KavindaSRajapaksha:QFdWcE6e1BZKIdhq@cluster0.s0hnnlg.mongodb.net/Student_db";

// mongoose.connect(URL,{
//     useCreateIndex: true,
//     useNewUrlParser:true,
//     useUnifiedTopologyL:true,
//     useFindAndModify:false
  
//   });
// const connection =mongoose.connection;
// connection.once("open",()=>{
//     console.log('Successfully Connected to MongoDB');
// })

const ConnectMongoDB = (URL) => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(URL);
    console.log('Successfully Connected to MongoDB');
  } catch (err) {
    console.log('MongoDB Connection Failed'); 
  }
}; 

ConnectMongoDB(URL)
const studentRouter= require("./Routes/students.js");
app.use("/student",studentRouter);
app.listen(PORT, () => {
    console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
}); 




 