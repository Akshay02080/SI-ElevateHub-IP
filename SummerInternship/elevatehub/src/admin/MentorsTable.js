import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { loginContext } from "../context/LoginContext";

function MentorsTable() {
  let [currentUser, loginUser, logoutUser, LoginErr, UserLoginStatus, srole] = useContext(loginContext);
  const [Data, setData] = useState([]);
  const [cnt, setcnt] = useState(0);

  function del(id) {
    axios
      .delete(`http://localhost:3500/mentors/delete-New-Mentors/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Success") {
          setcnt(cnt + 1);
        } else {
          console.log("error at retriving");
        }
      })
      .catch((err) => console.log("err at posting :", err.message));
  }
  function inst(val) {
    axios
      .post("http://localhost:3500/mentors/create-All-Mentors", val)
      .then((res) => {
        if (res.data.message === "Success") {
          console.log("Accepted the Mentor");
        } else {
          console.log("error at accepting the mentor");
        }
      })
      .catch((err) => console.log("err at posting :", err.message));
    del(val._id);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3500/mentors/get-New-Mentors")
      .then((res) => {
        if (res.data.message === "List of New Mentors :") {
          // setData(...res);

          setData(res.data.payload);
          console.log(res.data.payload);
          console.log("succesfully created");
        } else {
          console.log("error at retriving");
        }
      })
      .catch((err) => console.log("err at posting :", err.message));
  }, [cnt]);
  return (
    <div>
      {srole === "admin" ? (
        <>
          <h1>MentorsTable</h1>
          {/* There will be two apis 1.new mentors 2.all mentors */}
          {/* there will be table of all mentors and another table of new mentors */}
          {/* When we click a button post the mentors in new mentors 
        will be added to the all mentors and the the data in new mentors will be deleted */}
          {Data.map((val, ind) => (
            <div key={ind}>
              <h1>{val.name}</h1>
              <button onClick={() => inst(val)}>Accept</button>
              <button onClick={() => del(val._id)}>Reject</button>
            </div>
          ))}
        </>
      ) : (
        <h1 className="text-danger">ONLY ADMINS CAN VIEW THIS PAGE</h1>
      )}
    </div>
  );
}

export default MentorsTable;
