import { Link } from 'react-router-dom';
export default function AdminReply() {
    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;
  return (
    <body>
      <div class="darkbody" onclick="toggleNav()"></div>
      <div class="noti-dark">
        <div class="notif-d">
          <div class="not-flex">
            <p>Notifications</p>
            <i class="ti-close" onclick="toggnotif()"></i>
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
        <section class="dash-nav">
          <div class="dash-img">
            <img src="assets/img/OIP.jpg" alt="" />
            <div class="text-greetings">
              <p>Admin</p>
              <i class="icon-bell">
                <span>4</span>
              </i>
            </div>
          </div>
          <ul>
            <li>
              <i class="ti-user"></i>
              <a href="admin.html">Admin</a>
            </li>
            <li>
              <i class="ti-wallet"></i>
              <a href="admin-withdrawal.html">Withdrawals</a>
            </li>
            <li>
              <i class="ti-briefcase"></i>
              <a href="depositadmin.html">Deposits</a>
            </li>

            <li>
              <i class="ti-stats-up"></i>
              <a href="admin-investment.html">Investments</a>
            </li>

            <li class="notif-a">
              <i class="icon-people"></i>
              <a href="admin-users.html">Users</a>
            </li>
            <li class=" active-t">
              <i class="ti-thought"></i>
              <a href="admin-message.html">Messages</a>
            </li>
            <li>
              <i class="icon-envelope"></i>
              <a href="admin-email-user.html">Send Email</a>
            </li>
            <li>
              <i class="ti-share-alt"></i>
              <a href="#">Logout</a>
            </li>
          </ul>
        </section>
        <div class="main-dashboard-body">
          <div class="dash-heading">
            <div class="img-us">
              <div class="logo-na disr">
                <i class="ti-menu" onclick="toggleNav()"></i>
              </div>
              <img src="assets/img/OIP.jpg" alt="" />
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
              <h1>Reply</h1>
            </div>
            <div class="email-form">
              <div class="inpst">
                <p>Reciever</p>
                <input type="email" />
              </div>
              <div class="inpst">
                <p>Message</p>
                <div class="form-textt">
                  <textarea name=""></textarea>
                  <a href="#">Send</a>
                </div>
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
