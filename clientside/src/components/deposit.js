import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Deposit({ dashboardUser }) {
  //userId
  const { id } = useParams();

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  //states
  const userId = id;
  const paymentType = "Deposit";
  const status = false;
  const [flag, setFlag] = useState(true);
  const [amount, setAmount] = useState();
  const [walletAddress, setWalletAddress] = useState();
  const currentDate =
    new Date().toISOString().slice(0, 10) +
    " " +
    new Date().toTimeString().slice(0, 8);
  const [recentTransaction, setRecentTransaction] = useState();
  const [transactionData, setTransactionData] = useState([]);
  const [alipayValue, setAlipayValue] = useState(false);

  //functions
  const confirmTransaction = async () => {
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

  //useEffects
  useEffect(() => {
    fetchTransactions();
  }, [recentTransaction]);

  //other functions
  // Function to filter data based on paymentType
  const filterDataByPaymentType = () => {
    return transactionData.filter(
      (transaction) => transaction.TransactionType === "Deposit"
    );
  };
  const handleOptionClick = (event) => {
    setWalletAddress(event.target.value);
    const aliValue = event.target.value;
    if (aliValue === "Alipay") {
      setAlipayValue(true);
    } else {
      setAlipayValue(false);
    }
    console.log(walletAddress);
  };

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
                class="fa fa-times"
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
              <li class="active-t">
                <i class="ti-briefcase "></i>
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
            <div class="main-wits">
              <div class="new-withdrawal-casing"></div>
            </div>
            <div class="heading-text">
              <h1>Deposit</h1>
              <div class="hd-btn">
                <a href="/">New Deposit</a>
              </div>
            </div>

            <div class="ses-1 ">
              <span style={{ display: "flex", width: "100%" }}>
                <div class="sells">
                  <label for="mySelect">Deposit Form</label>
                  <select
                    id="cryptoSelect"
                    style={{
                      border: "2px solid #eee",
                      paddingBottom: "10px",
                      outline: "none",
                      cursor: "pointer",
                    }}
                    value={walletAddress}
                    onChange={handleOptionClick}
                  >
                    <option value="select" disabled selected>
                      Select Payment Gateway{" "}
                    </option>
                    <option value={process.env.REACT_APP_BTC}>BTC</option>
                    <option value={process.env.REACT_APP_ETH}>Ethereum</option>
                    <option value={process.env.REACT_APP_TRON}>Tron</option>
                    <option value={process.env.REACT_APP_USDT}>
                      USDT(TRC20)
                    </option>
                    <option value="Alipay" o>
                      Alipay
                    </option>
                  </select>
                </div>
              </span>
              <div class="sells">
                <p>Amount</p>
                <div class="inps">
                  <p id="cryptoInfo2">USD$</p>

                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
              <div class="sells " id="zecond">
                <p>Address</p>
                <div class="inps">
                  <p id="cryptoInfo">Token</p>
                  <input
                    type="text"
                    value={walletAddress}
                    placeholder={walletAddress}
                    readOnly
                  />
                </div>
              </div>
              <div class="sells">
                {alipayValue && (
                  <div class="grrr " id="grrr">
                    <img src="https://i.imgur.com/sETKnUF.jpeg" alt="" />
                    <p>Scan The Qrcode for payment</p>
                  </div>
                )}
              </div>
              <div class="wit-buts">
                <a href="#noti">Next</a>
              </div>
            </div>
            <div class="ses-2 " style={{ marginTop: "30px" }} id="noti">
              <div class="ups">
                <div class="casing-ups">
                  <label for="fileInput">Choose a file</label>
                  <input
                    type="file"
                    id="fileInput"
                    name="fileInput"
                    style={{ opacity: "0" }}
                  />
                </div>
                <div class="pposs">
                  <img src="https://i.imgur.com/W5KxDzr.png" alt="" />
                </div>
              </div>

              <div class="btn-finish">
                <a onClick={confirmTransaction}>Complete Deposit</a>
              </div>
            </div>
            <div class="wallet-trans">
              <header>Deposit History</header>
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
                  {/* <tr>
                    <td>2</td>
                    <td>Deposit</td>
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
                    <td>Deposit</td>
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
                    <td>Deposit</td>
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
                    <td>Deposit</td>
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
                    <td>Deposit</td>
                    <td>$150</td>
                    <td>Fri. 22 Dec. 2023</td>
                    <td>
                      <button class="a-btn aproved">processed</button>
                    </td>
                    <td>
                      <i class="icon-trash"></i>Delete
                    </td>
                  </tr> */}
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
