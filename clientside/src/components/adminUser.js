import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;

  //adjust screen
  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);
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
      balance: 0,
      bonusBalance: 0,
    },
  ]);

  //functions
  const handleBonusBalanceChange = async (userId, newBonusBalance) => {
    try {
      const response = await axios.put(
        ` ${windowName}user/singleUserPut?_id=${userId}`,
        {
          bonusBalance: newBonusBalance,
        }
      );
      console.log("Bonus balance updated successfully:", response.data);
      // Update the local state with the updated user
      setUsers(
        users.map((user) =>
          user._id === userId
            ? { ...user, bonusBalance: newBonusBalance }
            : user
        )
      );
    } catch (error) {
      console.error("Error updating bonus balance:", error);
    }
  };

  //useEffects
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${windowName}user/Users`);
        const { users } = response.data;
        const reversedUsers = users.slice().reverse();
        setUsers(reversedUsers);
        console.log("Fetched users:", reversedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
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
      <div className="darkbody"></div>
      <div className="noti-dark">
        <div className="notif-d">
          Name
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
            <div className="dash-buttons">
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
              <h1>Users</h1>
            </div>

            <div className="wallet-trans">
              <table className="table" style={{ overflowX: "scroll" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>First-Name </th>
                    <th>Last-Name</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Balance</th>
                    <th>User-name</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.email}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.address}</td>
                      <td>{user.country}</td>
                      <td>
                        <input
                          type="number"
                          value={user.bonusBalance}
                          onChange={(e) => {
                            // Handle input change and update local state
                            const newBonusBalance = e.target.value;
                            setUsers(
                              users.map((u) =>
                                u._id === user._id
                                  ? { ...u, bonusBalance: newBonusBalance }
                                  : u
                              )
                            );
                          }}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            handleBonusBalanceChange(
                              user._id,
                              user.bonusBalance
                            )
                          }
                        >
                          Update Users Balance
                        </button>
                      </td>
                      <td>{user.username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
