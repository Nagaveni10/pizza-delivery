import React from "react";

function Footer() {
  return (
    <div>
      {/* footer */}
      <footer id="footer">
        {/* footer bottom */}
        <div className="footer-top">
          <div>
            <ul className="footer-widget">
              <li className="alignment">
                <h3>Main Menu</h3>
                <ul className="footer-nav">
                  <li>
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        color: "rgb(155, 151, 151)",
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="alignment">
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        color: "rgb(155, 151, 151)",
                      }}
                    >
                      Pizza
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Contact Us</h3>
                <ul className="footer-nav">
                  <li>
                    63, MG Road, Bengaluru-560001
                    <br /> Karnataka, India
                  </li>
                  <li>
                    <span className="fa fa-phone" />
                    +91 9999442288
                  </li>
                  <li>
                    <span className="fa fa-envelope" />
                    yummypizza@gmail.com
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="footer-social">
            <li className="social">
              <a href="#">
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li className="social">
              <a href="#">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="social">
              <a href="#">
                <span className="fa fa-google-plus" />
              </a>
            </li>
            <li className="social">
              <a href="#">
                <span className="fa fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      {/* / footer */}
      {/* Login Modal */}
      <div
        className="modal"
        id="login-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <h4>Login or Register</h4>
          <form className="login-form" action>
            <label htmlFor>
              Username or Email address<span>*</span>
            </label>
            <input type="text" placeholder="Username or email" />
            <label htmlFor>
              Password<span>*</span>
            </label>
            <input type="password" placeholder="Password" />
            <button className="browse-btn" type="submit">
              Login
            </button>

            <p className="lost-password">
              <a href="#" style={{ textDecoration: "none" }}>
                Lost your password?
              </a>
            </p>
            <div className="register-now">
              Don't have an account?
              <a href="account.html" style={{ textDecoration: "none" }}>
                Register now!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Footer;
