import React from 'react'
import './Main.css'


function About() {
  return (
    <div>
      <br />
      <br />
      <section id="about" class="about">
        <div class="section-title">
          <h2>About us</h2>
         
        </div>

        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img
                src="https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=600"
                class="img-fluid"
                alt=""
              />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 style={{ color: "red" }}>Prome Records Kenya</h3>
              <p class="fst-italic">
                We are a gospel entity majoring in gospel music production. We
                are dedicated in nurturing and growing new talents through our
                best quality services. <br></br>We aim at ensuring that our
                customers gain relevant knowledge and information to readily
                equip them to serve in music ministry.
                <br></br>
                <br></br>
                Our team of highly qualified staff work tirelessly to ensure
                quality production which is satisfactory to the ears and hearts
                of the audience.
              </p>
              {/* <ul>
                <li>
                  <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About