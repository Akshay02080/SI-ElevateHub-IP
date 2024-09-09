import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MentorsTable from "../admin/MentorsTable";

function Courses() {
  // let handleClick=(e)({
  //   return props.func(e)
  // })
      
const [data,setData]=useState([]);




let navigate=useNavigate();
useEffect(()=>{
  axios.get("http://localhost:3500/courses/getall-course")
  .then((res)=>{
 
   if(res.data.message==='List of Courses :'){
    // // setData(...res);
    // console.log("res:",res.data.payload)
     setData(res.data.payload)
    console.log("succesfully created")
   }
   else{
     console.log("error at retriving")
   }
    })
  .catch(err=>console.log("err at posting :",err.message));
},[])
  
  let course = [
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 2,
      cName: "machine learning",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 3,
      cName: "ar/vr",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 2,
      cName: "machine learning",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 3,
      cName: "ar/vr",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
  ];
  let Tcourse = ["Web Development","machine learning","ar/vr"];
   const [val,setval]=useState(Tcourse[0])
   
  useEffect(()=>{
          
  },[val])
  
 

  return (
    <div className="row">
      
      <div className="col-md-2 p-2"  style={{minHeight:"86vh",backgroundColor:" rgb(202, 145, 255)"}}>
        {Tcourse.map((cs) => (
          <div key={cs}>
          <NavLink className="nav-link btn m-4" >
            <div onClick={()=>setval(cs)} className="lead"><p>{cs}</p></div>
          </NavLink>
          </div>
        ))}
      </div>

      <div className="col-md-10">
      <h1 className="text-center p-2">Courses</h1>
          <div className="row">
            {course.map((cs) => (<>
                {cs.cName===val?(
                  <div key={cs.cid} className="col-sm-4 p-3">
                    <div className="card">
                    <img className="card-img-top" src={cs.image} />
                    <div className="card-body">
                      <p className="card-text">{cs.content}</p>
                    </div>
                  </div>
                  </div>
                ):(
                    <></>
                )

                }
              </>
            ))}
          </div>
      </div>
      <MentorsTable/>
    </div>
  );
}

export default Courses;
