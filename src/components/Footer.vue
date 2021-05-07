<template>
  <div>
    <section class="w3l-footer-22-main">
      <div class="footer-hny py-5">
        <div class="container py-lg-4">
          <div class="sub-columns row">
            <div class="sub-one-left col-lg-4 col-md-6">
              <h6>About</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                officia dicta magni ea at, culpa atque, rerum dolorum voluptas
                alias qui temporibus ex expedita obcaecati vel asperiores totam
                distinctio nobis impedit minus.
              </p>
            </div>
            <div class="sub-two-right col-lg-4 col-md-6 my-md-0 my-5">
              <h6>Quick links</h6>
              <div class="footer-hny-ul">
                <ul>
                  <li><a href="#!">Home</a></li>
                  <li><a href="#!">About</a></li>
                  <li><a href="#!">Services</a></li>
                  <li><a href="#!">Contact</a></li>
                </ul>
                <ul>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#!">Support</a></li>
                </ul>
              </div>
            </div>

            <div class="sub-one-left col-lg-4 col-md-6 mt-lg-0 mt-md-5">
              <h6>Subscribe to our Newsletter</h6>
              <form action="#" method="post" class="footer-newsletter">
                <div class="">
                  <input
                    type="email"
                    name="email"
                    class="form-input"
                    placeholder="Enter your email.."
                  />
                </div>
                <button type="submit" class="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="below-section">
        <div class="container">
          <div class="copyright-footer row">
            <div class="columns col-lg-6">
              <ul class="social footer">
                <li>
                  <a href="#"
                    ><span class="fab fa-facebook" aria-hidden="true"></span
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><span class="fab fa-linkedin" aria-hidden="true"></span
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><span class="fab fa-twitter" aria-hidden="true"></span
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><span class="fab fa-google" aria-hidden="true"></span
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><span class="fab fa-instagram" aria-hidden="true"></span
                  ></a>
                </li>
              </ul>
            </div>
            <div class="columns copy-right col-lg-6">
              <p>
                © 2021 Cinemax Pro. All rights reserved. Developed by
                <a href="https://ambrosedev.netlify.app/" target="_blank">
                  TSDC</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.w3l-footer-22-main {
  /*--/responsive--*/
  /*--//responsive--*/
}

.w3l-footer-22-main .footer-hny {
  background: #101d29;
}

.w3l-footer-22-main .sub-columns h3 {
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 20px;
}

.w3l-footer-22-main .footer-hny-ul {
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: 20px;
}

.w3l-footer-22-main .sub-two-right ul li {
  list-style: none;
}

.w3l-footer-22-main .sub-one-left h6,
.w3l-footer-22-main .sub-two-right h6 {
  color: #fff;
  font-size: 22px;
  line-height: 22px;
  text-transform: capitalize;
  margin-bottom: 22px;
  border-bottom: 1px solid #2e3740;
  padding-bottom: 22px;
  font-weight: 700;
}

.w3l-footer-22-main .sub-columns p {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #8f9eab;
}

.w3l-footer-22-main .copyright-footer {
  margin-top: 12px;
}

.w3l-footer-22-main ul.social.footer li,
.w3l-footer-22-main ul.jst-link li {
  display: inline-block;
  margin-right: 15px;
}

.w3l-footer-22-main ul.social.footer {
  padding: 0;
}

.w3l-footer-22-main ul.social.footer li a {
  color: #fff;
}

.w3l-footer-22-main ul.social.footer li a {
  color: #fff;
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: #243442;
  text-align: center;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  -ms-border-radius: 4px;
}

.w3l-footer-22-main ul.social.footer li a:hover {
  background: #ff6768;
  transition: 0.3s ease;
}

.w3l-footer-22-main ul.social.footer li a span {
  color: #fff;
  font-size: 18px;
  line-height: 35px;
}

.w3l-footer-22-main .columns.copy-right {
  text-align: right;
}

.w3l-footer-22-main .columns p,
.w3l-footer-22-main .columns p a {
  font-size: 15px;
  line-height: 20px;
  color: #8f9eab;
}

.w3l-footer-22-main .sub-two-right ul li a {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #8f9eab;
  margin: 0 0 10px 0;
  display: block;
}

.w3l-footer-22-main .columns p a {
  color: #fff;
}

.w3l-footer-22-main .columns p a:hover,
.w3l-footer-22-main .sub-two-right ul li a:hover {
  color: #fff;
}

.w3l-footer-22-main .right-side h4 {
  font-size: 30px;
  line-height: 40px;
  color: #fff;
}

.w3l-footer-22-main .below-section {
  background-color: #0b1721;
  padding: 10px 0;
}

.w3l-footer-22-main .column2 span {
  font-size: 18px;
  color: #fff;
  vertical-align: middle;
  margin-right: 10px;
  width: 25px;
  text-align: center;
}

.w3l-footer-22-main .column2 a {
  text-decoration: none;
  color: #8f9eab;
  line-height: 25px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
}

.w3l-footer-22-main .href2 {
  margin-top: 10px;
  padding: 10px 0;
}

.w3l-footer-22-main .footer-newsletter input {
  padding: 15px 15px;
  width: 100%;
  width: 100%;
  border: none;
  background: #fff;
  color: #888;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
}

.w3l-footer-22-main .footer-newsletter button.btn {
  padding: 12px 40px;
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: 700;
  display: block;
  background: #ff6768;
  border: 2px solid transparent;
  width: 100%;
  text-transform: capitalize;
}

.w3l-footer-22-main .footer-newsletter button.btn:hover {
  opacity: 0.8;
}

.w3l-footer-22-main #movetop {
  position: fixed;
  bottom: 12px;
  right: 15px;
  z-index: 99;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  width: 38px;
  height: 38px;
  background: #101d29;
  padding: 0;
  line-height: 38px;
  transition: 0.5s ease-out;
  border-radius: 50%;
}

.w3l-footer-22-main #movetop:hover {
  background: #ff6768;
}

@media (max-width: 992px) {
  .w3l-footer-22-main .sub-one-left h6,
  .w3l-footer-22-main .sub-two-right h6 {
    font-size: 20px;
  }
}

@media (max-width: 992px) {
  .w3l-footer-22-main .copyright-footer {
    -moz-text-align-last: center;
    text-align-last: center;
  }
  .w3l-footer-22-main .copy-right {
    margin-top: 10px;
  }
}

@media (max-width: 600px) {
  .w3l-footer-22-main .copyright-footer {
    -moz-text-align-last: center;
    text-align-last: center;
  }
}
</style>
