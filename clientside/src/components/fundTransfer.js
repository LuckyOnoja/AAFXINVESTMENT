import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function FundTransafer({dashboardUser}) {

    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;
    
  //userId
  const { id } = useParams();

  //settings for screen
  //states
  const [shownav, setShowNav] = useState(true);

  //useEffects
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
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
            {
              <i
                class="fa fa-bars"
                aria-hidden="true"
                onClick={openNav}
                style={{ padding: "10px" }}
              ></i>
            }
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
              <li class="notif-a ">
                <i class="ti-wallet"></i>
                <Link to={`/withdrawal/${id}`}>Withdrawal</Link>
              </li>
              <li>
                <i class="ti-briefcase "></i>
                <Link to={`/deposit/${id}`}>Deposit</Link>
              </li>
              <li class="active-t">
                <i class="ti-exchange-vertical"></i>
                <Link to={`/fundTransfer/${id}`}>Fund Transfer</Link>
              </li>
              <li>
                <i class="ti-stats-up"></i>
                <Link to={`/invest/${id}`}>Invest</Link>
              </li>
              <li class="notif-a">
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
              <a href="#">
                <i class="ti-home"></i> Home Padge
              </a>
            </div>
          </div>
          <div class="boo-boo">
            <div class="main-wits">
              <div class="new-withdrawal-casing">
                <div class="head-wt">
                  <p>Transfer</p>
                  <i class="ti-close" onclick="withdraw()"></i>
                </div>
                <span>
                  <div class="sells">
                    <label for="mySelect">Transfer Form</label>
                    <select id="mySelect">
                      <option value="Select Option"> Select Option</option>

                      <option value="USDT">USDT</option>
                    </select>
                  </div>
                  <div class="sells">
                    <p>Balance</p>
                    <div class="inps">
                      <p>USD</p>
                      <input type="text" disabled value="30,000 " />
                    </div>
                  </div>
                </span>
                <div class="sells">
                  <p>Amount</p>
                  <div class="inps">
                    <p>USD</p>

                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div class="sells">
                  <p>User Email</p>
                  <div class="inps">
                    <p>TO</p>
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div class="wit-buts">
                  <a href="#">Subbmit</a>
                  <a href="#" onclick="withdraw()">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
            <div class="heading-text">
              <h1>Fund Transfer</h1>
              <div class="hd-btn">
                <a href="#" onclick="withdraw()">
                  New Transfer
                </a>
              </div>
            </div>
            <div class="wallet-trans">
              <header>Transfer History</header>
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Details</th>

                    <th>From</th>
                    <th>To</th>
                    <th>Amount(USD)</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Transfer</td>

                    <td>Okoro Richard</td>
                    <td>Emmanuel Okwonkwo</td>
                    <td>$6550</td>
                    <td>Wed. 28 Jun. 2023</td>
                    <td>
                      <button class="a-btn aproved">processed</button>
                    </td>
                    <td>
                      <i class="icon-trash"></i>Delete
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Transfer</td>

                    <td>Okoro Richard</td>
                    <td>Emmanuel Okwonkwo</td>
                    <td>$3600</td>
                    <td>Fri. 30 Jun. 2023</td>
                    <td>
                      <button class="a-btn aproved">processed</button>
                    </td>
                    <td>
                      <i class="icon-trash"></i>Delete
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Transfer</td>

                    <td>Okoro Richard</td>
                    <td>Emmanuel Okwonkwo</td>
                    <td>$5000</td>
                    <td>Tue. 31 Oct. 2023</td>
                    <td>
                      <button class="a-btn pedning">pending</button>
                    </td>
                    <td>
                      <i class="icon-trash"></i>Delete
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Transfer</td>

                    <td>Okoro Richard</td>
                    <td>Emmanuel Okwonkwo</td>
                    <td>$10000</td>
                    <td>Wed. 01 Nov. 2023</td>
                    <td>
                      <button class="a-btn declined">declined</button>
                    </td>
                    <td>
                      <i class="icon-trash"></i>Delete
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Transfer</td>

                    <td>Okoro Richard</td>
                    <td>Emmanuel Okwonkwo</td>
                    <td>$5000</td>
                    <td>Tue. 12 Dec. 2023</td>
                    <td>
                      <button class="a-btn pedning">pending</button>
                    </td>
                    <td>
                      <i class="icon-trash"></i>Delete
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Transfer</td>

                    <td>Okoro Richard</td>
                    <td>Emmanuel Okwonkwo</td>
                    <td>$150</td>
                    <td>Fri. 22 Dec. 2023</td>
                    <td>
                      <button class="a-btn aproved">processed</button>
                    </td>
                    <td>
                      <i class="icon-trash"></i>Delete
                    </td>
                  </tr>
                </tbody>
              </table>
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
