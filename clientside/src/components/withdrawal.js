import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Withdrawal({ dashboardUser }) {
  //userId
  const { id } = useParams();

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  //states
  const userId = id;
  const paymentType = "Withdraw";
  const status = false;
  const [amount, setAmount] = useState();
  const [walletAddress, setWalletAddress] = useState();
  const currentDate =
    new Date().toISOString().slice(0, 10) +
    " " +
    new Date().toTimeString().slice(0, 8);
  const [recentTransaction, setRecentTransaction] = useState();
  const [transactionData, setTransactionData] = useState([
    {
      UserId: "12222",
      Amount: 20,
      TransactionType: "",
      walletAddress: "",
      Date: "",
      Status: false,
    },
    {
      UserId: "12222",
      Amount: 20,
      TransactionType: "",
      walletAddress: "",
      Date: "",
      Status: false,
    },
    {
      UserId: "12222",
      Amount: 20,
      TransactionType: "",
      walletAddress: "",
      Date: "",
      Status: false,
    },
  ]);
  const [popup, setPopup] = useState(false);
  const [childBalances, setChildBalances] = useState([
    {
      UserId: "1",
      mainBalance: "0",
      referrals: "0",
      bonusBalance: "0",
    },
  ]);
  const [subBalance, setSubBalance] = useState();
  const [withdrawMessageValue, setWithdrawMessageValue] = useState();
  const [checkMessage, setCheckMessage] = useState();

  //functions
  const confirmTransaction = async () => {
    console.log(
      "this is amount :" + amount + "this is the sub balance :" + subBalance
    );
    try {
      const response = await axios.post(`${windowName}transaction/transact`, {
        Amount: amount,
        TransactionType: paymentType,
        UserId: userId,
        walletAddress: walletAddress,
        Date: currentDate,
        Status: status,
        Balance: dashboardUser.balance,
      });
      const { transaction } = response.data;
      setRecentTransaction(transaction);
      console.log("data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `${windowName}transaction/userTransaction?userId=${id}`
      );
      const { transactions } = response.data;
      const reversedTransactions = transactions.slice().reverse();
      setTransactionData(reversedTransactions);
      console.log("Fetched transactions:", transactionData);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };
  // Function to filter data based on paymentType
  const filterDataByPaymentType = () => {
    return transactionData.filter(
      (transaction) => transaction.TransactionType === "Withdraw"
    );
  };

  const togglePopup = () => {
    console.log(popup);
    setPopup(!popup);
  };

  const handleOptionClick = (event) => {
    setSubBalance(event.target.value);
  };

  const withdrawalOnchange = (e) => {
    const calcBalance = e.target.value;
    if (calcBalance > dashboardUser.balance) {
      setCheckMessage("Insufficient balance ");
    } else {
      setAmount(-calcBalance);
      setCheckMessage();
    }
  };

  //useEffects
  useEffect(() => {
    fetchTransactions();
  }, [recentTransaction]);

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
    <body style={{ backgroundColor: "white" }}>
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
              <li class="notif-a active-t">
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
                <Link to={`/referall/${id}`}>Referall</Link>
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
              <a href="/">
                <i class="ti-home"></i> Home Page
              </a>
            </div>
          </div>
          <div className="boo-boo">
            {popup && (
              <div className="wito">
                <div className="wito-box">
                  {
                    <i
                      class="fa fa-times"
                      aria-hidden="true"
                      onClick={togglePopup}
                    ></i>
                  }
                  <div className="">
                    <p>Withdraw</p>
                    <i className=""></i>{" "}
                  </div>

                  <div className="sells">
                    <label htmlFor="mySelect">Withdraw Form</label>{" "}
                    <select
                      id="mySelect"
                      value={subBalance}
                      onChange={handleOptionClick}
                    >
                      <option value="Select Option">Select Option</option>{" "}
                      <option value={dashboardUser.balance}>
                        Main Balance
                      </option>
                    </select>
                  </div>
                  <div className="sells">
                    <p>Balance</p>
                    <div className="inps">
                      <p>USD</p>
                      <input type="text" value={subBalance} disabled />{" "}
                      {/* Corrected value */}
                    </div>
                  </div>

                  <div className="sells">
                    <p>Amount</p>
                    <div className="inps">
                      <p>USD</p>
                      <input type="text" onChange={withdrawalOnchange} />
                    </div>
                    <h5>{checkMessage}</h5>
                  </div>
                  <div className="sells">
                    <p>Address</p>
                    <div className="inps">
                      <p>BTC</p>
                      <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="wit-buts">
                    <a onClick={confirmTransaction}>Submit</a>
                  </div>
                </div>
                {withdrawMessageValue && (
                  <h2>Your Balance is not sufficient </h2>
                )}
              </div>
            )}

            <div className="heading-text" style={{ color: "black" }}>
              <h1>Withdrawal</h1>
              <div className="hd-btn">
                <a style={{ cursor: "pointer" }} onClick={togglePopup}>
                  New Withdrawal
                </a>
              </div>
            </div>
            <div className="wallet-trans">
              <header>Withdrawal History</header>
              <table className="table">
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
                  {filterDataByPaymentType().map((transaction, index) => (
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
