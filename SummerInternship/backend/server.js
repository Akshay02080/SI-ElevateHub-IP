const exp=require('express');
const app=exp()
const cors = require('cors')
const bodyParser  = require("body-parser")
app.listen(3500,()=>{console.log("server is running port 3500")});

app.use(cors())
app.use(bodyParser.json())
//connect to mongo

const mClient=require('mongodb').MongoClient


mClient.connect('mongodb://127.0.0.1:27017')
.then((dbRef)=>{
    const elevatehubObj=dbRef.db('elevatehub');
    const userCollectionObj = elevatehubObj.collection('userLogin');
    const CoursesCollection=elevatehubObj.collection('Courses');
    const CompetitionCollection=elevatehubObj.collection('Competition');
    const JobsCollection=elevatehubObj.collection('jobs');
    const NewMentorsCollection = elevatehubObj.collection('NewMentors')
    const AllMentorsCollection = elevatehubObj.collection('AllMentors')
    const AdminCollection=elevatehubObj.collection('adminLogin');
    const communityCollection=elevatehubObj.collection('community');



app.set("userCollectionObj",userCollectionObj);
app.set("CoursesCollection",CoursesCollection);
app.set("CompetitionCollection",CompetitionCollection);
app.set('JobsCollection',JobsCollection);
app.set("NewMentorsCollection",NewMentorsCollection);
app.set('AllMentorsCollection',AllMentorsCollection);
app.set('AdminCollection',AdminCollection);
app.set('communityCollection',communityCollection);


console.log("Database Successfully Connected");
})
.catch(err=>console.log("Error in connecting Db",err));



//APIS

const userapp=require('./userAPI');
app.use('/student',userapp);



const jobsapp=require('./jobsAPI');
app.use('/jobs',jobsapp);



// const userapp=require('./userAPI');
// app.use('/login',userapp);

const courseapp=require('./courseAPI');
app.use('/courses',courseapp);


const competitionapp=require('./competitionAPI');
app.use('/compete',competitionapp);

const mentorsapp=require('./mentorsAPI');
app.use('/mentors',mentorsapp);

const adminapp=require('./adminApi');
app.use('/admin',adminapp);

const communityapp=require('./communityAPI');
app.use('/community',communityapp);
//Error handlers


const errorHandlingMW=(error,request,response)=>{
    console.log("error in  API:",error)
    response.send({message:"error",payload:error})
}
app.use(errorHandlingMW)


//Invalid paths
const InvalidPathMW=(request,response)=>{
    console.log("Invlaid path");
    response.send({message:"Invalid path"});
}
app.use(InvalidPathMW)