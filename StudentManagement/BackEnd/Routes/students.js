const router=require('express').Router();
let Student=require('../Models/Student');

router.route("/add").post((req,res)=>{
     
       const name=req.body.name;
       const age=Number(req.body.age);
       const gender=req.body.gender;

       const newStudent=new Student({  //models walin import karagatta eka
             
            name,
            age,
            gender         //object that use to save data

       })


      newStudent.save().then(()=>{
        res.json("Student Added");//front end ekata yawana response eka
      }).catch((err)=>{
        console.log(err);

      });//passed to database/.then-javascript promises


}); 

router.route("/").get((req,res)=>{ //http method for read data
      
      Student.find().then((students)=>{
        res.json(students); //this response goes to fontend
      }).catch((err)=>{
          console.log(err);
      })


});

router.route("/update/:id").put(async(req,res)=>{//id eka wenama ganna route eka mehema liyana
        let userId= req.params.id;  //fetch id
          const {name,age,gender}=req.body; //d structure

      const updateStudent={
        name,
        age,
        gender //object that use to update data
      }
const update=await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{
    res.status(200).send({status:"User updated",user:update});//error msg ekak font end ekata yawanawa
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error updated"});
})

router.route("/delete/:id").delete(async()=>{
    let userId= req.params.id;
    const deleteUser=await Student.findByIdAndDelete(userId).then(()=>{ //primary key eka name eekanm findone
        res.status(200).send({status:"Succesfully deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error deleted"});
    });
});

router.route("/get/:id").get(async(req,res)=>{
    let userID=req.params.id;
    const user= await Student.findById(userID).then((student)=>{
        res.json(student);
    }).catch((err)=>{
        console.log(err);
    });
})




})



// module.export=router;

export{router as studentRouter};