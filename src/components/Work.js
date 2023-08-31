import React from "react";
import phone from "../assets/img/section/section3.1.png";
import "../components/Work.css";

function Work() {
  return (
    <section className="containerW">
      <div class="containerWork ">
        <div class="row">
          <h5 class="tituloWork text-center">How it Works</h5>
          
          <div class="col waper">
            <div class="parrafo1 text-right">
              <div class="">
              <div class="num11"> 1 </div>
                <p>
                  Download the free iOS app from <br />
                  the App Store. Register as a new <br />
                  Member.
                </p>
              </div>

              <div>
              <div class="num11"> 2 </div>
                <p>
                  Browse by workout type and filter <br />
                  by difficulty level, length, muscles
                  <br /> targeted,trainer location, and <br />
                  language spoken.
                </p>
              </div>

              <div>
                <div class="num11"> 3 </div>
                <p>
                  Preview any video for free, adding <br />
                  those that best fit your criteria to <br />
                  your Favorites.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="foto">
              <img src={phone} />
            </div>
          </div>

          <div class="col">
            <div class="parrafo2">
              <div class="num4">
              <div class="num11"> 5 </div>
                <p>
                  Purchase individual videos for
                  <br /> $2.50 each. A one-time payment
                  <br />
                  gets you unlimited views.
                </p>
              </div>
              <div class="num5">
              <div class="num11"> 6 </div>
                <p>
                  Rank and review completed <br />
                  workouts, read more about the
                  <br />
                  trainers, and recommend <br />
                  your favorites to friends. Easily <br />
                  share your accomplishments on <br />
                  social media for extra <br />
                  props.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Work;
