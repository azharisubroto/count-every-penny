import dynamic from 'next/dynamic'
import LineSeparator from '@/components/LineSeparator'
const Partners = dynamic(() => import('@/components/Partners'))

export default function FooterSimple(props) {
  const { isamp, ...other } = props
  return (
    <>
      <LineSeparator />
      <footer className="footer pt-3" {...other}>
        <div className="container">
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
                <a href="mailto:contact@counteverypenny.com.au">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Partners */}
          <div style={{ maxWidth: 700 }} className="mx-auto">
            {!isamp && <Partners />}
          </div>

          <LineSeparator />

          {/* Copyright */}
          <p className="copyright">
            &copy; Copyright Count Every Penny 2021. All rights reserved. Counteverypenny.com.au or the companies it
            works with do not compare all products in the market. The availability of products compared may change from
            time to time. Not all products available from our partners are compared and not all products are available
            to all customers. This is a sponsored article and is intended as an advertisement, not editorial content.
            Asymmetric Information ATF Sideprojects Unit Trust.
          </p>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .footer {
          background-color: #fff;
          text-align: center;

          a {
            color: #333;
            text-decoration: none;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            list-style: none;
            padding-left: 0;
            li {
              margin: 0 10px;
              margin-bottom: 20px;
              font-weight: 700;
              font-weight: bold;
              font-size: 16px;
              line-height: 22px;
              text-align: center;
              color: #333;
              @media screen and (max-width: 767px) {
                width: calc(50% - 20px);
              }
            }
          }

          .copyright {
            font-size: 14px;
            line-height: 22px;
            margin: 20px auto 0;
            font-weight: 400;
            color: #333;
            padding-bottom: 20px;
          }
        }
      `}</style>
      <style jsx global>
        {`
          .line-separator {
            margin: 10px 0 !important;
          }
        `}
      </style>
    </>
  )
}
