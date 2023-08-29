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
        <div className="row">
          <div className="columna1 col">
            <div className="logoF">
              <img className="logoFF" src={pieLogo} />
            </div>
            <div>
              <p class="A2017">2017</p>
            </div>
          </div>

          <div className="columna2 col">
            <div className="izq">
              <p class="colores">Follow us @quiverfitness</p>
              <a className="iconos">
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
