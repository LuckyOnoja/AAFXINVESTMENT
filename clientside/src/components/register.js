import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
export default function Register({ sendUserAuthToApp }) {
  useEffect(() => {
    // Get the URL parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Get the value of the 'ref' parameter
    const refParam = searchParams.get("ref");

    // Set the referral code state
    if (refParam) {
      setReferralCode(refParam);
    }
  }, []);

  //states
  const currentDate =
    new Date().toISOString().slice(0, 10) +
    " " +
    new Date().toTimeString().slice(0, 8);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bonusBalance, setBonusBalance] = useState(10);
  const [referralCode, setReferralCode] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const [userData, setUserData] = useState([
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
      date: "",
      balance: 0,
      bonusBalance: 0,
    },
  ]);
  const [userAuth, setUserAuth] = useState(false); // Initialize userAuth as false
  const [userId, setUserId] = useState("");

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;
  const navigate = useNavigate();

  //functions
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${windowName}user/signup?ref=${referralCode}`,
        {
          email,
          firstName,
          lastName,
          address,
          state,
          country,
          zipcode,
          username,
          password,
          date: currentDate,
          balance: 0,
          bonusBalance: bonusBalance,
        }
      );

      setLoginMessage("Signed up successfully");
      setUserData(response.data.user);
      setUserId(response.data.user._id);
      setUserAuth(true);
      sendUserAuthToApp(true);
      console.log("New User:", response.data.user._id);
      setTimeout(() => {
        navigate(`/dashboard/${response.data.user._id}`);
      }, 3000);
    } catch (error) {
      setLoginMessage("Error signing up: " + error.message); // Display error message
    }
    if (referralCode !== "") {
      try {
        await axios.post(`${windowName}user/trackReferral`, {
          referralCode,
        });
        console.log("Referral tracked succesfully");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <div className="z-fized-bg">
        <img src="https://i.imgur.com/Yf9Qdus.jpg" />
      </div>
      <div className="pr-top-nav">
        <div className="cryptohopper-web-widget" data-id="2"></div>
      </div>

      <nav className="pr-nav">
        <div className="pr-nav-body"></div>
        <div className="pr-site-container">
          <a href="/" className="pr-nav-brand">
            <img src="https://i.imgur.com/Ms0XoEK.png" />
          </a>
        </div>
      </nav>

      <main className=" ">
        <div className="container">
          <div className="form-section">
            <div className="form-container">
              <div className="form-header">
                <span className="animated-ball"></span>
                <h3>Register</h3>
              </div>
              <form className="site-form" onSubmit={handleSignup}>
                <input
                  type="hidden"
                  name="_token"
                  value="1bViCGVOMuaLeFbeMifjWu2WADF4uvlFyz5WeY5r"
                />
                <div className="form-input">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    class=""
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autocomplete="email"
                    autofocus
                  />
                </div>
                <div className="form-input">
                  <input
                    id="fname"
                    type="text"
                    class=""
                    name="fname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                    autocomplete="fname"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="lname"
                    type="text"
                    class=""
                    name="lname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                    autocomplete="lname"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="address"
                    type="text"
                    class=""
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    required
                    autocomplete="address"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="state"
                    type="text"
                    class=""
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                    required
                    autocomplete="state"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="country"
                    type="text"
                    class=""
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                    required
                    autocomplete="country"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="zipcode"
                    type="text"
                    class=""
                    name="zipcode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    placeholder="Zip Code"
                    required
                    autocomplete="zipcode"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="username"
                    type="text"
                    class=""
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a Username"
                    required
                    autocomplete="username"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="password"
                    type="password"
                    class=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Select Password"
                    name="password"
                    required
                    autocomplete="new-password"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="password-confirm"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    class=""
                    name="password_confirmation"
                    required
                    autocomplete="new-password"
                  />
                </div>
                <div className="form-input">
                  <input
                    id="referrer"
                    type="text"
                    class=""
                    name="referrer"
                    value={referralCode}
                    placeholder={referralCode}
                  />
                </div>
                <div className="form-terms">
                  <p>
                    <input type="checkbox" name="terms" required />
                    <span>
                      I agree with{" "}
                      <a href="/termsAndConditions">Terms and Codition</a>
                    </span>
                  </p>
                </div>
                <div className="form-input">
                  <input type="submit" name="" value="Register" />
                </div>
                <div className="form-footer">
                  <p>
                    Already a user? <a href="/login">Login</a>
                  </p>
                </div>
                <h2>{loginMessage}</h2>
              </form>

              <div className="text-center" id="google_translate_element"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
