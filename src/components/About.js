import React from "react";
import members from "../assets/img/section/section2.1.png";
function About() {
  return (
    <section>
      <div className="containerAb text-center">
        <div className="row">
          <div className="col">
            <div className="derAbout">
              <h5 class="text-start ">About</h5>
              <p class="parrafoIzq">
                Founded in 2017, Quiver Fitness helps everyone from the
                occasional gym-goer to the fitness enthusiast train better and
                more efficiently. Frustrated by subscription sites with bland
                content, super expensive personal trainers, and the abundance of
                ineffective free videos online, we created the first
                peer-to-peer searchable fitness platform that features
                instructional content from Trainers around the world. We make it
                simple for Members to browse, discover, pay, and start working
                out.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="izqAbout">
              <h5 class="text-start text-white">Members</h5>
              <p class="parrafoDer">
                Our catalog of high-quality instructional fitness videos is for
                everyone from the fitness novice to the experienced athlete. We
                work with the best Personal Trainers around the world to ensure
                that each video yields results. Whether you want to target a
                specific muscle group or are in need of a combination circuit,
                Quiver Fitness makes it easy to find what you’re looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
