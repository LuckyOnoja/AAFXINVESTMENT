import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Faq() {
    //variables
    const windowName = process.env.REACT_APP_SERVER_NAME;
  return (
    <body data-spy="scroll" data-offset="300">
      <Navbar />
      <header className="pr-header-sec">
        <div className="pr-site-container">
          <div className="pr-header-sec-main">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="selectFaq">
            <ul >
              <li className="">General Questions</li>
              <br/>
              <li >Deposit Questions</li>
              <br/>
              <li >Withdraw Questions</li>
              <br/>
              <li >
                Affiliates Questions
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="abbbt-maii-sec colorAdjust" >
        <div className="faq-container" id="faq-container1">
          <div className="faq-container-f">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1"
                  >
                    What is AAfx Trading Investment?
                  </a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse">
                <div className="panel-body">
                  The activity of our company is aimed at the forex, stocks and
                  cryptocurrency trading and providing investment services
                  worldwide. Any kind of investment activities and fiduciary
                  management services are carried out on legal grounds.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse2"
                  >
                    Is your activity legal?
                  </a>
                </h4>
              </div>
              <div id="collapse2" className="panel-collapse collapse">
                <div className="panel-body">
                  The legality of our company's activities can be judged by the
                  presence of all registration documents and licenses allowing
                  us to attract private investment.
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3"
                  >
                    Do you keep the personal data of the project participants
                    safe?
                  </a>
                </h4>
              </div>
              <div id="collapse3" className="panel-collapse collapse">
                <div className="panel-body">
                  Yes, we have taken all possible measures to protect customers'
                  personal information from getting to third parties. We are
                  using the strongest DDoS protection in the industry with 100%
                  up-time guarantee. Transfer information from and to our
                  website is realized and ciphered by SSL Encryption.
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4"
                  >
                    How to create a personal account?
                  </a>
                </h4>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div class="panel-body">
                  The registration process on the website is quite simple. You
                  need to fill out the fields of the registration form, which
                  include the name and nick-name of the user, his email address
                  and password.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5"
                  >
                    How can I change my account details?
                  </a>
                </h4>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="panel-body">
                  After login, you can visit settings page to edit your details.
                  For security reasons, we do not allow users to change their
                  e-mail after registration. For editing your profile, you need
                  a confirmation on your email, so use an email service which
                  will not block mails from our site. Use Gmail, Yahoo etc mail
                  services. Hotmail, MSN and protonmail etc services might not
                  receive mails from our server. Also please remember to
                  whitelist our mail addresses
                  admin@www.aafxtradinginvestment.com so that you can receive
                  confirmation mails from us.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse6"
                  >
                    Can I create multiple accounts?
                  </a>
                </h4>
              </div>
              <div id="collapse6" className="panel-collapse collapse">
                <div class="panel-body">
                  If we find accounts created from the same IP address, we will
                  have to block them. The money in the account will be frozen
                  without the right of return. But, if your family member wants
                  to register from the same IP, then it is allowed
                </div>
              </div>
            </div>
          </div>

          <div className="faq-container-s">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse7"
                  >
                    How to start investing?
                  </a>
                </h4>
              </div>
              <div id="collapse7" className="panel-collapse collapse">
                <div className="panel-body">
                  After registration, you need to familiarize yourself with
                  investment rates and replenish the deposit by the
                  corresponding amount. For this go to Make Deposit page in your
                  member dashboard, select plan, select the deposit amount,
                  select the payment processor and click on deposit button. On
                  the next page, check whether all the details are correct and
                  confirm your deposit. Perfectmoney and payeer deposits are
                  credited instantly. Bitcoin deposits are credited after 3
                  network confirmations. Other crypto deposits are credited
                  after 6 network confirmations.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse8"
                  >
                    Which payment methods do you accept?
                  </a>
                </h4>
              </div>
              <div id="collapse8" className="panel-collapse collapse">
                <div class="panel-body">
                  At the moment we work with Bitcoin.
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse9"
                  >
                    Do you charge a transaction fee?
                  </a>
                </h4>
              </div>
              <div id="collapse9" class="panel-collapse collapse">
                <div class="panel-body">
                  No, both deposit and withdrawal of funds are carried out
                  without any fees, except for those provided by payment
                  systems.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse10"
                  >
                    I want to reinvest the funds received, is it possible?
                  </a>
                </h4>
              </div>
              <div id="collapse10" class="panel-collapse collapse">
                <div className="panel-body">
                  Of course. You have the right to dispose of the profits at
                  your own discretion, including reinvesting them in the
                  project.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse11"
                  >
                    How many tariff plans are available for one user?
                  </a>
                </h4>
              </div>
              <div id="collapse11" className="panel-collapse collapse">
                <div className="panel-body">
                  We do not prevent investors from getting unlimited income, so
                  each project participant can purchase any number of tariff
                  plans.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse12"
                  >
                    I have repeatedly lost money on investments, can I trust
                    your company?
                  </a>
                </h4>
              </div>
              <div id="collapse12" className="panel-collapse collapse">
                <div class="panel-body">
                  Customer trust and deposit protection are guaranteed by the
                  creation of a reserve fund, which under adverse circumstances
                  will become a source of fulfillment of our financial
                  obligations.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse13"
                  >
                    How long does it take to receive money from the wallet to my
                    deposit?
                  </a>
                </h4>
              </div>
              <div id="collapse13" className="panel-collapse collapse">
                <div className="panel-body">
                  As a rule, Perfectmoney and Payeer deposits are credited to
                  your account instantly. Btc deposits are credited after 3
                  network confirmations. LTC, ETH, BCH, Dogecoin and Dash
                  deposits are credited after 6 network confirmations.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse14"
                  >
                    I have made a deposit, but still it is not credited in my
                    account?
                  </a>
                </h4>
              </div>
              <div id="collapse14" className="panel-collapse collapse">
                <div className="panel-body">
                  Do not worry, your deposit is secure in our system. Remember
                  that Perfectmoney and Payeer deposits are credited instantly.
                  If any of the deposits from these 2 payment system does not
                  reflect in your account, just write to our support system
                  using the support form given on the site with following
                  details - Your Username, Deposited Amount, Payment Processor
                  Name and the Batch ID of the payment. We will do the rest.
                  Remember that the BTC deposits are credited after 3 network
                  confirmation. If your BTC deposit is not credited even after 3
                  network confirmations, then write to us with following details
                  - Your Username, Deposited Amount, Your Deposit Address from
                  which you have sent the payment, the Deposit Address to which
                  you have made the payment, and the Transaction ID of the
                  payment. We will do the rest that is required. Remember that
                  deposits from the other crypto systems like LTC, ETH, BCH,
                  Doge and Dash are credited after 6 network confirmation. If
                  your deposit from any of these payments is not credited even
                  after 6 network confirmations, then write to us with following
                  details - Your Username, Deposited Amount, Your Deposit
                  Address from which you have sent the payment, the Deposit
                  Address to which you have made the payment, and the
                  Transaction ID of the payment. We will do the rest that is
                  required. Important Note - Any support ticket with incomplete
                  information will not be answered.
                </div>
              </div>
            </div>
          </div>

          <div className="faq-container-th">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse15"
                  >
                    Is there a withdrawal limit?
                  </a>
                </h4>
              </div>
              <div id="collapse15" className="panel-collapse collapse">
                <div className="panel-body">
                  There are no limits for withdrawals.
                </div>
              </div>
            </div>

            <div className="panel">
              Name
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse16"
                  >
                    I have created a withdrawal request, but there is still no
                    money in the wallet. How long do I have to wait?
                  </a>
                </h4>
              </div>
              <div id="collapse16" className="panel-collapse collapse">
                <div className="panel-body">
                  We transfer all withdrawals instantly. But when it will reach
                  your payment wallet depends upon the payment wallet system you
                  have chosen to accept your withdrawals. Particularly the
                  crypto withdrawals will show only after the required network
                  confirmations required are completed that are required for the
                  wallet system you have chosen. So, first know what are the
                  conditions of the wallet system you are using. One more thing
                  - For Payeer BTC withdrawals minimum amount for their system
                  is 0.001 BTC worth of money. So if you are using payeer BTC
                  address for withdrawals and withdraw less than 0.001 BTC, then
                  in that case, even if the payment from our system is sent
                  instantly, it will never reach your wallet. So keep in mind
                  your wallet system rules and conditions before asking for
                  withdrawals. We will not be held responsible for any
                  shortcomings from your side.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse17"
                  >
                    Are there any withdrawal fees?
                  </a>
                </h4>
              </div>
              <div id="collapse17" className="panel-collapse collapse">
                <div class="panel-body">
                  No, there are no fees for withdrawal.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse18"
                  >
                    Why can't I withdraw money to my wallet?
                  </a>
                </h4>
              </div>
              <div id="collapse18" className="panel-collapse collapse">
                <div className="panel-body">
                  First check whether you have enough balance in your account
                  for withdrawal. For crypto withdrawals, minimum withdraw
                  amount is 1USD. Secondly, check whether you have added your
                  payment address for withdrawals. And if have added, check
                  whether it is correct. If you have not added your payment
                  address for withdrawals, go to edit profile page and update
                  your payment address correctly.
                </div>
              </div>
            </div>
          </div>

          <div className="faq-container-fth">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse19"
                  >
                    Do I need to make a deposit to refer new members?
                  </a>
                </h4>
              </div>
              <div id="collapse19" className="panel-collapse collapse">
                <div class="panel-body">
                  No, you do not need to make a deposit to take part in our
                  referral program.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse20"
                  >
                    What can I get from participating in an affiliate program?
                  </a>
                </h4>
              </div>
              <div id="collapse20" className="panel-collapse collapse">
                <div class="panel-body">
                  Please check our affiliate page for more details.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse21"
                  >
                    How to invite new participants to the project?
                  </a>
                </h4>
              </div>
              <div id="collapse21" className="panel-collapse collapse">
                <div class="panel-body">
                  You can find a referral link in your account, which has two
                  goals - it allows beginners to go to our website and serves as
                  an identifier for a partner who is entitled to a partner fee
                  for attracting new investors.
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse22"
                  >
                    Can I use the affiliate link to create my own account?
                  </a>
                </h4>
              </div>
              <div id="collapse22" className="panel-collapse collapse">
                <div className="panel-body">
                  No, the company's rules prohibit such actions, which are
                  considered by the site administration as fraudulent and are
                  punished by blocking accounts and freezing accounts.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <script src="https://www.cryptohopper.com/widgets/js/script"></script>

      <script
        type="text/javascript"
        src="../translate.google.com/translate_a/elementa0d8.js?cb=googleTranslateElementInit"
      ></script>
    </body>
  );
}
