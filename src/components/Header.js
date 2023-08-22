import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/navbar/logo.png";
import apple from "../assets/img/navbar/appApple.png";
export default function Header() {
  return (
    <>
      {/*  <div class="navbar">
      <div class="row"> */}
      <nav class="navbar navbar-expand-lg back" >
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            <img src={logo} alt="FitnessQuiver"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Members
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                  Trainers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*   </div>
    </div> */}

      <section id="banner">
        <div class="container">
          <div class="row"></div>
          <div class="row">
            <div class="col-6" typeof="text">
              <div id="revo">
                <div>
                  <h1 className="text-white">
                    Revolutionizing fitness. <br /> One instructional video{" "}
                    <br />
                    at a time
                  </h1>
                  <div id="apple">
                    <a class="navbar-brand" href="!#">
                      <img src={apple} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6"></div>
          </div>
        </div>
      </section>

      
    </>
  );
}
