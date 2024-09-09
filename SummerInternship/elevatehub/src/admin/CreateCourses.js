import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { loginContext } from "../context/LoginContext";
import axios from "axios";

function CreateCourses() {
  let [currentUser, loginUser, logoutUser, LoginErr, UserLoginStatus, srole] =
    useContext(loginContext);
  const [data, setData] = useState("");

  let { register, handleSubmit } = useForm();

  let navigate = useNavigate();
  let Submitfun = async (userdata) => {
    console.log("User Data is:" + userdata);

    axios
      .post("http://localhost:3500/courses/create-course", userdata)
      .then((res) => {
        if (res.data === "Erroe is :") {
          setData(" * eneter vaild pw");
        } else {
          navigate("/");
          console.log("succesfully created");
        }
      })
      .catch((err) => console.log("err at posting :", err.message));
  };
  return (
    <div>
      {srole === "admin" ? (
        <>
          <h1>Create Course</h1>
          {/* name:
            photo:
            content:
            info:  */}
          {/* When we click create the details of the course will be posted to a courseAPI */}
          <form
            action=""
            className=" border border-solid"
            onSubmit={handleSubmit(Submitfun)}
          >
            <div className="form d-block w-25 m-auto border bg-secondary ">
              <div className="m-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="cName"
                  {...register("cName", { required: true })}
                />
              </div>
              <div className="m-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="photo"
                  {...register("photo", { required: true })}
                />
              </div>
              <div className="m-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="content"
                  {...register("content", { required: true })}
                />
              </div>
              <h4 className="">{data}</h4>
              <button className="btn btn-success p-2 " type="Submit">
                submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <h1 className="text-danger">ONLY ADMINS CAN VIEW THIS PAGE</h1>
      )}
    </div>
  );
}

export default CreateCourses;
