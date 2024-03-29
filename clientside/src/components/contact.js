import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Contact() {
    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;
  return (
    <body data-spy="scroll" data-offset="300">
      <Navbar />
      <header class="site-header">
        <div class="pr-site-container">
          <div class="hero-txt">
            <div class="hero-txt-main">
              <div class="container-fluid"  style={{marginTop: "30px"}}>
                <div class="row" id="msgAlert">
                  <div class="col-lg-12"></div>
                </div>
              </div>

              {/* {
                (document.getElementById("msgAlertBtn").onclick = function () {
                  setTimeout(function () {
                    ("#msgAlert").slideUp();
                  }, 10000);
                })
              } */}

              <div class="form-container">
                <div class="form-header">
                  <h3>Message Us</h3>
                </div>
                <form class="site-form" action="" method="post">
                  <input
                    type="hidden"
                    name="_token"
                    value="1bViCGVOMuaLeFbeMifjWu2WADF4uvlFyz5WeY5r"
                  />
                  <div class="form-input">
                    <input
                      type="text"
                      name="name"
                      class=""
                      placeholder="Name"
                      required
                      autofocus
                    />
                  </div>
                  <div class="form-input">
                    <input
                      type="email"
                      name="email"
                      class=""
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div class="form-input">
                    <textarea
                     style={{color: "black"}}
                      name="message"
                      id="message"
                      class=""
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div class="form-input">
                    <input
                      type="submit"
                      name="btnContact"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="hero-banner"></div>
        </div>
      </header>

      <a target="_blank" href="https://wa.me/86 187 6802 2391/">
        <svg viewBox="0 0 32 32" class="whatsapp-ico">
          <path
            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </a>

      <a
        target="_blank"
        href="https://www.instagram.com/chuahalisa8901?igsh=c3F6dGp6c2Zmejg4&utm_source=qr"
        className="TellG_hh"
      >
        <img src="https://i.imgur.com/Uk7g1uF.png" />
      </a>
      <a
        target="_blank"
        href="https://t.me/annalisatrade"
        className="TellG_hh"
        style={{
          transform: "translateY(-70px)",
        }}
      >
        <img src="https://i.imgur.com/iVJ1Cuq.png" />
      </a>

      <Footer />

      <script src="assets/js/jquery-3.3.1.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery.easing.1.3.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/bootstrap-datepicker.js"></script>
      <script src="assets/js/loader.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/main.js"></script>
      <script src="assets/js/life-chart.js"></script>

      <script src="https://www.cryptohopper.com/widgets/js/script"></script>

      <script
        type="text/javascript"
        src="../translate.google.com/translate_a/elementa0d8.js?cb=googleTranslateElementInit"
      ></script>
    </body>
  );
}
