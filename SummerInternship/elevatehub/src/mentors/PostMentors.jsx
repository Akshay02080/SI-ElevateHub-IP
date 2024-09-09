import React,{useContext} from 'react'
import { loginContext } from '../context/LoginContext';

function PostMentors() {
  let [currentUser, loginUser, logoutUser, LoginErr, UserLoginStatus, srole] = useContext(loginContext);
  return (
    <div>
      {srole==="mentors"?(
        <>
          <h1>PostMentors</h1>
        </>

      ):(
        <h1 className="text-danger">ONLY MENTORS CAN VIEW THIS PAGE</h1>
      )}
      
      </div>
  )
}

export default PostMentors