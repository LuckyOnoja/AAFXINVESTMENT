import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Referall({dashboardUser}) {
  //userId
  const { id } = useParams();

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  const myElement = document.getElementById("mot");

  // Add a click event listener to the element
  //settings for screen
  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [referralLink, setReferralLink] = useState();
  const [referredUser, setReferredUser] = useState([
    {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      country: "",
      zipcode: "",
      username: "",
      password: "",
    },
  ]);

  //useEffects
  useEffect(() => {
    const fetchReferralDetails = async () => {
      try {
        const referralDetails = await axios.get(
          `${windowName}user/referralData?_id=${id}`
        );

        const { referralLink, referredUsers } = referralDetails.data;

        setReferralLink(referralLink);
        setReferredUser(referredUsers);
        console.log(referredUsers);
      } catch (error) {
        console.error("Error Fetching Referral details");
      }
    };

    fetchReferralDetails();
  }, [id]);

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
              <li class="notif-a  active-t">
                <i class="icon-people"></i>
                <Link to={`/referral/${id}`}>Referall</Link>
              </li>
              <li>
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
              <a href="/l">
                <i class="ti-home"></i> Home Page
              </a>
            </div>
          </div>
          <div class="boo-boo">
            <div class="heading-text">
              <h1>Referral</h1>
              <div class="hd-btn"></div>
            </div>
            <div class="wallet-trans">
              <header>Referrals</header>
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Bonus</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {referredUser.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.username}</td>
                      <td>$50</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="refer-and-earn">
              <h1>Refer Us & Earn</h1>
              <p>Copy your referal link below</p>
              <div class="ref-div">
                <p>{referralLink}</p>
                <i class="ti-files"></i>
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
