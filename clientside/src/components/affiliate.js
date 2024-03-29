import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Affiliate() {
    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;
    
  return (
    <body data-spy="scroll" data-offset="300">
      <Navbar />
      <header class="pr-header-sec">
        <div class="pr-site-container">
          <div class="v-hero-sec-txt">
            <h1>Affiliate Program</h1>
            <p>
              Invite friends to trade on AAfx Trading Investment to earn
              referral commission of 6% to 40% of their investment. When your
              friend becomes a AAfx Trading Investment affiliate, you will
              receive commissions their investment.
            </p>
            <a href="login.html" style={{margin:"20px"}}>Get started</a>
          </div>
        </div>
      </header>

      <section class="abbbt-maii-sec colorAdjust">
        <div class="pr-site-container">
          <div class="services-sec-header">
            <h2 class="h2-header">How to earn commissions?</h2>
          </div>
          <div class="services-sec-grid padded">
            <div class="services-sec-card">
              <img src="assets/img/icon-affiliate.svg" />
              <h3>Apply to become an affiliate</h3>
              <p>
                Only registered user in AAfx Trading Investment can apply to
                become an affiliate.
              </p>
            </div>

            <div class="services-sec-card">
              <img src="assets/img/icon-promote.svg" />
              <h3>Promote AAfx Trading Investment</h3>
              <p>
                Share your referral link to your community, followers, or other
                channels.
              </p>
            </div>

            <div class="services-sec-card">
              <img src="assets/img/icon-currency.svg" />
              <h3>Claim commissions</h3>
              <p>
                New users who register and trade via your referral link will
                earn you commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bec-sec">
        <div class="pr-site-container">
          <div class="bec-sec-grid">
            <h3>
              Become a AAfx Trading Investment Affiliate to Earn High
              Commissions
            </h3>
            <a href="/register">Get started</a>
          </div>
        </div>
      </section>

      <section class="services-sec">
        <div class="pr-site-container">
          <div class="services-sec-header">
            <h2 class="h2-header">
              Why become a AAfx Trading Investment affiliate?
            </h2>
          </div>
          <div class="services-sec-grid padded sssend">
            <div class="services-sec-card">
              <h3>Commissions</h3>
              <p>
                Commission of 6% to 40% of trading fees \distributed daily, with
                long-term referral relationships
              </p>
            </div>

            <div class="services-sec-card">
              <h3>Transparent Referral Scheme</h3>
              <p>
                Visualized referral data (transparent data with support for
                multi-channel management)
              </p>
            </div>

            <div class="services-sec-card">
              <h3>Premium Brand</h3>
              <p>
                AAfx Trading Investment premium brand helps attract more
                followers
              </p>
            </div>

            <div class="services-sec-card">
              <h3>Second-Level Commissions</h3>
              <p>Unique commission system (for referral bonuses)</p>
            </div>
          </div>
        </div>
      </section>

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

      <script src="https://www.cryptohopper.com/widgets/js/script"></script>
      <script src="assets/js/jquery-3.3.1.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery.easing.1.3.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/bootstrap-datepicker.js"></script>
      <script src="assets/js/loader.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/main.js"></script>
      <script src="assets/js/life-chart.js"></script>

      <script
        type="text/javascript"
        src="../translate.google.com/translate_a/elementa0d8.js?cb=googleTranslateElementInit"
      ></script>
    </body>
  );
}
