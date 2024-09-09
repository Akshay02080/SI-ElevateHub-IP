const exp = require('express')
const courseapp = exp.Router()

//body parser
courseapp.use(exp.json());



//retriving of all courses
courseapp.get('/getall-course' , (request,response)=>{
    const CoursesCollection = request.app.get("CoursesCollection" )

    CoursesCollection.find().toArray()
    .then((listOfCourses)=>{
        
        response.send({
            message:"List of Courses :",
            payload: listOfCourses
        })
    })
    .catch(err => {
        console.log("Error at course(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of courses
courseapp.post('/create-course' , (request,response)=>{
    const  CoursesCollection = request.app.get("CoursesCollection" )
    let data = request.body;
    console.log(data)
    CoursesCollection.insertOne(data)
    .then((dbRes)=>{
        console.log("DB response:" , dbRes)
        response.send({message:"Success"})
    }

    )
    .catch(err=>{
        console.log("Error :" ,err)
        response.send({message:"Erroe is :",payload :err})
    })

})

module.exports=courseapp;