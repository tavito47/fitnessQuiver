import React from "react";
import phone from "../assets/img/section/section3.1.png";
import '../components/Work.css'

function Work() {
  return (
    <section>
      <div class="containerWork text-center">
        <div class="row">
          <h5 class="titulo">How it Works</h5>
          <div class="col">
            <div class="parrafo1">
              <div>
                <p>
                  Download the free iOS app from the App Store. Register as a
                  new Member.
                </p>
              </div>

              <div>
                <p>
                  Browse by workout type and filter by difficulty level, length,
                  muscles targeted,trainer location, and language spoken.
                </p>
              </div>

              <div>
                <p>
                  Preview any video for free, adding those that best fit your
                  criteria to your Favorites.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <img src={phone} />
            </div>
          </div>
          <div class="col">
            <div class="parrafo2">
                <div class="num4">
                <p>
                    Purchase individual videos for $2.50 each. A one-time payment
                    gets you unlimited views.
                </p>
                </div>
                <div class="num5">
                <p>
                    Rank and review completed workouts, read more about the
                    trainers, and recommend your favorites to friends. Easily share
                    your accomplishments on social media for extra props.
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
