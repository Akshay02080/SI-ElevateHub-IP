import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";
import Courses from "./Courses";
// import './Vcarousel'
// import Vcarousel from './Vcarousel';
// import "./Courses";
// import "./Fotter";
// import Footer from "./Footer";
// import Verticalcards from '../courses/Verticalcards'

function Home() {
  let navigate = useNavigate();
  let b = [
    {
      image: "https://www.aqskill.com/wp-content/uploads/2021/06/3865795.jpg",
      cName: "Java Programming",
      content:
        "Learn the fundamentals of Java programming and unlock the power of this versatile language.",
    },
    {
      image:
        "https://klic.mkcl.org/user/pages/images/courses/KLiC-C++-Programming-2023.jpg",
      cName: "C++ Programming",
      content:
        "Embark on a journey to become a proficient C++ programmer with our comprehensive course.",
    },
    {
      image:
        "https://contentstatic.techgig.com/thumb/msid-80255871,width-460,resizemode-4/Beginner-tips-to-become-a-successful-Python-developer.jpg?88712",
      cName: "Python Programming",
      content:
        "Discover the power and versatility of Python, one of the most popular and beginner-friendly",
    },
    {
      image:
        "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg",
      cName: "Data Structures",
      content:
        "Unlock the secrets of efficient programming with our DSA Masterclass.",
    },
  ];

  return (
    <div className=" hm">
      <div class="welcome-message">
        <h1>
          Welcome to <span>Elevate Hub</span>!
        </h1>
        <p>
          We are your gateway to <span>unlimited learning</span> and{" "}
          <span>growth</span>.
        </p>
      </div>
      <div className="row mt-5 ima">
        <div className="col-lg-4">
          <img
            src="https://img.freepik.com/free-vector/interesting-chemistry-facts-online-searching-self-education-exam-preparing-internet-surfing-man-woman-characters-browsing-scientific-website_335657-783.jpg?w=2000"
            alt=""
            height="450px"
          />
        </div>
        <div className="col-lg-4">
          <img
            src="https://img.freepik.com/free-vector/online-tutoring-app-software-abstract-concept-illustration-online-tutoring-session-video-chat-e-learning-scheduling-software-personal-learning-plan_335657-3485.jpg?w=2000"
            alt=" "
            height="450px"
          />
        </div>
        <div className="col-lg-4">
          <img
            src="https://img.freepik.com/premium-vector/modern-mobile-app-education-e-learning-illustration-woman-sitting-desk-with-laptop_188928-115.jpg?w=2000"
            alt=""
            height="450px"
          />
        </div>
      </div>

      <div className="AboutUs p-4 rounded row">
        <div className="col-lg-4">
          <img
            src="https://media.istockphoto.com/id/1163589059/photo/about-us.jpg?s=612x612&w=0&k=20&c=xiAumkYaKpQc3xepslDpn-lFhYPae6ivX_rRkgSXJgs="
            alt=""
            className="rounded"
            width="400px"
            height=""
          />
        </div>
        <div className="col-lg-8">
          <p>
            Welcome to Elevate Hub, the student learning platform that knows no
            bounds. With an extensive array of courses, mentorship
            opportunities, and thrilling contests, we are committed to
            empowering learners of all ages to unlock their full potential. Our
            platform provides a rich and diverse learning experience, tailored
            to meet the unique needs and aspirations of each individual. Whether
            you're a high school student, a college graduate, or a lifelong
            learner, Elevate Hub is your gateway to endless knowledge and
            growth.
          </p>
          <p>
            At Elevate Hub, our dedicated team of mentors brings expertise and
            passion to guide students on their educational journey. Through
            personalized mentorship programs, learners receive invaluable
            support and encouragement, equipping them with the skills and
            confidence to excel in their chosen fields. Moreover, our engaging
            contests and competitions foster a spirit of healthy competition and
            innovation, allowing students to showcase their talents, collaborate
            with peers, and win exciting rewards. Together, let's elevate
            education, break barriers, and forge a community of unstoppable
            learners ready to conquer the world. Join Elevate Hub today and
            embrace the boundless possibilities that await!
          </p>
        </div>
      </div>
      <div className="routes text-center rounded p-5 ">
        <h1>Features</h1>
        <div className=" row p-3">
          <div className="col-lg-3">
            <button
              type="click"
              onClick={() => navigate("/courses")}
              className="btnn btn w-100 h-100"
            >
              <div
                className="card d-block m-auto"
                style={{ height: "200px", width: "175px" }}
              >
                <img
                  src="https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406"
                  alt=""
                  height={150}
                  width={160}
                />
                Learning
              </div>
            </button>
          </div>

          <div className="col-lg-3">
            <button
              type="click"
              onClick={() => navigate("/Mentoring")}
              className="btnn btn"
            >
              <div className="card d-block  w-100 h-100 m-auto">
                <img
                  src="https://cdn.unstop.com/uploads/images/courses/unstop-classroom-banner-new.png?d=840x870"
                  alt=""
                  width={150}
                  height={150}
                />
                Mentoring
              </div>
            </button>
          </div>

          <div className="col-lg-3 ">
            <button
              type="click"
              onClick={() => navigate("/compete")}
              className="btnn btn"
            >
              <div className="card d-block w-100 h-100 m-auto ">
                <img
                  src="https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406"
                  alt=""
                  width={150}
                  height={150}
                />
                Practice
              </div>
            </button>
          </div>
          <div className="col-lg-3">
            <button
              type="click"
              onClick={() => navigate("/community")}
              className="btnn btn"
            >
              <div className="card d-block w-100 h-100 m-auto">
                <img
                  src="https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406"
                  alt=""
                  width={150}
                  height={150}
                />
                jobs
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className=" crsl p-5 rounded-pill">
        <h1 className="text-center p-3 ">Contests</h1>
        <Carousel className="">
          <Carousel.Item>
            <img
              className="d-block w-50 h-50 m-auto"
              src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/64be18b24d191_HP-Banner.jpg?d=1266x494"
              alt="image not loaded"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 h-50 m-auto"
              src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/64ba83378e233_Home-Page.jpg?d=1266x494"
              alt="image not loaded"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 h-50 m-auto"
              src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/64a7f587797d5_Homepage_Banner.jpg?d=1266x494"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 h-50 m-auto"
              src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/64c0c21a99554_Web_banner_-_Ode2Code_3.0.png?d=1266x494"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className="row mt-5">
        <div className="col-4  bg-opacity-50 text-center border border-5 p-3 border-white ">
          <button
            className="btn cardss"
            type="click"
            onClick={() => navigate("/Courses")}
          >
            <img
              src="https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406"
              alt=""
              width={250}
              height={250}
            />
            <h5>Compete</h5>
            <h6 style={{ textDecoration: "underline" }}>Time to learn</h6>
          </button>
        </div>
        <div className="col-4  bg-opacity-50 text-center border border-5 p-3 border-white ">
          <button
            className="btn cardss"
            type="click"
            onClick={() => navigate("/Courses")}
          >
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMTERISEhEYFhEUGRIWGBYWFhoaERERFhYY
                GBgUGRkcHysiGh0pHRYYIzQkKSwuMTMxGSE3PDcwOysyMS4BCwsLDw4PHBERHTAoIigwMDAwMDAyMjAwMDAwMC4wMDAwMDAwMDAwMDAwMDEwMD
                AwMDAwMDAwMDAwMDAwMDAwMP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBBQYCB//EAEIQAAIBAgIGBQsBBQ
                cFAAAAAAABAgMRBCEFEjFBUWEGMnGBkRMUIlJTkqGiscHR8CNicoLhFTNCsrPC0gcWQ0ST/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAQIEBAUFAQEAAAAAAAABAhEDITEEEkFRBRNxoSJhgZGxFDJCwdHwcv/aAAwDAQACEQMRAD8A6cAHROEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZABUkwACxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAFSTAALEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAVJMAAsQAAAAAAAAAAAAAAAAT4TBVKktSMc9rvkoriyfSGialFKTtKLdrxvk+DRXmV0XWOTjzVoUQS4jCVKdteDjfZfeRE7lWmtGAASQAAAC9hNDVpyScXFNX1pbLfnkVKNVxalG11fak1nlseRc/t2v7T5Y/gpLm/jRkh5f87+hFjtHzpylFpuKs9ZJ6tnv5FUvy01Waac8nk/RjmvAoEx5v5ET5L+C/qAAWKAAAAAAAAAAAAGQAVJMAAsQAAAAAAAAAAAACXB1lCpGbjrKLvq3tfh8bPuIgQ9SU6dm8fSXO6oq+Wevm7fymf8AuZvbQT/n3+6aIFPKh2M36nL3/Buq/SCM0lOgpJO6TnfOzWzV5mnqSu20rJtuy2K+5HkFowjHYxzySn+4AAsUAAAAAAAAAAAAAAAABrdP6WeHpqSpSm293Uja3Wl/h5ZAlK3SNkDmdHdNITko1aepeVlJO8VF7HLsy+vI6YCUXHcAAEGQAVJMAAsQe6NPWdv1Yt1MGtW8cneKV3tk72j2u2V99ltaKlCpqu/6sdBoivBU5zbjGN0taWXp7k++3icbi/1P63G02sddNr10l7b9NOp0+EjglglFpc3z3r5HONWye36AkxNRynKUpKUm3eSi4xk+Ki22lwV2RnYRzXV6AAEkAAAAAAAAAAGbZX3fr8GGrbQAAAlYAMqLexMwRetdR0sAAlqgAAAAAAAAACzo901KXlHNXi4x8nFynrS9HKKTbdm92Wbytc1mM0lRpf3lWMXwb9L3VmaqfTSippUlNu69N+jGPPfL4FZK00ZMafMnVknTjosv7Sh5OnU8nWvUqVJJOkmnnGElmnZZqWd5J7DdnO6Q6f1akoxUF5CLTam26s5Ws5a17R5RSaXM39CspwjOPVklJdjV0IJqKsycTrK1sewAWNcyACpJgAFiAcdprT+IjiKkKVapThGWrqwk4p6uV5W62d9p2JxnTHAuFfyi6tVX7JpJNeFn3slJPcy4nUihDTeITdq8782mvB5ItUulGIW2cZfxQX+2x0P/AEtrUqvlcHVjF6y8rTcopuMllOKvy1XblI3mkejtGMmnQp3W7ycbNcVkaefjoYMqhlVJ7S6X2fb5PZm4uGc4c8VddOtfLucbS6Y1F1qMJdknH66xcw3S+EnGLoT1pNJKLjK8m7JZuO82j0Ph/Y0/dRmjomhCUZxowUotSi0s4yTumu9G5oaXNB9CxhKrqVKlJUqsatOMZyhOm4yUJXSkr5SWT2X2MksTV8XOUnOUrzcdS9knqerluNetG0l1aah/BeH+Roor6kS5L+G/YtAreZ26tWpH+bW/1FIOjVXVrJ/x07v5JRJK0u5ZBW/br2Uveh/yPeExNWNS1TD3g7atSElKEZZ311JRa3bE/wAYs2Xy4cyVvZLRW3srf/epfHj55Vdd3vSRcpydtjyT1bbpNq8u230XAzRopvNvMxLEye/4HqjLNM4fivE8bhxRlpC3Xwu3s9NYrT09jp8Di4bJNrWVLqqXs2WFh4rceowitiXgZqSstlyvGq7u288zk4jNl/fOT9W3+WdmGHHD9sUvoWitXqKMuqm3nd+H2LC5lTSG2Pebng2OE+KUJbNO6bV6XrTXbY1/EJSjgco7prs+tdbPPnEH11GK9a6SXa2UXjqPtqf/ANI/ktUsPGb1ZxUof4lJJxa5p7SOUY3yiktySSSW5HreHhDFnnjx3XKm1dpN3tro2lbSpdThZZPJijOe9tXs2qXbs9vsQef0fbU/fj+R5/R9tT9+P5JtVcF4GdVcF4G9qauhB5/R9tT9+P5JHiI+Sq1otThSi5T1JRk0kruyvm7K9j1qrgvA9qT1XG71Xtjf0X2rYw7JXL1v2OdWnsRWpVauFwjdKim51ZyVoJK79FNXds7Js5vGaYxFXr12l6sPRj2eja/fc+kU60o05Uou1OWTgrarT2q3BldYSn7OHuR/BK+Zk54LZHzFUlxL2iNFVsRPydCk6kt+r1Y85SeUe9n0JUYrZCPuo6fo7Strcopd72/Q1eJ4xYZQglbk2vRJW3+F9Ta4ePncz2S/tnw+rTcZSi9sW4vhdOz+h3+go2w1C/s4fFXOAryvKT4uT8WfQ9GTvQotb6dN/Kjcka2bZFkAFTAZABUkwACxANT0soa+Gm98HGa7nZ/Bs2xFi6OvTnD14yj4poIlOnZwGh9ISw9elXh1qclK3rLZKPfFtd539bplh8ZVjGkpwmovr6q8olnZasnms348D5rJ229netqPHlJRcZxdpResmtsXtQlCLds3Xbi4n1IFDQWlI4iiprKaynH1Z/h7UXwaLVaMAAAAAAE+FaacH/i2dpADBxGBZsbhddU+zTtP6MyYsnlzUt+67p7ozOLTs9pJRZ6jiU1aavz3h6m1N34M5fH+bm4eWHLjfNunFc0W16aq/mtL6m9wnJizLJCarZp6SSfs/oy5F3VyNUFbbmeMNVWzd9yweNlGUJOMlTXQ9CpKSTWzMlbEUnKStsS27ixUxOqru3uxz+BRli5Pbaz/AHIfg7fg3B5pz8/E0krScl30dK9Wvsmc3xDiMSj5c9b1pOvve35M1JqK1Y532vjyICTVh60vcX/I8zS3NvtSX3Z6vh8EcMWlbb1be7fd/wBLZLRHDy5HkdukloktkuyPIAM5iAAAAAABXX/UGGFnOk6TqpW1pRmlqySs4pNZ27dtyj0n0x5vStF/tql1D93jPuv4tHDJfre2VlihNpyW23ys2eHco20zJ3vRqprYWi+Ccfdk4/Y5zozoBVv2tS/kk2lG7XlHvz2pLlvOuwWEhSgqdNWgr2V29ru8277WZGymWSehMACphMgAqSYABYgAGYNLar97+wBzPTiglToySStKayVuurv/ACnKVKMpRk0rqFnLlG6V/FrxO26ZYyiqUISpqU3JSUdaSeqlJa2T5/qxp+h0VKvVTitSVOacXmtVyj6Oe1WyLdDZi+WFmp6P6VeHrKe2nLKa4x4rmtvit59HpzUkpRd4tJprY0800cB0m0E8PPWjd0Jv0Xvg/Uf2e9dhsuhGmf8A15vi6bfHa4fVrv5FSuSPMuZHXA9TqN7bd0UvojyDAAAAESeR/ej7yIwQCTyP70feRGEyTykfUXi/yCSNM2GEqXjntWRRnJPZG3e/uWMA+suw43jnDxycK8lfFGtetWk16anQ8MyyhnUL0d6fRv8Aojxj9N8rEJYxy9Jc0iub3hzT4PE1tyr8GtxaazzT7sAA3DXAAAABmKV83ZeIBgjxWIjThKpN2hFNt8vyWNSPrv3f6nEdOdLxnNUKU7wg3r5WTqLYr3zSz7yC8YOTNPpHHyxFeVWX8q3QgurH9b2zODw0qlSFOPWk0ly4vsSu+4saI0BWrUpVYJW2RTydS23V/rtPGDxNTD1dZK043TjJbntTW1GSJs2tkfQMLQjThGnHKMUkvz27yUp6F6QKvG0JyjNLOnrO65x4ouyk27ttvi3dlDUehgAAgyACpJgAFiAazTumY0I7pVZdWP8Auly+pJpzSiw9LWyc3lCLe2XHsX62nNaN0PWxU3VqyahJ3c31p8oLhz2LmSjJCK3lsUsJRrYitdLXm2pScuol+9uty8DudF4KFCPowhrtLWkoJa3duR6weEhSgoU4qMV4t8W97Jg3Ylkb22I8Xh41YShON4SVmvxwZ8701oueGqpXerfWpzW12d+6SyPpBV0po+Fem6dRZPNNdaEt0lzIGOfKyv0d0ssRRUnbykbRmlul6y5Pb4rcbI4DATqYHFqM9jtGXqzpN5TV+G3lZridth9IUqknCnVjOSzeq9ZLtayQE4U7WxZAAMYAAAAKula9SFGpOlDXqRSajZu+avks3lcBKy5CNy1RlGOxO/HecOsfpWovQpai5QhH/VbD0TpKp/eYjVXDysl8IKxxON4HjOLk4+Yo4+iV6+umvpdLQ63DZuG4eKbVy6vT2/3c7qpiYJelkudrfE1eM05hI3Tr01LlNN+7G5zMehDk71MTrPlC78ZSLtDoZh11pVJdskl8qT+JThvBHhaks0l/50Xu3f1RbN4jjyKnBP11/wANponStDEynGlNycVfqtLfbas9lu9F2pGz7k/FJ/co6L0VRw7cqNPVk1ZtylJtfzNlxu/07ju9Tkvl6AAElQAQ1MXBKcnNWpqTlZpuKiru6W8A1vSrTHkKVov9tUuo8YrfPu3c3yOf6JYSvVf95KOHg87PrSeeovHN/kgoUKmkMTKTvGGV3upUl1Yrnt77s7rCYaFKEadONoRVkvu+L5kGfm8tUtyZydkty2LckUtJaLpV1apHPdJZTj2P7PIuAkwW9zitIdHq9B69JucY5qUMqkObSz70bXQHSTyjVKtZVHkp7IzfB8H8HyOgND0m0PGtKjCEEqk5tzqJZqlGL1m+Lu42vvJuzKpKWkvub4HilTUYxjHqxSS35JWWe89kGIyACpJgAFiDU6dwMa8NWdKSkr6s11oPu2rij3hMZVVOKqQWulZvO0mstZcL7bczZgDWqs17x8uC+P5Mefy5eH9TYmARTNf5/Ll4f1Hn8uXh/U2NhYWRTNHpSlGvBQqRVk1JNZSVt1+DTaLWDmqcVCnRUYrdFPxfF82bIAtrVWQU8RJ/+N/rtsTgAAAAHipJpZRu+2xBKvU9n9/oWgCCk8TU9T4Mx51U9X5WXgBRQ87qer8rPSxVT1PlZdBIKkcRU9n8GTUqknthbndfQlBAAYAJIJVp7qfxRqNM6JjiM5UdWpuqRXp9j9ZdpvgAm1szUaMoyoUo04U9m16rvOW+T5lnzqp6vysvADXuUPO6nq/KzPnVT1flZeAsiiksVU9T4M9LEVPZ/BlsAUQQqz30/mRMZAJMgAqSYsLAFiBY
                WAAFhYAAWFgABYWAAFhYAAWFgABYWAAFhYAAWFgABYWAAFhYAAWFgABYWAAFhYAAWFgABYWAAAAKg//Z"
              alt=""
              width={250}
              height={250}
            />
            <h5>Compete</h5>
            <h6 style={{ textDecoration: "underline" }}>Time to learn</h6>
          </button>
        </div>
        <div className="col-4  bg-opacity-100 text-center border border-5 p-3 border-white ">
          <button
            className="btn cardss"
            type="click"
            onClick={() => navigate("/Courses")}
          >
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPDxAPEBIQEA8QDRYODw8QDxAPFRASFRIWFxUSFRoYHSggGBslHRUVIjEiJSkrLi4uGB8zODMsNy
                gtLisBCgoKDg0OGxAQGisiICUtLTUtKystLS0rLS0vKystLS0rLS0tLS8tLSstLS0vLS0tLS0tLS0tLS0tLS0tLS0tLf/AABE
                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
                sXVt8E6Oi6tvgrtEuxYojjDQGtAAGgCrRFBJ//2Q=="
              alt=""
              width={250}
              height={250}
            />
            <h5>Compete</h5>
            <h6 style={{ textDecoration: "underline" }}>Time to learn</h6>
          </button>
        </div>
      </div> */}
      {/* COurses */}
      <h1 className="text-center mt-5">Courses</h1>
      <div className="row">
        {b.map((cs, id) => (
          <>
            <div key={id} className="col-lg-3  p-3">
              <div className="card">
                <Link to="Courses">
                  {" "}
                  <img className="card-img-top" src={cs.image} />
                </Link>

                <div className="card-body">
                  <p className="card-text">{cs.content}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="text-center p-4">
        {" "}
        <img
          src="https://assets-global.website-files.com/5ce11396d0cadb67eb2cac0e/618c0d7becb517869289e489_How%20to%20structure%20a%20mentorship%20program.png"
          alt=""
          height="500px"
        />
      </div>
    </div>
  );
}

export default Home;
