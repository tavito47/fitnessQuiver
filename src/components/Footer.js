import React from "react";
import "./Footer.css";
import pieLogo from "../assets/img/footer/logo.png";
import fb from "../assets/img/footer/facebook.png";
import ins from "../assets/img/footer/instagram.png";
import tw from "../assets/img/footer/twitter.png";

function Footer() {
  return (
    <section class="footerF">
      <div className="contaniner ">
        <div className="row text-center ">

          <div className="col-6">
            <div className="logoF">
                <img src={pieLogo} />
              <p class="text-white">2017</p>
            </div>
          </div>
          <div className="col-6">
            <div className="izq">
              <p class="text-white">Follow us @quiverfitness</p>
              <a>
                <img src={fb} />
                <img src={ins} />
                <img src={tw} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
