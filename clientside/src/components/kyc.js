import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function Kyc({dashboardUser}) {

   //variables
   const windowName = process.env.REACT_APP_SERVER_NAME;

  //userId
  const { id } = useParams();

  //settings for screen
  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);

  //useEffects
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setShowNav(false);
        setShowNavIcon(true);
      } else {
        setShowNav(true);
        setShowNavIcon(false);
      }
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set initial state based on screen width
    handleResize();

    // Clean up by removing event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // first of if shownav state should be true so the navbar will show , then if the max width is the small size it should set to false , now  there is a button that will be doing the opposite of that

  const openNav = () => {
    setShowNav(!shownav);
    console.log(shownav);
  };

  return (
    <body>
      <div class="darkbody"></div>
      <div class="noti-dark">
        <div class="notif-d">
          <div class="not-flex">
            <p>Notifications</p>
            <i class="ti-close"></i>
          </div>

          <div class="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 Hour Ago</span>
          </div>
          <div class="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 month Ago</span>
          </div>
          <div class="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 month Ago</span>
          </div>
          <div class="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 Hour Ago</span>
          </div>
        </div>
      </div>
      <div class="body-grid">
        {shownav && (
          <section class="adjust">
            {showNavIcon && (
              <i
                class="fa fa-bars"
                aria-hidden="true"
                onClick={openNav}
                style={{ padding: "10px" }}
              ></i>
            )}
            <div class="dash-img">
              <img src="https://i.imgur.com/LTkw9xS.jpeg" alt="" />
              <div class="text-greetings">
              <h1>{dashboardUser.username}</h1>
                <i class="icon-bell">
                </i>
              </div>
            </div>
            <ul>
              <li>
                <i class="ti-dashboard"></i>
                <Link to={`/dashboard/${id}`}>Dashboard</Link>
              </li>
              <li class="notif-a">
                <i class="ti-wallet"></i>
                <Link to={`/withdrawal/${id}`}>Withdrawal</Link>
              </li>
              <li>
                <i class="ti-briefcase"></i>
                <Link to={`/deposit/${id}`}>Deposit</Link>
              </li>
              <li>
                <i class="ti-stats-up"></i>
                <Link to={`/invest/${id}`}>Invest</Link>
              </li>

              <li class="notif-a">
                <i class="icon-people"></i>
                <Link to={`/referral/${id}`}>Referall</Link>
              </li>
              <li class="active-t">
                <i class="ti-user"></i>
                <Link to={`/kyc/${id}`}>My Account-KYC</Link>
              </li>
              <li>
                <i class="ti-share-alt"></i>
                <a href="/">Logout</a>
              </li>
            </ul>
          </section>
        )}
        <div class="main-dashboard-body">
          <div class="dash-heading">
            <div class="img-us">
              <div class="logo-na disr">
                <i class="fa fa-bars" aria-hidden="true" onClick={openNav}></i>
              </div>
              <img src="https://i.imgur.com/LTkw9xS.jpeg" alt="" />
              <p> Welcome Back ! </p>
            </div>
            <div class="dash-buttons">
              <p>
                <i class="icon-location"></i>United kingdom
              </p>
              <a href="/">
                <i class="ti-home"></i> Home Page
              </a>
            </div>
          </div>
          <div class="boo-boo">
            <div class="heading-text">
              <div class="sniper">
                <h1>KYC</h1>
                <p>Verified</p>
              </div>
            </div>
            <div class="mid-section">
              <div class="user-img-inp">
                <p>IMAGE</p>
              </div>
              <div class="user-form">
                <div class="user-inp">
                  <p>Email:</p>
                  <input type="text" value={dashboardUser.email} />
                </div>
                <div class="user-inp">
                  <p>First Name:</p>
                  <input type="text" value={dashboardUser.firstName} />
                </div>
                <div class="user-inp">
                  <p>Last Name:</p>
                  <input type="text" value={dashboardUser.lastName} />
                </div>
                <div class="user-inp">
                  <p>Address:</p>
                  <input type="text" value={dashboardUser.address} />
                </div>
                <div class="user-inp">
                  <p>State :</p>
                  <input type="text" value={dashboardUser.state} />
                </div>
                <div class="user-inp">
                  <p>Country :</p>
                  <input type="text" value={dashboardUser.country} />
                </div>
                <div class="user-inp">
                  <p>ZIP Code :</p>
                  <input type="text" value={dashboardUser.zipcode} />
                </div>
                <div class="btn-submit">
                  <a >Save</a>
                </div>
                <div class="main-kyc">
                  <div class="kc-header">
                    <h1>KYC-Verification</h1>
                    <p>Upload Your Identitiy Card</p>
                  </div>
                  <div class="kyc-require">
                    <p>
                      Below are the list of acceptable ID cards. (Max size 1MB)
                    </p>
                    <span>
                      <p>Drivers license</p>
                      <p>.</p>
                    </span>
                    <span>
                      <p>Students ID</p>
                      <p>.</p>
                    </span>
                    <span>
                      <p>Voters Card</p>
                      <p>.</p>
                    </span>
                    <span>
                      <p>Working ID</p>
                      <p>.</p>
                    </span>
                    <span>
                      <p>National ID</p>
                      <p>.</p>
                    </span>
                  </div>
                  <div class="upload-cards">
                    <div class="front-ops">
                      <div class="frt">
                        <i class="ti-download"></i>
                        <p>Select ID Front</p>
                      </div>
                      <img src="assets/img/placeholder.png" alt="" />
                    </div>
                    <div class="front-ops">
                      <div class="frt">
                        <i class="ti-download"></i>
                        <p>Select ID Back</p>
                      </div>
                      <img src="assets/img/placeholder.png" alt="" />
                    </div>
                    <div class="btn-submit">
                      <a href="#">Save</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-dash">
            <p>Copyright 2024 AAFX.com - All rights reserved</p>
          </div>
        </div>
      </div>

      <script src="https://www.cryptohopper.com/widgets/js/script"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="../afxtrading/assets/js/dashboard.js"></script>
      <script src="../afxtrading/assets/js/jquery-3.6.4.min.js"></script>
      <script src="../afxtrading/assets/js/owl.carousel.min.js"></script>
      <script src="../afxtrading/assets/js/main2.js"></script>
      <script src="../afxtrading/assets/js/bootstrap.bundle.min.js"></script>
      <script>AOS.init();</script>
    </body>
  );
}
