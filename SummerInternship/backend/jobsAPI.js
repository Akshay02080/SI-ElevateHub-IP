const exp = require('express')
const jobsapp = exp.Router()

//body parser
jobsapp.use(exp.json());



//retriving of all jobs
jobsapp.get('/getall' , (request,response)=>{
    const jobsapp = request.app.get("jobsapp" )

   jobsapp.find().toArray()
    .then((listOfjobs)=>{
        console.log(listOfjobs);
        response.send({
            message:"List ofjobs :",
            payload: listOfjobs
        })
    })
    .catch(err => {
        console.log("Error at course(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of jobs
jobsapp.post('/createjob' , (request,response)=>{
    const  jobsapp = request.app.get("courseapp" )
    let data = request.body;
    console.log(data)
    jobsapp.insertOne(data)
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

module.exports=jobsapp;