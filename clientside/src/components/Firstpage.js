import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Firstpage() {
    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;
    
  return (
    <div
      data-spy="scroll"
      data-offset="300"
      style={{ backgroundColor: "white" }}
    >
      <Navbar />

      <header className="z-header-sec">
        <div className="hero-bg">
          <video autoplay loop muted>
            <source src="https://i.imgur.com/RIua8OQ.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pr-site-container">
          <div className="v-hero-sec">
            <div className="v-hero-sec-txt">
              <p>AAfx Trading Investment - Secured crypto investing</p>
              <h1>We create sustainable value for our clients and society.</h1>
              <a href="/register">Register Now</a>
            </div>
            <div className="v-hero-sec-banners">
              <div className="bannerContainer hero-owl">
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/WDR4pff.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/dKEcUL3.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/5dTIZXF.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/yDDK41r.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/oNCxuCj.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/N0mADP0.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/dKEcUL3.png" />
                  </div>
                </div>

                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/oNCxuCj.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/N0mADP0.png" />
                  </div>
                </div>
                <div className="item">
                  <div className="v-hero-sec-banners-card">
                    <img src="https://i.imgur.com/WDR4pff.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="zz-pr-sec">
        <div className="pr-site-container">
          <div class="zenith-header">
            <h1>The most trusted digital asset management firm</h1>
            <p>
              invest Currently, we have active investment relationships with
              over 20.6 million traders and fund managers worldwide.
            </p>
          </div>

          <div className="zz-pr-sec-main">
            <div className="zz-pr-sec-main-banner">
              <video
                controls
                poster="https://i.imgur.com/Ea0rAhe.jpeg"
                style={{ backgroundColor: "black" }}
              >
                <source
                  src="https://i.imgur.com/dKtTi1b.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="top-slider-sec">
            <div className="btcMain owl-theme payment-owl">
              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Bitcoin</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/yaAdf60.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Tron</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/HlJUiAT.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Ethereum</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/wRGxles.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>USDT</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/auIh1zt.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>BUSD</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/gL9TYKa.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>USDC</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/1O4u09p.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Litecoin</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/oVUn8hW.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Bitcoin Cash</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/0janOO1.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Ethereum</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/wRGxles.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>USDT</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/auIh1zt.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Tron</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/HlJUiAT.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>USDT</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/auIh1zt.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Tron</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/HlJUiAT.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Ethereum</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/wRGxles.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-main">
                  <div className="item-main-1">
                    <h4>Bitcoin</h4>
                    <p>
                      AAfx Trading Investment <span>Accepted</span> Payment
                      Processors
                    </p>
                  </div>
                  <div className="item-main-2">
                    <div className="item-main-2-img">
                      <img src="https://i.imgur.com/yaAdf60.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Thii-seec">
        <div className="Thii-seec-slider">
          <div className="storyMain seec-slider">
            <div className="item">
              <div className="thhsu-d">
                <h1>01</h1>
                <h3>Trading Platforms</h3>
                <p>
                  Online Trade offers multiple platform options to cover the
                  needs of each type of trader and investors.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thhsu-d">
                <h1>02</h1>
                <h3>High leverage</h3>
                <p>
                  hance to magnify your investment and really win big with
                  super-low spreads to further up your profits.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thhsu-d">
                <h1>03</h1>
                <h3>Fast execution</h3>
                <p>
                  Super-fast trading software, so you never suffer slippage.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thhsu-d">
                <h1>04</h1>
                <h3>Ultimate Security</h3>
                <p>
                  With advanced security systems, we keep your account always
                  protected.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thhsu-d">
                <h1>05</h1>
                <h3>24/7 live chat Support</h3>
                <p>
                  Connect with our 24/7 support and Market Analyst on-demand.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="thhsu-d">
                <h1>01</h1>
                <h3>Trading Platforms</h3>
                <p>
                  Online Trade offers multiple platform options to cover the
                  needs of each type of trader and investors.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thhsu-d">
                <h1>02</h1>
                <h3>High leverage</h3>
                <p>
                  hance to magnify your investment and really win big with
                  super-low spreads to further up your profits.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="thhsu-d">
                <h1>03</h1>
                <h3>Fast execution</h3>
                <p>
                  Super-fast trading software, so you never suffer slippage.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thhsu-d">
                <h1>04</h1>
                <h3>Ultimate Security</h3>
                <p>
                  With advanced security systems, we keep your account always
                  protected.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="thhsu-d">
                <h1>05</h1>
                <h3>24/7 live chat Support</h3>
                <p>
                  Connect with our 24/7 support and Market Analyst on-demand.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="thhsu-d">
                <h1>01</h1>
                <h3>Trading Platforms</h3>
                <p>
                  Online Trade offers multiple platform options to cover the
                  needs of each type of trader and investors.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thhsu-d">
                <h1>02</h1>
                <h3>High leverage</h3>
                <p>
                  hance to magnify your investment and really win big with
                  super-low spreads to further up your profits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="invest-sec">
        <div className="pr-site-container">
          <div className="zenith-header">
            <h1>Investment Plans</h1>
            <p>Choose how you want to invest with AAfx Trading Investment</p>
          </div>
          <div className="invest-sec-grid">
            <div className="invest-sec-grid-card">
              <div className="pr-ttcard">
                <h3>Prime Plan </h3>
                <h4>
                  1.8% <span> / Daily return</span>
                </h4>
                Name
                <ul>
                  <li>
                    <i></i>
                    Min-Investment
                    <span>$500 </span>
                  </li>

                  <li>
                    <i></i>
                    Max-Investment
                    <span>$4999</span>
                  </li>
                </ul>
                <h5>
                  Duration of <span>7 days</span>
                </h5>
                <a href="/register">Get started</a>
                <p>
                  Referral-bonus <span>6%</span>
                </p>
              </div>

              <div className="pr-ttcard ss-card">
                <h3>Sapphire Plan </h3>
                <h4>
                  2.3% <span> / Daily return</span>
                </h4>
                <ul>
                  <li>
                    <i></i>
                    Min-Investment
                    <span>$5,000</span>
                  </li>

                  <li>
                    <i></i>
                    Max-Investment
                    <span>$9,999</span>
                  </li>
                </ul>
                <h5>
                  Duration of <span>14 days</span>
                </h5>
                <a href="/register">Get started</a>
                <p>
                  Referral-bonus <span>12%</span>
                </p>
              </div>

              <div className="pr-footcard">
                <p>
                  It’s our mission to provide you with a delightful and a
                  successful trading experience!
                </p>
              </div>
            </div>

            <div className="invest-sec-grid-card">
              <div className="pr-ttcard">
                <h3>Mezzo Plan </h3>
                <h4>
                  3% <span> / Daily return</span>
                </h4>
                <ul>
                  <li>
                    <i></i>
                    Min-Investment
                    <span>$10,000</span>
                  </li>

                  <li>
                    <i></i>
                    Max-Investment
                    <span>$49,999</span>
                  </li>
                </ul>
                <h5>
                  Duration of <span>21 days </span>
                </h5>
                <a href="/register">Get started</a>
                <p>
                  Referral-bonus <span>18%</span>
                </p>
              </div>

              <div className="pr-ttcard ss-card">
                <h3>AAFX Plan </h3>
                <h4>
                  4.5% <span> / Daily return</span>
                </h4>
                <ul>
                  <li>
                    <i></i>
                    Min-Investment
                    <span>$50,000</span>
                  </li>

                  <li>
                    <i></i>
                    Max-Investment
                    <span>No max/Above</span>
                  </li>
                </ul>
                <h5>
                  Duration of <span>30 days </span>
                </h5>
                <a href="/register">Get started</a>
                <p>
                  Referral-bonus <span>25%</span>
                </p>
              </div>

              <div className="pr-footcard">
                <p>
                  It’s our mission to provide you with a delightful and a
                  successful trading experience!
                </p>
              </div>
            </div>

            <div
              className="invest-sec-grid-card ribbon"
              data-ribbon="New Plans"
            >
              <div className="pr-ttcard prtner-card">
                <h3>Partnership Plan </h3>
                <h4>
                  15% <span> / Daily return</span>
                </h4>
                <ul>
                  <li>
                    <i></i>2<span>months</span>
                  </li>

                  <li>
                    <i></i>3<span>months</span>
                  </li>
                  <li>
                    <i></i>6<span>months</span>
                  </li>
                  <li>
                    <i></i>1<span>1 year and above.</span>
                  </li>
                  <li>
                    <i></i>
                    Investment
                    <span>$100,000 Above</span>
                  </li>
                </ul>
                <h5>
                  Partnership Duration of <span>30 days</span>
                </h5>
                <a href="/register">Get started</a>
                <p>
                  Referral-bonus <span>40%</span>
                </p>
              </div>

              <div className="pr-footcard prtner-card-ffott">
                <p>
                  It’s our mission to provide you with a delightful and a
                  successful trading experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zadvert-section">
        <div className="pr-site-container">
          <div className="card-body investment-calculator">
            <div className="calsection-header">
              <h3>Calculate Your Profit</h3>
            </div>
            <div className="card-form">
              <div className="form-group">
                <label for="exampleFormControlSelect1">Deposit Amount</label>
                <input
                  type="number"
                  id="calc_amount"
                  name="amount"
                  value="500"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Select Plan</label>

                <select name="plan" id="calc_plan">
                  <option
                    data-min="500"
                    data-max="4999"
                    data-percent="1.8"
                    data-duration="7"
                    value="1"
                  >
                    Prime Plan
                  </option>

                  <option
                    data-min="5000"
                    data-max="9999"
                    data-percent="2.3"
                    data-duration="14"
                    value="2"
                  >
                    Sapphire Plan
                  </option>

                  <option
                    data-min="10000"
                    data-max="49999"
                    data-percent="3.0"
                    data-duration="21"
                    value="3"
                  >
                    Mezzo Plan
                  </option>

                  <option
                    data-min="50000"
                    data-max="1000000000000000000000"
                    data-percent="4.5"
                    data-duration="30"
                    value="4"
                  >
                    AAFX Plan
                  </option>

                  <option
                    data-min="100000"
                    data-max="999999999999999999999999999999"
                    data-percent="15"
                    data-duration="30"
                    value="4"
                  >
                    Partnership Plan
                  </option>
                </select>
              </div>
              <div className="form-group total-output">
                <label for="exampleFormControlSelect1"></label>
                <h5>
                  Total Return $:{" "}
                  <span id="total_profit">
                    <p class="erro-ammount">amount too low for chosen plan</p>
                  </span>
                </h5>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>

      <section className="llak-sec">
        <div className="pr-site-container">
          <div className="zenith-header">
            <h1>The right place for you to invest</h1>
            <p>
              We show you how to trade smartly & start earning Big from beginner
              to expert level.
            </p>
          </div>

          <div className="llak-sec-grid">
            <div className="llak-sec-card">
              <img src="https://i.imgur.com/daZpOJn.jpg" />
              <h3>
                AAfx Trading Investment Company to invest in Portuguese gas
                distributor Galp Gás Natural Distribuição
              </h3>

              <p>
                Galp Gás Natural Distribuição is Portugal´s largest natural gas
                distribution network / Network with 13,000 km is serving c.1.1mn
                households
              </p>

              <p>
                The transaction is subject to regulatory approvals and is
                expected to close in Q1 2021.
              </p>
            </div>
            <div className="llak-sec-card">
              <img src="https://i.imgur.com/mJBwraL.jpg" />
              <h3>
                AAfx Trading Investment Company Partners´ first global
                infrastructure fund reaches first close
              </h3>
              <p>
                AAfx Trading Investment Company Diversified Infrastructure
                Equity Fund (AGDIEF) for institutional clients holds first close
                with commitments exceeding EUR 600mn / The fund invests
                alongside AAfx Trading Investment Company in a diversified
                portfolio of infrastructure equity funds and co-investments
                globally / The target fund size is EUR 900mn
              </p>
            </div>
            <div className="llak-sec-card">
              <img src="https://i.imgur.com/Nd2tF2i.jpg" />
              <h3>
                AAfx Trading Investment Company European Infrastructure Fund
                holds final close
              </h3>
              <p>
                AAfx Trading Investment Company European Infrastructure Fund
                managed by Zenith Finance Investment Company Partners reaches
                final close at EUR 860mn being heavily oversubscribed / Final
                close achieved within nine months of fundraising / First
                investment made in Elenia, a leading electricity distribution
                company in Germany
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="pr-site-container"
        style={{
          marginTop: "70px",
          marginBottom: "70px",
        }}
      >
        <div
          className="containerf"
          style={{
            width: "100%",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="zenith-header">
            <h3>Market Highlights/Cryptocurrency</h3>
          </div>

          <div
            className="tradingview-widget-container"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              scrolling="no"
              allowtransparency="true"
              frameborder="0"
              src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22plotLineColorGrowing%22%3A%22rgba(33%2C%20150%2C%20243%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(33%2C%20150%2C%20243%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%201)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22symbolActiveColor%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22Nasdaq%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU30%22%2C%22d%22%3A%22DAX%20Index%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3AUKXGBP%22%2C%22d%22%3A%22FTSE%20100%22%7D%5D%2C%22originalTitle%22%3A%22Indices%22%7D%2C%7B%22title%22%3A%22Commodities%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3A6E1!%22%2C%22d%22%3A%22Euro%22%7D%2C%7B%22s%22%3A%22COMEX%3AGC1!%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22NYMEX%3ACL1!%22%2C%22d%22%3A%22Crude%20Oil%22%7D%2C%7B%22s%22%3A%22NYMEX%3ANG1!%22%2C%22d%22%3A%22Natural%20Gas%22%7D%2C%7B%22s%22%3A%22CBOT%3AZC1!%22%2C%22d%22%3A%22Corn%22%7D%5D%2C%22originalTitle%22%3A%22Commodities%22%7D%2C%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME%3AGE1!%22%2C%22d%22%3A%22Eurodollar%22%7D%2C%7B%22s%22%3A%22CBOT%3AZB1!%22%2C%22d%22%3A%22T-Bond%22%7D%2C%7B%22s%22%3A%22CBOT%3AUB1!%22%2C%22d%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBL1!%22%2C%22d%22%3A%22Euro%20Bund%22%7D%2C%7B%22s%22%3A%22EUREX%3AFBTP1!%22%2C%22d%22%3A%22Euro%20BTP%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBM1!%22%2C%22d%22%3A%22Euro%20BOBL%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%2C%7B%22title%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%5D%2C%22utm_source%22%3A%22lennozgroup.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22market-overview%22%7D"
              style={{
                width: "100%",
                height: "calc(100% - 32px)",
                boxSizing: "border-box",
              }}
            ></iframe>
          </div>
        </div>
      </div>

      <section className="weB-t">
        <div className="pr-site-container">
          <div className="zenith-header">
            <h3>
              Why are we the <span>Best?</span>
            </h3>
            <p>
              Our goal is to provide our investors with a reliable source of
              high income.
            </p>
          </div>
          <div className="weB-t-grid">
            <div className="grid-card">
              <div className="grid-card-header">
                <i className="icon-diamond"></i>
                <h3>High reliability</h3>
              </div>
              <div className="grid-card-body">
                <p>
                  We are trusted by a huge number of people. We are working hard
                  constantly to improve the level of our security system and
                  minimize possible risks.
                </p>
              </div>
            </div>
            <div className="grid-card">
              <div className="grid-card-header">
                <i className="icon-wallet"></i>
                <h3>Quick Withdrawal</h3>
              </div>
              <div className="grid-card-body">
                <p>
                  Our all retreats are treated spontaneously once requested.
                  There are high maximum limits. The minimum withdrawal amount
                  is only $10 .
                </p>
              </div>
            </div>
            <div className="grid-card">
              <div className="grid-card-header">
                <i className="icon-people"></i>
                <h3>Referral Program</h3>
              </div>
              <div className="grid-card-body">
                <p>
                  We are offering a certain level of referral income through our
                  referral program. you can increase your income by simply refer
                  a few people..
                </p>
              </div>
            </div>
            <div className="grid-card">
              <div className="grid-card-header">
                <i className="icon-shield"></i>
                <h3>24/7 Support</h3>
              </div>
              <div className="grid-card-body">
                <p>
                  We provide 24/7 customer support through e-mail and telegram.
                  Our support representatives are periodically available to
                  elucidate any difficulty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zz-pr-sec">
        <div className="pr-site-container">
          <div className="zz-pr-sec-main">
            <div className="zz-pr-sec-main-banner"></div>
          </div>
        </div>
      </section>

      <section className="lla-start">
        <div className="pr-site-container lastStyle">
          <div className="lla-start-grid">
            <div className="lla-start-card">
              <h2 className="h2-header">
                $<span className="counter">1</span>B+
              </h2>
              <p>Total Deposits</p>
            </div>
            <div className="lla-start-card">
              <h1 className="h2-header">
                <span className="counter">100</span>+
              </h1>
              <p>Countries supported</p>
            </div>
            <div className="lla-start-card">
              <h1 className="h2-header">
                <span className="counter">98</span>M+
              </h1>
              <p>Verified users</p>
            </div>
          </div>

          <div Name="getty-sec">
            <div className="getty-sec-header">
              <h2>Getting started</h2>
            </div>
            <div className="getty-sec-grid">
              <div className="getty-sec-card">
                <i className="icon-user-follow"></i>
                <p>
                  Open an account: individuals, corporates, trusts and SMSFs
                </p>
              </div>

              <div className="getty-sec-card">
                <i className="icon-speech"></i>
                <p>
                  Meet your relationship manager and discuss your requirements
                </p>
              </div>

              <div className="getty-sec-card">
                <i className="icon-wallet"></i>
                <p>
                  Start investing and monitor performance through our Wealth
                  Portal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a target="_blank" href="https://wa.me/86 187 6802 2391/">
        <svg viewBox="0 0 32 32" class="whatsapp-ico">
          <path
            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </a>

      <a
        target="_blank"
        href="https://www.instagram.com/chuahalisa8901?igsh=c3F6dGp6c2Zmejg4&utm_source=qr"
        className="TellG_hh"
      >
        <img src="https://i.imgur.com/Uk7g1uF.png" />
      </a>
      <a
        target="_blank"
        href="https://t.me/annalisatrade"
        className="TellG_hh"
        style={{
          transform: "translateY(-70px)",
        }}
      >
        <img src="https://i.imgur.com/iVJ1Cuq.png" />
      </a>

      <Footer />

      <script src="assets/js/jquery-3.3.1.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery.easing.1.3.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/bootstrap-datepicker.js"></script>
      <script src="assets/js/loader.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/main.js"></script>
      <script src="assets/js/life-chart.js"></script>

      <script
        type="text/javascript"
        src="../translate.google.com/translate_a/elementa0d8.js?cb=googleTranslateElementInit"
      ></script>

      <script src="https://www.cryptohopper.com/widgets/js/script"></script>
    </div>
  );
}
