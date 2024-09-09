const exp = require('express')
const mentorsapp = exp.Router()
const {ObjectId} = require('mongodb')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const expressAsyncHandler = require("express-async-handler")
//body parser
mentorsapp.use(exp.json());




mentorsapp.post('/signup' ,expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const AllMentorsCollection = request.app.get("AllMentorsCollection")
    //get newUser from request
    const newUser = request.body;
    //check for duplicate user by username
    let userOfDB = await AllMentorsCollection.findOne({username:newUser.username})
    //if user already existed, send res to client "User already existed"
    if(userOfDB!=null){
        response.status(200).send({message:"User already existed"})
    }
    //if user not existed
    else{
        //hash the password
        let hashedPassword = await bcryptjs.hash(newUser.password,5)
        //replace plane password with hashed password
        newUser.password = hashedPassword;
        //insert user
        await AllMentorsCollection.insertOne(newUser)
        //send res
        response.status(201).send({message:"User Created"})
    }

})
)

mentorsapp.post('/login',async(request,response)=>{
 //get AllMentorsCollectionObj
 const AllMentorsCollectionObj = request.app.get("AllMentorsCollection")
 //get user Credentials from req
 const AllMentorsCredObj = request.body
 console.log(AllMentorsCredObj)
 //verify username
 let AllMentorsOfDB = await AllMentorsCollectionObj.findOne({username:AllMentorsCredObj.username})
 //if username is invalid
 if(AllMentorsOfDB===null){
     response.status(200).send({message:"Invalid username"})
 }
 //if username is valid
 else{
     //verify password
     console.log(AllMentorsOfDB.password)
     let isEqual = await bcryptjs.compare(AllMentorsCredObj.password,AllMentorsOfDB.password)
     //if passwords are not matched
     console.log(isEqual);
     if(!isEqual){
         response.status(200).send({message:"Invalid Password"})
     }
     //if passwords matched
     else{
         //create a jwt token
         // let jwtToken = jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:"2d"})
         //send token in response
         response.status(200).send({message:"success",/*token:jwtToken*/user:AllMentorsOfDB})//token:jwtToken,
     }
 }
})

//retriving of all New Mentors
mentorsapp.get('/get-New-Mentors' , (request,response)=>{
    const NewMentorsCollection = request.app.get("NewMentorsCollection" )

    NewMentorsCollection.find().toArray()
    .then((listOfNewMentors)=>{
        console.log(listOfNewMentors);
        response.send({
            message:"List of New Mentors :",
            payload: listOfNewMentors
        })
    })
    .catch(err => {
        console.log("Error at New Mentors(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of NewMentors
mentorsapp.post('/create-New-Mentors' , (request,response)=>{
    const  NewMentorsCollection = request.app.get("NewMentorsCollection" )
    let data = request.body;
    console.log(data)
    NewMentorsCollection.insertOne(data)
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

//deleteing of NewMentors
mentorsapp.delete('/delete-New-Mentors/:id' , (request,response)=>{
    const  NewMentorsCollection = request.app.get("NewMentorsCollection" )
    let data = (request.params.id);
    console.log(data)
    const objectIdInstance = new ObjectId(data);
    NewMentorsCollection.deleteOne({_id:objectIdInstance})
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

//retriving of all Mentors
mentorsapp.get('/get-All-Mentors' , (request,response)=>{
    const AllMentorsCollection = request.app.get("AllMentorsCollection" )

    AllMentorsCollection.find().toArray()
    .then((listOfAllMentors)=>{

        response.send({
            message:"List of All Mentors :",
            payload: listOfAllMentors
        })
    })
    .catch(err => {
        console.log("Error at All Mentors(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of NewMentors
mentorsapp.post('/create-All-Mentors' , (request,response)=>{
    const  AllMentorsCollection = request.app.get("AllMentorsCollection" )
    let data = request.body;
    console.log(data)
    AllMentorsCollection.insertOne(data)
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

module.exports=mentorsapp;