const exp = require('express')

const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const expressAsyncHandler = require("express-async-handler")

const userapp = exp.Router()

//body parser
userapp.use(exp.json());

userapp.post('/login' , expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const userCollectionObj = request.app.get("userCollectionObj")
    //get user Credentials from req
    const userCredObj = request.body
    console.log("userobj:"+userCredObj)
    //verify username
    let userOfDB = await userCollectionObj.findOne({username:userCredObj.username})
    //if username is invalid
    if(userOfDB===null){
        response.status(200).send({message:"Invalid username"})
    }
    //if username is valid
    else{
        //verify password
        console.log(userOfDB.password)
        let isEqual = await bcryptjs.compare(userCredObj.password,userOfDB.password)
        //if passwords are not matched
        // console.log(isEqual);
        if(isEqual==false){
            response.status(200).send({message:"Invalid Password"})
        }
        //if passwords matched
        else{
            //create a jwt token
            let jwtToken = jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:"2d"})
            //send token in response
            response.status(200).send({message:"success",token:jwtToken,user:userOfDB})//token:jwtToken,
        }
    }
}))

userapp.post('/signup' , expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const userCollectionObj = request.app.get("userCollectionObj")
    //get newUser from request
    const newUser = request.body;
    //check for duplicate user by username
    let userOfDB = await userCollectionObj.findOne({username:newUser.username})
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
        await userCollectionObj.insertOne(newUser)
        //send res
        response.status(201).send({message:"User Created"})
    }

})
)

module.exports=userapp;