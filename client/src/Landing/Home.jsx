import React, { useRef, useEffect } from "react";
import Header from "../Component/navbar";
import bgImage from "../assets/bg-image.png";
import bgVideo from "../assets/bg-video.mp4";
import people from "../assets/people.jpg";
import people1 from "../assets/people1.jpg";
import people2 from "../assets/people2.jpg";
import people3 from "../assets/people3.jpg";


export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnded = () => {
      videoElement.play(); // Replay if it stops
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);
  return (
    <>
      <Header />

      {/* Top Section */}

      <div className="top-section">
        <div className="container">
          <div className="position-relative">
            <h1>
              Fincy helps hundreds of thousands of people{" "}
              <b>worldwide to get their money into shape.</b>
            </h1>
            <div className="bg-image">
              <img src={bgImage} alt="background Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="promo">
        <div className="container">
          <div className="d-flex flex-column gap-3 align-items-center">
            <h3>Get started with Fincy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <video
            className="w-100"
            ref={videoRef}
            src={bgVideo}
            autoPlay
            loop
            muted
          ></video>

          <div className="d-flex flex-column gap-3 align-items-center mt-5">
            <b>Consectetur adipiscing elit, sed do eiusmod tempor</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <a href="#pricing">Explore Pricing</a>
          </div>
        </div>
      </div>

      <div className="info py-5">
        <div className="container-fluid">
          <div className="row gy-4">
            {[200000, "$3.5 billion", "10,000+"].map((item, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="card border-0 shadow-lg rounded-5">
                  <div className="card-body py-4">
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                      <h2 className="fw-bolder">{item}</h2>
                      <p className="text-center">
                        Lorem ipsum dolor sit ametconsectetur adipiscing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="about">
        <div className="about">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <h3 className="mb-5 fw-bold">
                  In Fincy, we all come to work every day to enable people make
                  smart decisions about their money every day.
                </h3>
                <p>
                  We believe that managing finance should be as effortless as
                  shopping online. It should be done anytime, anywhere and in
                  few clicks.
                </p>
                <p>
                  What started as a simple expense tracker for a small group of
                  people has grown into personal finance app that brings beauty
                  to finance of hundreds of thousands users from almost every
                  country in the world.
                </p>
              </div>
              <div className="col-lg-6">
                <img src={people} alt="people" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="team">
          <div className="container-fluid">
            <h2 className="fw-bolder text-center">MEET OUR TEAM</h2>
            <div className="row mt-5">
              <div className="col-lg-3">
                <div className="card border-0 shadow text-center rounded-4">
                  <div className="card-body">
                    <img src={people1} alt="people1" className="w-100" />
                    <h3 className="mt-3">Jenna</h3>
                    <b>CEO</b>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-0 shadow text-center rounded-4">
                  <div className="card-body">
                    <img src={people2} alt="people1" className="w-100" />
                    <h3 className="mt-3">Chris</h3>
                    <b>CTO</b>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-0 shadow text-center rounded-4">
                  <div className="card-body">
                    <img src={people3} alt="people1" className="w-100" />
                    <h3 className="mt-3">Andrew</h3>
                    <b>MD</b>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-0 shadow text-center rounded-4">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-2 justify-content-center h-100">
                      <h2 className="text-success">Want to know us more</h2>
                      <a href="#" className="text-decoration-none text-dark">
                        {" "}
                        Sign In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="our-work">
          
        </div>
      </section>
    </>
  );
}
