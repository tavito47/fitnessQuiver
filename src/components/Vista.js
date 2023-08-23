import React from "react";
import "./Vista.css";
import img1 from "../assets/img/section/section1.1.png";
import img2 from "../assets/img/section/section1.2.png";
import img3 from "../assets/img/section/section1.3.png";
function Vista() {
  return (
    <section className="contenido">
      <div className="containerV text-center">
        <div className="row">
          <div className="col-12 justific-content-center">

            <div className="container1">
              <div className="cuadro">
                <div className="fox">
                  <a>
                    <img className="cs" src={img1} />
                  </a>
                </div>

                <div className="subT">
                  <h5>Dowload & Register</h5>
                </div>
                <p>Get the free iPhone app <br/>and sign up</p>
              </div>
            </div>

            <div className="container1">
              <div >
                <div>
                  <a >
                    <img className="cs" src={img2} />
                  </a>
                </div>
                <div className="subT">
                  <h5>Browse Workouts</h5>
                </div>
                <p>Filter, favorite, and get a free preview</p>
              </div>
            </div>

            <div className="container1">
              <div className="cuadro">
                <div>
                  <a>
                    <img className="cs" src={img3} />
                  </a>
                </div>
                <div className="subT">
                  <h5>Crush It</h5>
                </div>
                <p>Buy only the workouts you want <br/> and get ready to crush it</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vista;
