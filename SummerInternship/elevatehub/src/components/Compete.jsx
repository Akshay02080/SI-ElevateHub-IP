import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { BsFillBuildingsFill,BsFillPeopleFill,BsCalendarDateFill} from "react-icons/bs";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import './compete.css'
function Compete() {
  // let handleClick=(e)({
  //   return props.func(e)
  // })
  const [compete,setcompete] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3500/compete/getall")
    .then((res)=>{
   
     if(res.data.message==='listOfcompets'){
      // // setData(...res);
      // console.log("res:",res.data.payload)
       setcompete(res.data.payload)
      console.log("succesfully created")
     }
     else{
       console.log("error at retriving")
     }
      })
    .catch(err=>console.log("err at posting :",err.message));
  },[])
  let Tcompete = ["Web Development","machine learning","ar/vr"];
   const [val,setval]=useState(Tcompete[0])
  useEffect(()=>{
          setval(val)
  },[])
  
  
  
  return (
    <div className="row">

      <div className="col-md-2 p-2"  style={{minHeight:"86vh",backgroundColor:" rgb(202, 145, 255)"}}>
        {Tcompete.map((cs) => (
          <div key={cs}>
          <NavLink className="nav-link btn m-4" >
            <div onClick={()=>setval(cs)} className="lead"><p>{cs}</p></div>
          </NavLink>
          </div>
        ))}
      </div>

      <div className="col-md-10">
      <h1 className="text-center p-2">Compete</h1>
          <div className="container">
            {compete.map((cs) => (<>
                <div className="card c1">
                 <div className="card-header">
                    <div className="image">
                        <img src={cs.image} width="75px" height="75px" ></img>
                    </div>
                    
                    <div className="instute">
                        <h4>{cs.hname}</h4>
                        <h5><BsFillBuildingsFill/>  &nbsp; {cs.address}</h5>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="threethings">
                            <div className="d-flex">
                                <div className="m-2">
                                    <BsCalendarDateFill size={30}/>
                                </div>
                                <div>
                                    <h6>Registration Deadline</h6>
                                    <p>{cs.date}</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="m-2">
                                    < AiFillEye size={30}/>
                                </div>
                                <div>
                                    <h6>Impressions</h6>
                                    <p> {cs.impression}</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="m-2">
                                    <BsFillPeopleFill size={30}/>
                                </div>
                                <div>
                                    <h6>Team Size</h6>
                                    <p>{cs.team} Members</p>
                                </div>
                            </div>

                    </div>
                    <h5 className="card-title">Stages and Timelines</h5>
                    <p className="card-text">{cs.text}</p>
                    <button className="btn btn-primary">More details</button>
                </div>

            </div>
              </>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Compete;
