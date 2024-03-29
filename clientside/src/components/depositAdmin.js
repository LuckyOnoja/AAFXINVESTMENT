import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function AdminDeposit() {
  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;
  //adjust screen
  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [depositTransactions, setDepositTransactions] = useState([
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

  //useEffects
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${windowName}transaction/Transaction`
        );
        const { transactions } = response.data;
        const reversedTransactions = transactions.slice().reverse();

        console.log("Fetched transactions:", reversedTransactions);

        // Filter transactions by TransactionType
        const withdraws = reversedTransactions.filter(
          (transaction) => transaction.TransactionType === "Withdraw"
        );
        const deposits = reversedTransactions.filter(
          (transaction) => transaction.TransactionType === "Deposit"
        );
        const invests = reversedTransactions.filter(
          (transaction) => transaction.TransactionType === "Invest"
        );

        // Set states for each transaction type
        setDepositTransactions(deposits);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);
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

  // functions
  const handleApprove = async (id) => {
    try {
      const response = await axios.put(
        `${windowName}transaction/updateTransaction/${id}`
      );
      if (response.status === 200) {
        console.log("Transaction updated successfully");
      }
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaj0ucKVpTNbey2YUj2f0V_MDQ1G6jBiwt2w&usqp=CAU"
                alt=""
              />
              <div className="text-greetings">
                <h1>Admin</h1>
                <i class="icon-bell">
                  <span>4</span>
                </i>
              </div>
            </div>
            <ul>
              <li>
                <i class="ti-wallet"></i>
                <Link to={"/admin"}>Admin</Link>
              </li>
              <li>
                <i class="ti-wallet"></i>
                <Link to={"/adminWithdrawal"}>Withdrawals</Link>
              </li>
              <li>
                <i class="ti-briefcase"></i>
                <Link to={"/adminDeposit"}>Deposits</Link>
              </li>
              <li>
                <i class="ti-stats-up"></i>
                <Link to={"/adminInvestment"}>Investments</Link>
              </li>

              <li className="notif-a">
                <i class="icon-people"></i>
                <Link to={"/users"}>Users</Link>
              </li>
              <li>
                <i class="ti-share-alt"></i>
                <Link to={"/"}>Log out</Link>
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaj0ucKVpTNbey2YUj2f0V_MDQ1G6jBiwt2w&usqp=CAU"
                alt=""
              />
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
              <h1>Deposits</h1>
              <div class="hd-btn"></div>
            </div>
            <div class="wallet-trans">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Details</th>
                    <th>Amount(USD)</th>
                    <th>Date</th>
                    <th>User</th>
                    <th>Withdrawal ID</th>
                    <th>Status</th>
                    <th>Balance</th>
                    <th>Verify</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {depositTransactions.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.TransactionType}</td>
                      <td>
                        <input type="number" value={data.Amount} readOnly />
                      </td>
                      <td>{data.Date}</td>
                      <td>{data.UserId}</td>
                      <td>{data._id}</td>
                      {data.Status ? (
                        <td className="withProcessed"> Processed</td>
                      ) : (
                        <td className="withPending">Pending</td>
                      )}
                      <td>{data.Balance}</td>
                      <td>
                        <div className="ad-ac">
                          <a onClick={() => handleApprove(data._id)}>Approve</a>
                        </div>
                      </td>
                      <td>
                        <div className="ad-ac">
                          <Link to={`/depositUserView/${data._id}`}>view</Link>
                        </div>
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
