import React from "react";
import "../components/Pricing.css";
import { Button } from "bootstrap";

function Pricing() {
  return (
    <section class="todo">
      <div class="container text-center">
        <div class="row align-items-center petito">
          <div>
            <h4 class="tituloPricing">Pricing</h4>
          </div>
          <div class="col cuadors">
            <div class="cuadro1">
              <div class="textosPricing">
                <div class="subTitulo">
                  <h4 class="members">Members</h4>
                </div>
                <span class="spamm">FREE</span>
                <div class="lineas"></div>
                <p class="parrafos">
                  Browse and preview.
                  <br /> Buy any workout you
                  <br />like for $2.50.
                </p>
                <div class="boton text-center">
                  <button>GET THE APP</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col cuadors">
            <div class="cuadro1">
              <div class="textosPricing">
                <div class="subTitulo">
                  <h4> Trainers Basic</h4>
                </div>
                <span class="spamm">$4.99</span>
                <div class="lineas"></div>
                <p class="parrafos">
                  Browse and preview.
                  <br /> Buy any workout you
                  <br />
                  like for $2.50.
                </p>
                <div class="boton text-center">
                  <button>JOIN NOW</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col cuadors">
            <div class="cuadro1">
              <div class="textosPricing">
                <div class="subTitulo">
                  <h4> Trainers Basic</h4>
                </div>
                <span class="spamm">$4.99</span>
                <div class="lineas"></div>
                <p class="parrafos">
                  Browse and preview.
                  <br /> Buy any workout you
                  <br />
                  like for $2.50.
                </p>
                <div class="boton text-center">
                  <button>JOIN NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
