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
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="FitnessQuiver" width="70" height="24" />
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
                  <h2 className="text-white">
                    Revolutionizing fitness. <br /> One instructional video{" "}
                    <br />
                    at a time
                  </h2>
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

      <p>
        /SF Pro Display Regular 16 
        /SF Pro Display Bold 42 
        /SF Pro Display LIGHT
        14 SF Pro Display Medium 16 
        /***NAVBAR */ 

        /SF Pro Display Regular 16
        Contact
         
         
         
         

        /SF Pro Display Bold 42
        Revolutionizing fitness. One instructional video at a time.

        /******************************SECTION 1 */ 
        /SF Pro Display Bold 20
        Dowload & Register Browse Workouts Crush It 

        /SF Pro Display LIGHT 14 Get
        Get the free iPhone app and sign up 
        Filter, favorite, and get a free preview
        Buy only the workouts you want and get ready to crush it

        /******************************SECTION 2 */ 
        /SF Pro Display Bold 16
        About /SF Pro Display Regular 16 Founded in 2017, Quiver Fitness helps
        everyone from the occasional gym-goer to the fitness enthusiast train
        better and more efficiently. Frustrated by subscription sites with bland
        content, super expensive personal trainers, and the abundance of
        ineffective free videos online, we created the first peer-to-peer
        searchable fitness platform that features instructional content from
        Trainers around the world. We make it simple for Members to browse,
        discover, pay, and start working out. Members Our catalog of
        high-quality instructional fitness videos is for everyone from the
        fitness novice to the experienced athlete. We work with the best
        Personal Trainers around the world to ensure that each video yields
        results. Whether you want to target a specific muscle group or are in
        need of a combination circuit, Quiver Fitness makes it easy to find what
        you’re looking for. 
        /*******************************SECTION 3 *
        / SF ProDisplay Bold 20 
        How it Works 

        /SF Pro Display Regular 16 
        Download the
        free iOS app from the App Store. Register as a new Member. Browse by
        workout type and filter by difficulty level, length, muscles targeted,
        trainer location, and language spoken. Preview any video for free,
        adding those that best fit your criteria to your Favorites. Purchase
        individual videos for $2.50 each. A one-time payment gets you unlimited
        views. Rank and review completed workouts, read more about the trainers,
        and recommend your favorites to friends. Easily share your
        accomplishments on social media for extra props.
        /*******************************SECTION 4 */ /SF Pro Display Bold 20
        Trainers /SF Pro Display Regular 16 We’ve created the first platform
        that allows Personal Trainers to showcase their talent and get paid
        directly for their work. /SF Pro Display Bold 20 Become a Trainer /SF
        Pro Display Regular 14 Email us at info@quiverfitness.com and tell us
        more about yourself and your experience in the fitness industry. Please
        include links to relevant online content. Once you receive your
        invitation to join Quiver Fitness, set up a Trainer account. Personalize
        your profile information with your gym or company name, website, bio,
        location, and social media accounts. Upload instructional video content,
        filling in all required fields. Start to grow your following and your
        business right away. /************************************SECTION 5 */
        /SF Pro Display Bold 20 Pricing /SF Pro Display Bold 20 Members Trainers
        Basic Trainers Plus /SF Pro Display light 16 Browse and preview. Upload
        up to 50 videos per month Upload up to 100 videos Buy any workout you
        per month. Get your like for $ 2.50. workouts featured
        /*********************************SECTION 6 */ /SF Pro Display Bold 20
        Frequently Asqued Questions /SF Pro Display Medium 16 What devices is
        Quiver Fitness currently available on? When I purchase a video, do I
        only get to see it one time? How do I sign up to be a Personal Trainer
        on Quiver Fitness? How much can I charge for my videos on Quiver
        Fitness? When will I receive payment? Do you charge a monthly membership
        fee? How can I search for specific workouts? How do I post workout
        videos and make sure they’re accurately searchable?
        /*****************************SECTION 7 */ /SF Pro Display Bold 20
        Contact /SF Pro Display Regular 16 We want to hear from you! Whether
        you’ve got more questions, are interested in becoming a Trainer, or want
        to say hello, send us an email at info@quiverfitness.com or follow us on
        Facebook, Instagram, and Twitter: @quiverfitness.
      </p>
    </>
  );
}
