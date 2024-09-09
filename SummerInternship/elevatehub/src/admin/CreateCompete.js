import React,{useContext,useState} from 'react'
import { loginContext } from '../context/LoginContext';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function CreateCompete() {
  let [currentUser,loginUser,logoutUser,LoginErr,UserLoginStatus,srole] = useContext(loginContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  let navigate = useNavigate();

  const onSubmit = (data) => {
    // Handle submission logic here, e.g., send data to the server
    axios
    .post("http://localhost:3500/compete/create", data)
    .then((res) => {
      if (res.data.message === "Success") {
        setData("Competetion Details Posted");
      } else {

        console.log("error in posting details");
      }
    })
    .catch((err) => console.log("err at posting :", err.message));
    console.log("Competition Data:", data);
  };
  return (
    <div>
      {srole==="admin"?(
          <div className="container mt-5">
             <h1 className='text-danger'>{data}</h1>
          <h1 className="text-center mb-4">Create Competition</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="hname">Competition Name:</label>
              <input
                type="text"
                className="form-control"
                {...register("hname", { required: "Competition Name is required" })}
              />
              <span className="text-danger">{errors.hname?.message}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                className="form-control"
                {...register("address", { required: "Address is required" })}
              />
              <span className="text-danger">{errors.address?.message}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                className="form-control"
                {...register("image", { required: "Image URL is required" })}
              />
              <span className="text-danger">{errors.image?.message}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                className="form-control"
                {...register("date", { required: "Date is required" })}
              />
              <span className="text-danger">{errors.date?.message}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="team">Team:</label>
              <input
                type="text"
                className="form-control"
                {...register("team", { required: "Team is required" })}
              />
              <span className="text-danger">{errors.team?.message}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="impression">Impression:</label>
              <input
                type="text"
                className="form-control"
                {...register("impression", { required: "Impression is required" })}
              />
              <span className="text-danger">{errors.impression?.message}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="text">Description:</label>
              <textarea
                className="form-control"
                {...register("text", { required: "Description is required" })}
              />
              <span className="text-danger">{errors.text?.message}</span>
            </div>
    
            <button type="submit" className="btn btn-primary">
              Create Competition
            </button>
          </form>
        </div>
      ):(
        <h1 className='text-danger'>
          ONLY ADMINS CAN VIEW THIS PAGE
        </h1>
      )}
        
    </div>
  )
}

export default CreateCompete