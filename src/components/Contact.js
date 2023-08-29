import "./Contact.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Contact() {
  return (
    <section class="containerContact">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="contact">
              <h2 class="tituloCot">Contact</h2>
            </div>
            <div >
              <span class="parrafoCo">
                We want to hear from you! Whether you’ve got more questions, are
                interested in becoming a Trainer, or want to say hello, send us
                an email at info@quiverfitness.com or follow us on Facebook,
                Instagram, and Twitter: @quiverfitness.
              </span>
            </div>
          </div>
          <div class="col">
            <div class="boton">
              <button class="botonOfi">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
