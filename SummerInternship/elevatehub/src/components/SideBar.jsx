import React, { useEffect, useState } from 'react'
import Courses from './Courses';

function SideBar({props}) {
    // let [val,setval] = useState("")
    // let x='a'
    // function func(data){
    //     console.log(234)
    //     setval(data)
    // }
    // useEffect(()=>{
    //     <Courses func={func()}/>
    // },[])
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
      console.log(props)
      return (
        <div>
        <h1>{props.x}</h1>

          <h1>Courses</h1>
          <div className="row">
            {course.map((cs) => (
              <div key={cs.cid} className="col-sm-4 p-3">
                {cs.cName?(
                    <div className="card">
                    <img className="card-img-top" src={cs.image} />
                    <div className="card-body">
                      <p className="card-text">{cs.content}</p>
                    </div>
                  </div>
                ):(
                    <></>
                )

                }
              </div>
            ))}
          </div>
        </div>
      );
}

export default SideBar