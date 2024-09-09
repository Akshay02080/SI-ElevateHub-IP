const exp = require('express')
const adminapp = exp.Router()
const {ObjectId} = require('mongodb')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const expressAsyncHandler = require("express-async-handler")
//body parser
adminapp.use(exp.json());



//signup
adminapp.post('/signup' ,expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const AdminCollection = request.app.get("AdminCollection")
    //get newUser from request
    const newUser = request.body;
    //check for duplicate user by username
    let userOfDB = await AdminCollection.findOne({username:newUser.username})
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
        await AdminCollection.insertOne(newUser)
        //send res
        response.status(201).send({message:"User Created"})
    }

})
)



//login
adminapp.post('/login',async(request,response)=>{
    //get AllMentorsCollectionObj
    const AdminCollection = request.app.get("AdminCollection")
    //get user Credentials from req
    const AdminCredObj = request.body
    console.log(AdminCredObj)
    //verify username
    let AdminDB = await AdminCollection.findOne({username:AdminCredObj.username})
    //if username is invalid
    if(AdminDB===null){
        response.status(200).send({message:"Invalid username"})
    }
    //if username is valid
    else{
        //verify password
        console.log(AdminDB.password)
        let isEqual = await bcryptjs.compare(AdminCredObj.password,AdminDB.password)
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
            response.status(200).send({message:"success",/*token:jwtToken*/user:AdminDB})//token:jwtToken,
        }
    }
   })

   module.exports=adminapp