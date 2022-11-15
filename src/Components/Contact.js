import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
 const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();
      
     emailjs
       .sendForm(
         "service_pb8h4hf",
         "template_6dj08w6",
         form.current,
         "Ln-PPFGiDfi_bT44u"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
   };

  return (
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contact</h2>
          <p>
            For any inquiry or feedback, you can send us an email or feel free
            to call us.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ align_items: "center" }}
        >
          <div class=" col-xl-8">
            <form ref={form}>
              <div class="row">
                <div class="col form-group">
                  <input
                    type="text"
                    name="user_name"
                    class="form-control"
                    id="user_name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="user_email"
                    id="user_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="error-message"></div>
              </div>
              <div class="text-center">
                <button type="submit" onClick={sendEmail}>
                  Send Message
                </button>
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
