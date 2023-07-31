import React from "react";

import img1 from "../assets/img/section/section1.1.png";
import img2 from "../assets/img/section/section1.2.png";
import img3 from "../assets/img/section/section1.3.png";
function Vista() {
  return (
    <section>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 justific-content-center">
            <div className="container1">
              <div>
                <div className="fox">
                  <a>
                    <img src={img1} />
                  </a>
                </div>

                <div>
                  <h5>Dowload & Register</h5>
                </div>
                <p>Get the free iPhone app and sign up</p>
              </div>
            </div>

            <div className="container1">
            <div>
              <div>
                <a>
                  <img src={img2} />
                </a>
              </div>
              <div>
                <h5>Dowload & Register</h5>
              </div>
              <p>Get the free iPhone app and sign up</p>
              </div>
            </div>

            <div className="container1">
            <div>
              <div>
                <a>
                  <img src={img3} />
                </a>
              </div>
              <div>
                <h5>Dowload & Register</h5>
              </div>
              <p>Get the free iPhone app and sign up</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="col">
            <div class="container2">
              <a>
                <img src={img2} />
              </a>
              <div>
                <h5>Browse Workouts</h5>
              </div>
              <p>Filter, favorite, and get a free preview</p>
            </div>
          </div>
          <div class="col">
            <div class="container3">
              <a>
                <img src={img3} />
              </a>
              <div>
                <h5>Crush It</h5>
              </div>
              <p>Buy only the workouts you want and get ready to crush it</p>
            </div>
          </div> */}
    </section>
  );
}

export default Vista;
