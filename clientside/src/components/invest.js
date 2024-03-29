import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Invest({ dashboardUser }) {
  //userId
  const { id } = useParams();

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  //settings for screen
  //states
  const userId = id;
  const paymentType = "Invest";
  const status = false;
  const [amount, setAmount] = useState();
  const [walletAddress, setWalletAddress] = useState();
  const currentDate =
    new Date().toISOString().slice(0, 10) +
    " " +
    new Date().toTimeString().slice(0, 8);

  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [popup, setPopup] = useState(false);
  const [plans, setPlans] = useState([
    {
      id: 1,
      planType: "Prime Plan",
      dailyReturn: 1.5,
      minInvestment: 500,
      maxInvestment: 4999,
      duration: "7 days",
    },
    {
      id: 2,
      planType: "Sapphire Plan",
      dailyReturn: 2.5,
      minInvestment: 5000,
      maxInvestment: 9999,
      duration: "14 days",
    },
    {
      id: 3,
      planType: "Mezzo Plan",
      dailyReturn: 3,
      minInvestment: 10000,
      maxInvestment: 49999,
      duration: "21 days",
    },
    {
      id: 4,
      planType: "Aafx Plan",
      dailyReturn: 4.5,
      minInvestment: 50000,
      maxInvestment: "No Maximum",
      duration: "30 days",
    },
    {
      id: 5,
      planType: "Partnership Plan",
      dailyReturn: 15,
      minInvestment: 50000,
      maxInvestment: "No Maximum",
      duration: "30 days",
    },
  ]);
  const [checkMessage, setCheckMessage] = useState("");
  const [investAmount, setInvestAmount] = useState(0);
  const [recentTransaction, setRecentTransaction] = useState();

  //functions
  const withdrawalOnchange = (e) => {
    const calcBalance = e.target.value;
    if (calcBalance > dashboardUser.balance) {
      setCheckMessage("Insufficient balance ");
    } else {
      setAmount(-calcBalance);
      setInvestAmount(calcBalance);
      setCheckMessage();
    }
  };

  const confirmTransaction = async (planType) => {
    try {
      const response = await axios.post(`${windowName}transaction/transact`, {
        Amount: amount,
        TransactionType: paymentType,
        UserId: userId,
        walletAddress: walletAddress,
        Date: currentDate,
        Status: status,
        Balance: dashboardUser.balance,
        InvestAmount: investAmount,
        PlanType: planType,
      });
      const { transaction } = response.data;
      setRecentTransaction(transaction);
      console.log("data sent successfully", recentTransaction);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

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
  const triggerPopup = () => {
    setPopup(!popup);
  };

  return (
    <body>
      {popup && (
        <div class="investshow">
          <div class="container-in">
            <div class="sells">
              <p>Plan</p>
              <select name="" id="invest">
                <option value="Choose Your Plan" selected disabled>
                  Choose Your Plan
                </option>
                <option value="Mezzo-plan" data-plan-value="21">
                  Mezzo-plan
                </option>
                <option value="Prime-plan" data-plan-value="7">
                  Prime-plan
                </option>
                <option value="Partnership-plan" data-plan-value="30">
                  Partnership-plan
                </option>
                <option value="Sapphire-Plan" data-plan-value="14">
                  Sapphire-Plan
                </option>
                <option value="AAFX Plan" data-plan-value="30">
                  AAFX-Plan
                </option>
              </select>
            </div>
            <div class="sells">
              <p>Amount</p>
              <input type="number" placeholder="Amount" />
            </div>
            {
              <div class="wit-buts">
                <a href="#">Invest</a>
                <a href="#">Cancel</a>
              </div>
            }
            <p class="alertis">Not enough money</p>
          </div>
        </div>
      )}
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
                <i class="icon-bell"></i>
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
              <a href="/l">
                <i class="ti-home"></i> Home Page
              </a>
            </div>
          </div>
          <div class="boo-boo">
            <div class="heading-text">
              <h1>Investment Plans</h1>
              <div class="hd-btn"></div>
            </div>
            <section class="invest-sec">
              <div class="pr-site-container">
                <div class="invest-sec-grid">
                  {plans.map((plan, index) => (
                    <div class="invest-sec-grid-card" key={index}>
                      <div class="pr-ttcard">
                        <h3>{plan.planType} </h3>
                        <h4>
                          {plan.dailyReturn}% <span> / Daily return</span>
                        </h4>
                        <ul>
                          <li style={{ color: "black" }}>
                            <i></i>
                            Min-Investment
                            <span>${plan.minInvestment} </span>
                          </li>

                          <li style={{ color: "black" }}>
                            <i></i>
                            Max-Investment
                            <span>${plan.maxInvestment}</span>
                          </li>
                        </ul>
                        <h5>
                          Duration of <span>{plan.duration}</span>
                        </h5>
                        <input type="Number" onChange={withdrawalOnchange} />
                        <h5>{checkMessage}</h5>
                        <a onClick={() => confirmTransaction(plan.planType)}>
                          Invest
                        </a>
                      </div>

                      <div class="pr-footcard">
                        <p>
                          It’s our mission to provide you with a delightful and
                          a successful trading experience!
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
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
