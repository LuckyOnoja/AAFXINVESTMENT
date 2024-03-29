import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
export default function Footer() {
    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;
  return (
    <footer className="site-footer">
      <div className="pr-site-container">
        <div className="site-section feedback-sec">
          <div className="feedback-sec-header">
            <h1>Reviews</h1>
            <div className="ss-header">
              <button>Comments</button>
            </div>
          </div>

          <div className="slideshow-container">
            <div className="item comment-card">
              <div className="top-item">
                <img
                  src="https://i.imgur.com/NpcXnND.jpeg"
                  alt="Claudia Lucas"
                />
                <div className="top-item-txt">
                  <h3>Claudia Lucas</h3>
                </div>
              </div>
              <div className="bottom-item">
                <p>
                  AAfx Trading Investment Company plans generate very solid
                  returns. It has a very long investment horizon, which fits
                  well with long-term investment liabilities.
                </p>
              </div>
            </div>

            <div className="item comment-card">
              <div className="top-item">
                <img
                  src="https://i.imgur.com/031WE24.jpeg"
                  alt="Analisa Portela"
                />
                <div className="top-item-txt">
                  <h3>Analisa Portela</h3>
                </div>
              </div>
              <div className="bottom-item">
                <p>
                  AAfx Trading Investment Company continues to offer significant
                  opportunities for my business.
                </p>
              </div>
            </div>

            <div className="item comment-card">
              <div className="top-item">
                <img
                  src="https://i.imgur.com/dOjEepv.jpeg"
                  alt="Krueger Alfred"
                />
                <div className="top-item-txt">
                  <h3>Krueger Alfred</h3>
                </div>
              </div>
              <div className="bottom-item">
                <p>
                  AAfx Trading Investment Company is of special importance to us
                  as we believe that sustainable investments will foster
                  investment success and add value to our society.
                </p>
              </div>
            </div>
            
            <div className="item comment-card">
              <div className="top-item">
                <img
                  src="https://i.imgur.com/031WE24.jpeg"
                  alt="Analisa Portela"
                />
                <div className="top-item-txt">
                  <h3>Analisa Portela</h3>
                </div>
              </div>
              <div className="bottom-item">
                <p>
                  AAfx Trading Investment Company continues to offer significant
                  opportunities for my business.
                </p>
              </div>
            </div>
            <div className="item comment-card">
              <div className="top-item">
                <img
                  src="https://i.imgur.com/NpcXnND.jpeg"
                  alt="Claudia Lucas"
                />
                <div className="top-item-txt">
                  <h3>Claudia Lucas</h3>
                </div>
              </div>
              <div className="bottom-item">
                <p>
                  AAfx Trading Investment Company plans generate very solid
                  returns. It has a very long investment horizon, which fits
                  well with long-term investment liabilities.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="main-footer">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-content">
                <h3>Our Contact</h3>
                <ul>
                  <li>
                    <i class="fa fa-envelope"></i>
                    <span
                      style={{
                        wordBreak: "break-all",
                      }}
                    >
                      admin@www.aafxtradinginvestment.com
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-map-marker"></i>
                    <span>Neuturmstraẞe 5, 80331 München, Germany</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-content">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="affiliates.html">Affiliate</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="terms-and-conditions.html">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="get-started.html">Privacy & Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-content">
                <h3>Get Started</h3>
                <p>
                  {" "}
                  We have made navigation seamless, created easy buttons and
                  made registration as simple as possible.
                </p>

                <div className="zz-medSec">
                  <div className="zmm-o">
                    <img src="https://i.imgur.com/pa65NUZ.png" />
                  </div>
                  <div className="zmm-o">
                    <img src="https://i.imgur.com/NJHKPLf.png" />
                  </div>
                  <div className="zmm-o">
                    <img src="https://i.imgur.com/mpp3SVw.png" />
                  </div>
                  <div className="zmm-o">
                    <img src="https://i.imgur.com/7OjziHK.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <a href="/">
            <img
              src="https://i.imgur.com/dJA4naU.png"
              className="img-resposive"
            />
          </a>
          <h4>© 2024 www.aafxtradinginvestment.com - All rights reserved.</h4>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
