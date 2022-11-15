import React from 'react'

function Count() {
  return (
    <section id="counts" class="counts">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Our Work</h2>
        </div>
        <div class="row no-gutters">
          <div
            class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="img-fluid"
              alt=""
            />
          </div>
          <div
            class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div
              class="content d-flex flex-column justify-content-center"
              style={{ marginLeft: "30px" }}
            >
              <h3 style={{ color: "red" }}>Our Achievements</h3>
              <p>
                For years we have managed to work on a number of music projects
              </p>
              <br></br>
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-emoji-smile"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="65"
                      data-purecounter-duration="2"
                      class="purecounter"
                    >
                      65
                    </span>
                    <p>
                      <strong>Happy Clients</strong> <br></br>
                    </p>
                    <br></br>
                    <br></br>
                  </div>
                </div>
                <br></br>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-journal-richtext"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="85"
                      data-purecounter-duration="2"
                      class="purecounter"
                    >
                      85
                    </span>
                    <p>
                      <strong>Projects</strong> <br />
                    </p>
                    <br></br>
                    <br></br>
                  </div>
                </div>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-clock"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="35"
                      data-purecounter-duration="4"
                      class="purecounter"
                    >
                      35
                    </span>
                    <p>
                      <strong>Years of experience</strong>
                      <br />
                    </p>
                    <br></br>
                    <br></br>
                  </div>
                </div>{" "}
                {""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count