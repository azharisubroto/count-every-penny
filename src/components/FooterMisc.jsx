export default function FooterMisc(props) {
  const { isamp, ...other } = props
  const logo = '/static/img/logo-cep.svg'
  return (
    <>
      <footer className="footer" {...other} id="footer">
        {!isamp ? (
          <img src={logo} loading="lazy" alt="Logo" width="152" height="35" className="logo" />
        ) : (
          <amp-img src={logo} width="152" height="35" layout="fixed" className="logo"></amp-img>
        )}

        {/* Footer Menu */}
        <div>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms of Use</a>
            </li>
            <li>
              <a href="mailto:asymmetricinfoau@gmail.com">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <p className="copyright">
          &copy; Copyright Count Every Penny 2021. All rights reserved. Counteverypenny.com.au or the companies it works
          with do not compare all products in the market. The availability of products compared may change from time to
          time. Not all products available from our partners are compared and not all products are available to all
          customers. This is a sponsored article and is intended as an advertisement, not editorial content. Asymmetric
          Information ATF Sideprojects Unit Trust.
        </p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .footer {
          background: #fff;
          padding: 20px 0;
          text-align: center;
          margin-top: 50px;

          a {
            color: #000;
            text-decoration: none;
          }

          .logo {
            display: none;
            @media screen and (max-width: 500px) {
              display: none;
            }
          }

          ul {
            display: block;
            list-style: none;
            padding-left: 0;

            @media screen and (max-width: 768px - 1) {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }

            li {
              line-height: 1;
              display: inline-block;
              margin: 0 10px;
              font-weight: 700;
              @media screen and (max-width: 768px - 1) {
                margin-bottom: 10px;
                width: 35%;
                text-align: center;
              }
            }
          }

          .copyright {
            font-size: 12px;
            line-height: 22px;
            max-width: 1050px;
            margin: 20px auto 0;
            color: #25282b;
          }
        }
      `}</style>
    </>
  )
}
