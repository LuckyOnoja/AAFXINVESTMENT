import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DepositUserView() {
  //TransactionId
  const { id } = useParams();

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  //adjust screen
  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [transactionData, setTransactionData] = useState([
    {
      UserId: "12222",
      Amount: 20,
      TransactionType: "",
      walletAddress: "",
      Date: "",
      Status: false,
    },
  ]);
  const [users, setUsers] = useState([
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

  const [userId, setUserId] = useState();
  //states

  //useEffects
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${windowName}transaction/receiptTransaction?_id=${id}`
        );
        const { transactions } = response.data;

        console.log("Fetched transactions:", transactions);

        // Set states for each transaction type
        setTransactionData(transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const delay = 5000; // Delay in milliseconds (5 seconds)

    const fetchUsers = async () => {
      console.log(transactionData.UserId);
      try {
        const response = await axios.get(
          `${windowName}user/singleUser?UserId=${transactionData.UserId}`
        );
        const { user } = response.data;

        setUsers(user);
        console.log("Fetched users:", users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchUsers();
    }, delay);

    return () => clearTimeout(timeoutId); // Clear timeout on unmount or re-render
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
                <i class="icon-bell"></i>
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
              <p> Welcome Back Sir! </p>
            </div>
            <div class="dash-buttons">
              <p>
                <i class="icon-location"></i>United kingdom
              </p>
              <a href="index.html">
                <i class="ti-home"></i> Home Padge
              </a>
            </div>
          </div>
          <div class="boo-boo">
            <div class="heading-text">
              <div>
                <h1>Deposit</h1>
                <p>proof of payment</p>
              </div>
            </div>
            <div
              class="table-responsive aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div class="col-lg-12">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <h3>User Id </h3>
                      </td>
                      <td>
                        <h3> {transactionData.UserId}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Type of transaction:</h3>
                      </td>
                      <td>
                        <h3>{transactionData.TransactionType}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Amount(USD): </h3>
                      </td>
                      <td>
                        <h3> {transactionData.Amount}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Address:</h3>
                      </td>
                      <td>
                        <h3>{transactionData.walletAddress}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Transaction ID: </h3>
                      </td>
                      <td>
                        <h3> {transactionData._id}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Date:</h3>
                      </td>
                      <td>
                        <h3>{transactionData.Date}</h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-12" style={{ marginBottom: "20px" }}>
                <p class="text-center">Prove of payment:</p>
                <img
                  src="assets/img/about-banner-stp.jpg"
                  alt=""
                  class="img-responsive btn-1"
                  style={{ margin: "auto" }}
                />
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
