import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./assets/FCC.svg";
export default function Navbar() {
  //variables
  const windowName = process.env.REACT_APP_SERVER_NAME;

  //settings for screen
  //states
  const [shownav, setShowNav] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);

  //useEffects
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
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
    <div data-spy="scroll" data-offset="300" style={{ color: "white" }}>
      <nav className="pr-nav">
        <div className="ztop-nav">
          <div className="cryptohopper-web-widget" data-id="2"></div>
        </div>
        <div className="pr-nav-body"></div>
        <div className="pr-site-container">
          <a href="/adminLogin" className="navLogo">
            <div className="imgcont">
              <img src={Logo} />
            </div>
          </a>
          <div></div>
          {showNavIcon && (
            <div className="navbtn">
              <button>Get Started</button>
              <i class="fa fa-bars" aria-hidden="true" onClick={openNav}></i>
            </div>
          )}
          {shownav && (
            <ul className="links">
              {showNavIcon && (
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                  onClick={openNav}
                  style={{ padding: "10px" }}
                ></i>
              )}
              <div className="var">
                <Link to="/" className="link">
                  {" "}
                  Home
                </Link>
              </div>
              <br />
              <div className="var">
                <Link to="/about" className="link">
                  {" "}
                  About us
                </Link>
              </div>
              <br />
              <div className="var">
                <Link to="/affiliate" className="link">
                  Affiliate
                </Link>
              </div>
              <br />

              <br />
              <div className="var">
                <Link to="/faq" className="link">
                  {" "}
                  Faq
                </Link>
              </div>
              <br />
              <div className="var">
                <Link to="/register" className="link">
                  {" "}
                  Sign in{" "}
                </Link>
              </div>
              <br />
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
