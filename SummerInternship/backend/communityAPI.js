const exp = require('express')
const communityapp = exp.Router()

//body parser



communityapp.use(exp.json());



//retriving of all competition
communityapp.get('/getData' , (request,response)=>{
    const communityCollection = request.app.get("communityCollection" )

    communityCollection.find().toArray()
    .then((content)=>{
        console.log(content);
        response.send({
            message:"Success",
            payload: content
        })
    })
    .catch(err => {
        console.log("Error at communityapp(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of competitions
communityapp.post('/sendMessage' , (request,response)=>{
    const  communityCollection = request.app.get("communityCollection" )
    let data = request.body;
    console.log(data)
    communityCollection.insertOne(data)
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

module.exports=communityapp;