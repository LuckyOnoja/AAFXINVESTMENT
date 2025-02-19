import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard({
  sendDashboardUsertoApp,
  sendInvestmentBalanceToApp,
}) {
  //userId
  const { id } = useParams();

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  //states
  const userId = id;
  const [bonusBalance, setBonusBalance] = useState();
  const [mainBalance, setMainBalance] = useState();
  const [balance, setBalance] = useState([]);
  const [user, setUser] = useState([]);
  const [numberofreferrals, setNumberofreferrals] = useState(0);
  const [flag, setFlag] = useState(true);
  const [recentTransaction, setRecentTransaction] = useState();
  const [transactionData, setTransactionData] = useState([]);
  const [referralLink, setReferralLink] = useState("");
  const [referralCount, setReferralCount] = useState(0);
  const [investmentBalance, setInvestmentBalance] = useState(0);

  //functions

  //useEffects

  useEffect(() => {
    const fetchReferralDetails = async () => {
      try {
        const referralDetails = await axios.get(
          `${windowName}user/referralLink?_id=${id}`
        );

        const { referralLink, count } = referralDetails.data;

        setReferralLink(referralLink);
        setReferralCount(count);
      } catch (error) {
        console.error("Error Fetching Referral details");
      }
    };

    fetchReferralDetails();
  }, [id]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${windowName}user/singleUser?_id=${id}`
        );
        setUser(response.data.user);
        sendDashboardUsertoApp(response.data.user);
        setBonusBalance(response.data.user.bonusBalance);
        setMainBalance(response.data.user.balance);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${windowName}transaction/userTransaction?userId=${id}`
        );
        const { transactions } = response.data;
        const reversedTransactions = transactions.slice().reverse();
        setTransactionData(reversedTransactions);
        console.log("Fetched transactions:", reversedTransactions);

        const totalInvestmentAmount = reversedTransactions.reduce(
          (acc, item) => {
            if (item.Status) {
              const investAmount = Number(item.InvestAmount) || 0; // Converting to number safely
              return acc + investAmount;
            }
            return acc;
          },
          0
        );

        // Rounding to two decimal places and ensure it's still a number
        const roundedInvestmentAmount = parseFloat(
          totalInvestmentAmount.toFixed(2)
        );

        setInvestmentBalance(roundedInvestmentAmount);
        console.log("Investment balance:", roundedInvestmentAmount);
        sendInvestmentBalanceToApp(roundedInvestmentAmount);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    // Calculate total amount if any transaction has Status true
    const referallAmount = referralCount * 50;
    const totalAmount = transactionData.reduce((acc, item) => {
      if (item.Status) {
        return acc + item.Amount;
      }
      return acc;
    }, 0);

    const calculateAllBalance =
      investmentBalance + totalAmount + referallAmount + bonusBalance;

    // Rounding to two decimal places and ensure it's still a number
    const roundedCalculatedBalance = parseFloat(calculateAllBalance.toFixed(2));

    // Update main balance state
    setMainBalance(roundedCalculatedBalance);

    const uploadBalances = async () => {
      try {
        const response = await axios.put(
          ` ${windowName}user/singleUserPut?_id=${id}`,
          {
            bonusBalance: bonusBalance,
            balance: mainBalance,
          }
        );
        console.log("User data updated successfully:", response.data);
        setBalance(response.data);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    };

    // Call uploadBalances function
    uploadBalances();
  }, [referralCount, transactionData, bonusBalance]);

  //settings for screen
  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);

  //useEffects
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
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
      <div className="noti-dark">
        <div className="notif-d">
          <div className="not-flex">
            <p>Notifications</p>
            <i className="ti-close"></i>
          </div>

          <div className="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 Hour Ago</span>
          </div>
          <div className="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 month Ago</span>
          </div>
          <div className="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 month Ago</span>
          </div>
          <div className="notifsd">
            <p>Your Withdrawal Has Been Processed </p>
            <span>1 Hour Ago</span>
          </div>
        </div>
      </div>
      <div className="body-grid">
        {shownav && (
          <section className="adjust">
            {showNavIcon && (
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={openNav}
                style={{ padding: "10px" }}
              ></i>
            )}
            <div className="dash-img">
              <img src="https://i.imgur.com/LTkw9xS.jpeg" alt="" />
              <div className="text-greetings">
                <h1>{user.username}</h1>
                <i className="icon-bell"></i>
              </div>
            </div>
            <ul>
              <li className="active-t">
                <i className="ti-dashboard"></i>
                <Link to={`/dashboard/${id}`}>Dashboard</Link>
              </li>
              <li className="notif-a">
                <i className="ti-wallet"></i>
                <Link to={`/withdrawal/${id}`}>Withdrawal</Link>
              </li>
              <li>
                <i className="ti-briefcase"></i>
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
        <div className="main-dashboard-body">
          <div className="dash-heading">
            <div className="img-us">
              <div className="logo-na disr">
                <i class="fa fa-bars" aria-hidden="true" onClick={openNav}></i>
              </div>
              <img src="https://i.imgur.com/LTkw9xS.jpeg" alt="" />
              <p> Welcome Back ! </p>
            </div>
            <div className="dash-buttons">
              <p>
                <i className="icon-location"></i>United kingdom
              </p>
              <a href="/">
                <i className="ti-home"></i> Home Page
              </a>
            </div>
          </div>
          <div class="boo-boo">
            <div class="heading-text">
              <h1>Dashboard</h1>
              <div class="hd-btn">
                <Link to={`/deposit/${id}`}>Deposit</Link>
                <Link to={`/withdrawal/${id}`}>Withdraw</Link>
              </div>
            </div>
            <div class="wallets">
              <div class="wall-o">
                <p>
                  <i class="ti-user" style={{ color: " green" }}></i>Main wallet
                </p>

                <h1>{user.balance} USD</h1>
              </div>
              <div class="wall-o">
                <p>
                  <i class="icon-people" style={{ color: " red" }}></i>Referall
                </p>

                <h1>{referralCount}</h1>
              </div>
              <div class="wall-o">
                <p>
                  <i class="ti-gift" style={{ color: " aqua" }}></i>bonus
                </p>

                <h1>{user.bonusBalance} USD</h1>
              </div>
              <div class="wall-o">
                <p>
                  <i class="ti-gift" style={{ color: " aqua" }}></i>Investment
                  Balance
                </p>

                <h1>{investmentBalance} USD</h1>
              </div>
            </div>
            <div class="hdv">
              <div
                class="cryptohopper-web-widget"
                data-id="8"
                data-chart_color="#2bc9b4"
                data-coins="bitcoin"
              ></div>
            </div>
            <div class="wallet-trans">
              <header>Transaction History</header>
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Details</th>
                    <th>Amount(USD)</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((transaction, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{transaction.TransactionType}</td>
                      <td>{transaction.Amount}</td>
                      <td>{transaction.Date}</td>
                      <td>
                        {transaction.Status ? (
                          <button className="a-btn aproved">processed</button>
                        ) : (
                          <button className="a-btn pedning">pending</button>
                        )}
                      </td>
                      <td>
                        <i className="icon-trash"></i>Delete
                      </td>
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
