import logo from '../../../assets/images/logo/white-logo.png';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">

              <div className="single-footer f-about">
                <div className="logo">
                  <a href="index.html">
                    <img src={ logo } alt="#" />
                  </a>
                </div>
                <p>Making the world a better place through constructing elegant hierarchies.</p>
                <ul className="social">
                  <li>
                    <a
                      href=""
                    >
                      <i className="lni lni-facebook-filled" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                    >
                      <i className="lni lni-twitter-original" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                    >
                      <i className="lni lni-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                    >
                      <i className="lni lni-linkedin-original" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                    >
                      <i className="lni lni-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                    >
                      <i className="lni lni-pinterest" />
                    </a>
                  </li>
                </ul>
                <p className="copyright-text">
                  Designed and Developed by
                  <a
                    href="https://uideck.com/"
                    rel="nofollow noreferrer"
                    target="_blank"
                  >
                    UIdeck
                  </a>
                </p>
              </div>

            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer f-link">
                    <h3>Solutions</h3>
                    <ul>
                      <li><a href="">Marketing</a></li>
                      <li><a href="">Analytics</a></li>
                      <li><a href="">Commerce</a></li>
                      <li><a href="">Insights</a></li>
                      <li><a href="">Promotion</a></li>
                    </ul>
                  </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer f-link">
                    <h3>Support</h3>
                    <ul>
                      <li><a href="">Pricing</a></li>
                      <li><a href="">Documentation</a></li>
                      <li><a href="">Guides</a></li>
                      <li><a href="">API Status</a></li>
                      <li><a href="">Live Support</a></li>
                    </ul>
                  </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer f-link">
                    <h3>Company</h3>
                    <ul>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Our Blog</a></li>
                      <li><a href="">Jobs</a></li>
                      <li><a href="">Press</a></li>
                      <li><a href="">Contact Us</a></li>
                    </ul>
                  </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer f-link">
                    <h3>Legal</h3>
                    <ul>
                      <li><a href="">Terms & Conditions</a></li>
                      <li><a href="">Privacy Policy</a></li>
                      <li><a href="">Catering Services</a></li>
                      <li><a href="">Customer Relations</a></li>
                      <li><a href="">Innovation</a></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
