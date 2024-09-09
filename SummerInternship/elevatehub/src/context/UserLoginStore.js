import { useState,useEffect } from "react";
import axios from 'axios';
import { loginContext } from "./LoginContext";

function UserLoginStore({children}) {
    // const [role, setRole] = useState("");
    const storedToken = localStorage.getItem('token');
    const [currentUser,setcurrentUser] = useState('')
    const [LoginErr,setLoginErr]=useState("")
    const [UserLoginStatus,setUserLoginStatus] = useState(!!storedToken)
    const [srole,setsrole] = useState("")
     // Use useEffect to set srole from Local Storage on component mount
   

  useEffect(() => {
    const storedSrole = localStorage.getItem('srole');
    const storedUser =  localStorage.getItem('user');
    console.log(storedUser);
    if (storedSrole) {
      setsrole(storedSrole);
    }
    if (storedUser) {
        setcurrentUser(storedUser)
      }
  }, [UserLoginStatus]);
    //function to make User login request
    const loginUser=(userCredentialObj,role)=>{
        localStorage.setItem("srole",role)
        
        axios
        .post(`http://localhost:3500/${role}/login`,userCredentialObj)
        .then(response=>{
          console.log(response)
            if(response.data.message==="success"){
                console.log(response.data.user)
                //save token to local storage
                localStorage.setItem("token",response.data.token)
                
                localStorage.setItem("user",response.data.user.username)
                

            //    setcurrentUser({...response.data.username})
               setLoginErr("")
               setUserLoginStatus(true)
               

            }else{
                setLoginErr(response.data.message)
            }
        })
        .catch(err=>{
            console.log("err in user login ",err)
        })
    }

    //logout user
    const logoutUser=()=>{
        localStorage.clear()
        setUserLoginStatus(false)
    }

    return(
        <loginContext.Provider value={[currentUser,loginUser,logoutUser,LoginErr,UserLoginStatus,srole]}>
            {children}
        </loginContext.Provider>
    )
 
}

export default UserLoginStore;