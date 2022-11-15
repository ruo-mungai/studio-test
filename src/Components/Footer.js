import React from 'react'

function Footer() {
  return (
    <div id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-info">
                <h3>
                  Prome Records<span>.</span>
                </h3>
                <p>
                
                  
                
                  <strong>Phone:</strong> 0794 509 121
                  <br />
                  <strong>Email:</strong> njogumartinmaingi@gmail.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="https://twitter.com/MartohPro" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100064139377798"
                    class="facebook"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a
                    href="#"
                    class="instagram"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="https://youtube.com/channel/UCmU9jv7pQIBH0TtfH4SVTAg">
                    <i class="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#about">About</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#services">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> Beats Programming
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> Audio Recording
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> Mixing And Mastering
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> Video Shooting And Editing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div class="copyright">
          &copy; 2022 Copyright{" "}
          <strong>
            <span>Prome Records</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer