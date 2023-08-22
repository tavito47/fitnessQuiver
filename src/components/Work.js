import React from "react";
import phone from "../assets/img/section/section3.1.png";
import '../components/Work.css'

function Work() {
  return (
    <section className="containerW">
      <div class="containerWork ">
        <div class="row">
          <h5 class="titulo text-center">How it Works</h5>
          <div class="col">
            <div class="parrafo1 text-right">
              <div class="">
                <p>
                  Download the free iOS app from <br/>
                  the App Store. Register as a
                  new <br/>Member.
                </p>
              </div>

              <div>
                <p>
                  Browse by workout type and filter <br/>by difficulty level, length,
                  muscles<br/> targeted,trainer location, and <br/>language spoken.
                </p>
              </div>

              <div>
                <p>
                  Preview any video for free, adding <br/>those that best fit your
                  criteria to <br/>your Favorites.
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
                <p>
                    Purchase individual videos for<br/> $2.50 each. A one-time payment<br/>
                    gets you unlimited views.
                </p>
                </div>
                <div class="num5">
                <p>
                    Rank and review completed <br/>workouts, read more about the<br/>
                    trainers, and recommend <br/>your favorites to friends. Easily <br/>share
                    your accomplishments on <br/>social media for extra <br/>props.
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
