import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Admin() {
  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;
  const paymentType = "Deposit";
  const status = false;
  const currentDate =
  new Date().toISOString().slice(0, 10) +
  " " +
  new Date().toTimeString().slice(0, 8);

  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState("");
  const [balances, setBalances] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [calculatedBalance, setCalculatedBalance] = useState(0);
  const [withdrawTransactions, setWithdrawTransactions] = useState();
  const [depositTransactions, setDepositTransactions] = useState();
  const [investTransactions, setInvestTransactions] = useState();
  const [recentTransaction, setRecentTransaction] = useState();

  //useEffects

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${windowName}user/Users`);
        const { users } = response.data;
        setUsers(users);
        setBalances(users);
        // Calculate the sum of all balances
        let totalBalance = 0;
        users.forEach((amount) => {
          totalBalance += amount.balance;
        });

        // Set the calculated balance state
        setCalculatedBalance(totalBalance);

        console.log("Fetched users:", users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${windowName}transaction/Transaction`
        );
        const { transactions } = response.data;
        const reversedTransactions = transactions.slice().reverse();
        setTransactionData(reversedTransactions);
        console.log("Fetched transactions:", transactions);

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
        setWithdrawTransactions(withdraws.length);
        setDepositTransactions(deposits.length);
        setInvestTransactions(invests.length);
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

  const handleSubmit = async (_id, name, balance, e) => {
    e.preventDefault();

    if (!amount) {
      return alert("Please enter an amount.");
    }

    // Add the new amount to the existing balance
    const updatedBalance = balance + Number(amount);

    try {
      await axios.put(`${windowName}user/singleUserPut?_id=${_id}`, {
        balance: updatedBalance,
      });
      alert(`Successfully added $${amount} to ${name}'s balance.`);
    } catch (error) {
      alert(
        `Could not add $${amount} to ${name}'s balance. Please check your network and try again.`
      );
    }

    try {
      const response = await axios.post(`${windowName}transaction/transact`, {
        Amount: amount,
        TransactionType: paymentType,
        UserId: _id,
        Date: currentDate,
        Status: status,
        Balance: balance,
      });
      const { transaction } = response.data;
      setRecentTransaction(transaction);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };


  return (
    <body>
      <div className="darkbody"></div>
      <div className="noti-dark">
        <div className="notif-d">
          <div className="not-flex">
            <p>Notifications</p>
            <i class="ti-close"></i>
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
        <div className="main-dashboard-body">
          <div className="dash-heading">
            <div className="img-us">
              <div className="logo-na disr">
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
              <a href="/">
                <i class="ti-home"></i> Home Page
              </a>
            </div>
          </div>
          <div className="boo-boo">
            <div className="heading-text">
              <h1>Admin Portal</h1>
            </div>
            <div className="admin-wall">
              <h1 style={{ fontSize: "15px", color: "black" }}>
                Available Balance In USD
              </h1>
              <p>${calculatedBalance}</p>
            </div>
            <div
              className="wallets"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              }}
            >
              <Link to={"/adminInvestment"}>
                <div className="wall-o">
                  <p>
                    <i class="ti-stats-up" style={{ color: "green" }}></i>
                    Investments
                  </p>

                  <h1>{investTransactions}</h1>
                </div>
              </Link>
              <Link to={"/adminWithdrawal"}>
                <div className="wall-o">
                  <p>
                    <i class="ti-wallet" style={{ color: "green" }}></i>
                    Withdrawals
                  </p>

                  <h1>{withdrawTransactions}</h1>
                </div>
              </Link>
              <Link to={"/adminDeposit"}>
                <div className="wall-o">
                  <p>
                    <i class="ti-briefcase" style={{ color: "red" }}></i>
                    Deposits
                  </p>

                  <h1>{depositTransactions}</h1>
                </div>
              </Link>
            </div>
            <div className="boo-boo">
              <div className="heading-text">
                <h1>Users</h1>
              </div>

              <div className="wallet-trans">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Balance(USD)</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {data.firstName} {data.lastName}
                        </td>
                        <td>{`$${data.balance}`}</td>
                        <td>
                          <input
                            type="date"
                            value={
                              new Date(data.date).toISOString().split("T")[0]
                            }
                            readOnly
                          />
                        </td>

                        <td>
                          <div className="ad-ac ">
                            <a onClick={() => setSelectedUser(data)}>
                              Add Balance
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {selectedUser && (
              <div className="modal-show" onClick={() => setSelectedUser(null)}>
                <div
                  className="modalBalance"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="closeBalance"
                    onClick={() => setSelectedUser(null)}
                  >
                    ×
                  </button>
                  <h2>Add Funds</h2>
                  <form
                    onSubmit={(e) =>
                      handleSubmit(
                        selectedUser._id,
                        selectedUser.firstName,
                        selectedUser.balance,
                        e
                      )
                    }
                  >
                    <input
                      type="text"
                      value={selectedUser.firstName}
                      readOnly
                    />
                    <input
                      type="text"
                      value={`$${selectedUser.balance}`}
                      readOnly
                    />
                    <input
                      type="number"
                      placeholder="Enter amount to add"
                      min="1"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="submit-btn"
                      onClick={(e) =>
                        handleSubmit(
                          selectedUser._id,
                          selectedUser.firstName,
                          selectedUser.balance,
                          e
                        )
                      }
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}

            <div className="heading-text" style={{ marginTop: "30px" }}>
              <h1>#Assets </h1>
            </div>
            <div className="mini-wallets">
              <div className="wall-mini">
                <span>
                  <img src="https://i.imgur.com/vGKUqZG.png" alt="" />
                  <p>Bitcoin (BTC)</p>
                </span>
                <h4> 0.333 BTC</h4>
                <div className="conv-div">
                  <p>USD</p>
                  <h4>$830,000</h4>
                </div>
              </div>
              <div className="wall-mini">
                <span>
                  <img src="https://i.imgur.com/wIkJImY.png" alt="" />
                  <p>BUSD </p>
                </span>
                <h4> 700 BUSD</h4>
                <div className="conv-div">
                  <p>USD</p>
                  <h4>$700</h4>
                </div>
              </div>
              <div className="wall-mini">
                <span>
                  <img src="https://i.imgur.com/F6LT3O1.png" alt="" />
                  <p>Tether (USDT) </p>
                </span>
                <h4> 200 USDT</h4>
                <div className="conv-div">
                  <p>USD</p>
                  <h4>$200</h4>
                </div>
              </div>
              <div className="wall-mini">
                <span>
                  <img src="https://i.imgur.com/8fEpOIT.png" alt="" />
                  <p>Tron (TRC20) </p>
                </span>
                <h4> 0 Tron</h4>
                <div className="conv-div">
                  <p>USD</p>
                  <h4>$0</h4>
                </div>
              </div>
              <div className="wall-mini">
                <span>
                  <img src="https://i.imgur.com/cEV0Ck4.png" alt="" />
                  <p>Litcoin </p>
                </span>
                <h4> 0 Litcoin</h4>
                <div className="conv-div">
                  <p>USD</p>
                  <h4>$0</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-dash">
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
