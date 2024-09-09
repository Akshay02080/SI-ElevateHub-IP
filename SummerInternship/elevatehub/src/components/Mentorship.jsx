import React from "react";
import { AiFillThunderbolt, AiOutlineArrowRight } from "react-icons/ai";

function Mentorship() {
  const searchData = [
    {
      id: 1,
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/personal-branding-icon.png?d=533x313",
      text: "Placement Preparation & Mock Interview",
    },
    {
      id: 2,
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/mba-preparation-icon.png?d=546x407",
      text: "MBA Preparation (CAT, XAT, IIFT, NMAT, SNAP)",
    },
    {
      id: 3,
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/data-science-icon.png?d=540x310",
      text: "Data Science and Machine Learning",
    },
  ];
  return (
    <div>
      Mentorship
      {/* first */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundImage:
            'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAACWCAMAAAC/8CD2AAAAA1BMVEX7++ROxL/8AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8GxXYAARizDlgAAAAASUVORK5CYII=")',
          backgroundSize: "cover",
          padding: "30px",
        }}
      >
        <div style={{ color: "#1c4980", marginTop: "50px" }}>
          <h1 className="mt-3">1-on-1 Mentorship</h1>
          <h4 className="mt-3">
            Book a session with unstoppable mentors across domains & work
            together to build your career!
          </h4>
          <div className="d-flex mt-4">
            <div>
              <button
                style={{ marginRight: "15px" }}
                className="btn btn-primary m-3"
              >
                Find mentors{" "}
              </button>
            </div>
            <div>
              <button className="btn btn-outline-primary m-3">
                Be a Mentor
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.unstop.com/uploads/images/unstop/mentorship-desktop-banner-new.png?d=1200x834"
            width="600px"
            height="417px"
            alt="Mentorship Banner"
          />
        </div>
      </div>
      {/* second */}
      <div className='popularsearches mt-4' style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_cYYNKWftnHCb4dhSbq1Rf7johiZGC8Rtw&usqp=CAU')" }}>
      <div className='container'>
        <div className='text-center pt-4'>
          <h1 className='display-4'><AiFillThunderbolt />Popular Searches</h1>
        </div>
        <div className='row justify-content-center'>
          {searchData.map((search) => (
            <div key={search.id} className='col-md-4 mb-4'>
              <div className='card searchcard' style={{ backgroundImage: `url(${search.image})`, backgroundSize: 'cover', height: '300px', transition: 'transform 0.3s ease' }}>
                <div className='card-body'>
                  <h5 className='card-title mt-2'>{search.text}</h5>
                  <p className='explore'><a href='/'>Explore More<AiOutlineArrowRight /></a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Mentorship;
