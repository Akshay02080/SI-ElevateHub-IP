import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginContext } from "../context/LoginContext";

function Community() {
  let [currentUser, loginUser, logoutUser, LoginErr, UserLoginStatus, srole] =
    useContext(loginContext);
  const [data, setData] = useState("");
  const [Info, setInfo] = useState([]);
  let { register, handleSubmit } = useForm();

  let navigate = useNavigate();

  // Posting content
  let Submitfun = async (userdata) => {
    userdata.Uname = currentUser;
    console.log("User Data is:" + userdata);

    axios
      .post("http://localhost:3500/community/sendMessage", userdata)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Success") {
          setData("message sent");
        } else {
          setData("error in sending message");
          console.log("error in sending message");
        }
      })
      .catch((err) => console.log("err at posting :", err.message));
  };

  // Getting content
  useEffect(() => {
    axios
      .get("http://localhost:3500/community/getData")
      .then((res) => {
        if (res.data.message === "Success") {
          setInfo(res.data.payload);
          console.log("successfully created");
        } else {
          console.log("error at retrieving");
        }
      })
      .catch((err) => console.log("err at posting :", err.message));
  }, []);

  return (
    <div className="container ">
      {srole === "student" ? (
        <>
          <h1 className="text-center mt-3">Community</h1>

          <div className="chat-container overflow-auto"   style={{ maxHeight: "600px" }} >
            {Info.map((cs) => (
              <div key={cs.cid}  className={`border rounded p-2 mb-2 `}>
               <div className={` border rounded p-2 mb-2 username-block ${cs.Uname === currentUser ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                  <strong>{cs.Uname}</strong>
               </div>
                <p>{cs.content}</p>
              </div>
            ))}
          </div>

          <form
            action=""
            className="border border-solid mt-3 p-3 "
            onSubmit={handleSubmit(Submitfun)}
          ><div className="row">
              <div className="col-11">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  {...register("content", { required: true })}
                />
              </div>
              <div className="col-1">
                <button className="btn btn-success" type="Submit">
                  Send
                </button>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="text-center">{data}</h4>
            </div>
            
          </form>
        </>
      ) : (
        <h1 className="text-danger text-center mt-3">ONLY STUDENTS CAN VIEW THIS PAGE</h1>
      )}
    </div>
  );
}

export default Community;
