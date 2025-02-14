import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//styles
import "./components/assets/css/navbar.css";
import "./components/assets/css/style.css";
import "./components/assets/css/about.css";
import "./components/assets/css/about2.css";
import "./components/assets/css/admin.css";
import "./components/assets/css/affilate.css";
import "./components/assets/css/animate.min.css";
import "./components/assets/css/contact.css";
import "./components/assets/css/contactus.css";
import "./components/assets/css/dashboard.css";
import "./components/assets/css/bootstrap.min.css";
import "./components/assets/css/faq.css";
import "./components/assets/css/faq2.css";
import "./components/assets/css/font-awesome.min.css";
import "./components/assets/css/getstarted.css";
import "./components/assets/css/index.css";
import "./components/assets/css/loader.css";
import "./components/assets/css/login.css";
import "./components/assets/css/main.css";
import "./components/assets/css/main1.css";
import "./components/assets/css/main3.css";
import "./components/assets/css/main4.css";
import "./components/assets/css/owl.carousel.css";
import "./components/assets/css/owl.carousel.min.css";
import "./components/assets/css/register.css";
import "./components/assets/css/registeration.css";
import "./components/assets/css/responsive.css";
import "./components/assets/css/simple-line-icons.css";
import "./components/assets/css/themify-icons.css";
import "./components/assets/css/Slideshow.css";
//javascipts

//components
import Firstpage from "./components/Firstpage.js";
import Dashboard from "./components/dashboard";
import About from "./components/about.js";
import Affiliate from "./components/affiliate.js";
import Contact from "./components/contact.js";
import Faq from "./components/faq.js";
import Register from "./components/register.js";
import Login from "./components/login.js";
import TermsAndConditions from "./components/termsAndConditions.js";
import Withdrawal from "./components/withdrawal.js";
import Deposit from "./components/deposit.js";
import FundTransfer from "./components/fundTransfer.js";
import Invest from "./components/invest.js";
import Referral from "./components/referral.js";
import Kyc from "./components/kyc.js";
import AdminLogin from "./components/adminLogin.js";
import Admin from "./components/Admin.js";
import AdminWithdrawal from "./components/adminWithdrawal.js";
import AdminDeposit from "./components/depositAdmin.js";
import AdminInvestment from "./components/adminInvestment.js";
import Users from "./components/adminUser.js";
import DepositUserView from "./components/depositUserView.js";

function App() {
  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  //states
  const [mainBalance, setMainBalance] = useState();
  const [numberofreferrals, setNumberofreferrals] = useState();
  const [bonusBalance, setBonusBalance] = useState();
  const [balances, setBalances] = useState();
  const [adminAuth, setAdminAuth] = useState(() => {
    const storedAdminAuth = localStorage.getItem("adminAuth");
    return storedAdminAuth !== null ? JSON.parse(storedAdminAuth) : false;
  });
  const [userAuth, setUserAuth] = useState(() => {
    const storedUserAuth = localStorage.getItem("userAuth");
    return storedUserAuth !== null ? JSON.parse(storedUserAuth) : false;
  });
  const [userData, setUserData] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [investmentBalance, setInvestmentBalance] = useState(() => {
    const storedInvestmentBalance = localStorage.getItem("investmentBalance");
    return storedInvestmentBalance ? JSON.parse(storedInvestmentBalance) : null;
  });
  const [users, setUsers] = useState();

  //useEffects
  useEffect(() => {
    localStorage.setItem("adminAuth", JSON.stringify(adminAuth));
  }, [adminAuth]);
  useEffect(() => {
    localStorage.setItem("userAuth", JSON.stringify(userAuth));
  }, [userAuth]);
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);
  useEffect(() => {
    localStorage.setItem(
      "investmentBalance",
      JSON.stringify(investmentBalance)
    );
  }, [investmentBalance]);

  //functions
  const handleAdminAuth = (adminAuth) => {
    setAdminAuth(adminAuth);
  };
  const handleUserAuth = (userAuth) => {
    setUserAuth(userAuth);
  };

  const dashboardUser = (userData) => {
    console.log("app balance " + balances);
    setUserData(userData);
  };

  const dashboardInvestmentBalance = (investmentBalance) => {
    setInvestmentBalance(investmentBalance);
  };

  const userfromtransaction = (users) => {
    setUsers(users);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Firstpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/register"
          element={<Register sendUserAuthToApp={handleUserAuth} />}
        />
        <Route
          path="/register/:ref"
          element={<Register sendUserAuthToApp={handleUserAuth} />}
        />
        <Route
          path="/login"
          element={<Login sendUserAuthToApp={handleUserAuth} />}
        />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route
          path="/adminLogin"
          element={<AdminLogin adminAuthFromLogin={handleAdminAuth} />}
        />
        {adminAuth && <Route path="/admin" element={<Admin />} />}

        {adminAuth && (
          <Route path="/adminWithdrawal" element={<AdminWithdrawal />} />
        )}
        {adminAuth && (
          <Route
            path="/adminDeposit"
            dataToview={userfromtransaction}
            element={<AdminDeposit />}
          />
        )}
        {adminAuth && (
          <Route path="/adminInvestment" element={<AdminInvestment />} />
        )}
        {adminAuth && <Route path="/users" element={<Users />} />}
        {userAuth && (
          <Route
            path="/dashboard/:id"
            element={
              <Dashboard
                sendDashboardUsertoApp={dashboardUser}
                sendInvestmentBalanceToApp={dashboardInvestmentBalance}
              />
            }
          />
        )}
        {userAuth && (
          <Route
            path="/withdrawal/:id"
            element={<Withdrawal dashboardUser={userData} />}
          />
        )}
        {userAuth && (
          <Route
            path="/deposit/:id"
            element={<Deposit dashboardUser={userData} />}
          />
        )}
        {userAuth && (
          <Route
            path="/fundTransfer/:id"
            element={<FundTransfer dashboardUser={userData} />}
          />
        )}
        {userAuth && (
          <Route
            path="/invest/:id"
            element={<Invest dashboardUser={userData} />}
          />
        )}
        <Route
          path="/referral/:id"
          element={<Referral dashboardUser={userData} />}
        />
        {userAuth && (
          <Route path="/kyc/:id" element={<Kyc dashboardUser={userData} />} />
        )}
        {userAuth && (
          <Route
            path="/depositUserView/:id"
            element={<DepositUserView dashboardUser={userData} users={users} />}
          />
        )}
      </Routes>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </BrowserRouter>
  );
}

export default App;
