import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({sendUserAuthToApp}) {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [userAuth, setUserAuth] = useState(false);
  const [userId, setUserId] = useState();
  const [loginMessage, setLoginMessage] = useState();

  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;
  const navigate = useNavigate();

  //functions
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${windowName}user/login`, {
        email,
        password,
      });
      const { token, user } = response.data;
      setLoginMessage("Logged in successfully");
      setUserData(user);
      // Store the token in local storage or cookies
      localStorage.setItem("token", token);
      setUserId(user._id);
      setUserAuth(true);
      sendUserAuthToApp(true)
      console.log("New User:", user._id);
      setTimeout(() => {
        navigate(`/dashboard/${user._id}`);
      }, 3000);
    } catch (error) {
      setLoginMessage("Error Logging in: " + error.message); // Display error message
    }
  };
  return (
    <body data-spy="scroll" data-offset="300">
      <div className="z-fized-bg">
        <img src="https://i.imgur.com/Yf9Qdus.jpg" />
      </div>
      <div className="pr-top-nav">
        <div className="cryptohopper-web-widget" data-id="2"></div>
      </div>

      <nav className="pr-nav">
        <div className="pr-nav-body"></div>
        <div className="pr-site-container">
          <a href="/" class="pr-nav-brand">
            <img src="https://i.imgur.com/Ms0XoEK.png" />
          </a>
        </div>
      </nav>

      <main className="">
        <div className="container">
          <div className="form-section">
            <div className="form-container">
              <div className="form-header">
                <span className="animated-ball"></span>
                <h3>Login</h3>
              </div>
              <form className="site-form" onSubmit={handleLogin}>
                <input
                  type="hidden"
                  name="_token"
                  value="1bViCGVOMuaLeFbeMifjWu2WADF4uvlFyz5WeY5r"
                />
                <div class="form-input">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    class=""
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autocomplete="email"
                    autofocus
                  />
                </div>
                <div class="form-input">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    class=""
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autocomplete="current-password"
                  />
                </div>
                <div className="form-input">
                  <input type="submit" name="" value="Login" />
                </div>
                <div className="form-footer">
                  <p>
                    <a href="/register">Forgot Your Password?</a>
                    <span>|</span>
                    <a href="/register"> Signup</a>
                  </p>
                </div>
              </form>
              {loginMessage ===
              "Error Logging in: Request failed with status code 401" ? (
                <h2>Invalid Credentials</h2>
              ) : (
                <h2>{loginMessage}</h2>
              )}
              

              <div className="text-center" id="google_translate_element"></div>
            </div>
          </div>
        </div>
      </main>

      <script src="assets/js/jquery-3.3.1.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery.easing.1.3.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/bootstrap-datepicker.js"></script>
      <script src="assets/js/loader.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/main.js"></script>

      <script src="https://www.cryptohopper.com/widgets/js/script"></script>
    </body>
  );
}
