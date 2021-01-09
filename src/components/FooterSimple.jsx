import Partners from '@/components/Partners'

export default function FooterSimple(props) {
  const { isamp, ...other } = props
  const logo = '/static/img/logo-cep.svg'
  return (
    <>
      <footer className="footer" {...other}>
        {!isamp ? (
          <img src={logo} loading="lazy" alt="Logo" width="152" height="35" className="logo" />
        ) : (
          <amp-img src={logo} width="152" height="35" layout="fixed" className="logo"></amp-img>
        )}

        {/* Footer Menu */}
        <div>
          <ul>
            <li>
              <a href="https://counteverypenny.com.au">Privacy Policy</a>
            </li>
            <li>
              <a href="https://counteverypenny.com.au">Terms of Use</a>
            </li>
            <li>
              <a href="https://counteverypenny.com.au">Contact Us</a>
            </li>
            <li>
              <a href="https://counteverypenny.com.au">Facebook</a>
            </li>
          </ul>
        </div>

        {/* Partners */}
        <div className="container" style={{ maxWidth: 700 }}>
          {!isamp && <Partners />}
        </div>

        {/* Copyright */}
        <p className="copyright text-14">
          <strong>
            &copy; Copyright Count Every Penny 2013-2018. All rights reserved. Counteverypenny.com.au does not compare
            all products in the market. The availability of products compared may change from time to time. Not all
            products available from our partners are compared and not all products are available to all customers.
          </strong>
        </p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .footer {
          background: #fff;
          padding: 20px 0;
          text-align: center;
          border-top: 1px solid #eeeeee;
          margin-top: 50px;

          a {
            color: #000;
            text-decoration: none;
          }

          @media screen and (max-width: 500px) {
            text-align: left;
            padding-left: 40px;
            padding-right: 40px;
            background: #fafafa;
          }

          .logo {
            display: none;
            @media screen and (max-width: 500px) {
              display: inline-block;
            }
          }

          ul {
            display: block;
            list-style: none;
            padding-left: 0;
            @media screen and (max-width: 500px) {
              columns: 2;
              -webkit-columns: 2;
              -moz-columns: 2;
              margin-top: 30px;
              padding-bottom: 10px;
              border-bottom: 1px solid #cacaca;
            }
            li {
              line-height: 1;
              display: inline-block;
              margin: 0 10px;
              font-weight: 700;
              @media screen and (max-width: 500px) {
                margin: 0 20px 20px 0;
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
