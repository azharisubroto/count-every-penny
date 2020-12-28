import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import theme from '../theme'

export default function Footer(props) {
  return (
    <>
      <footer className="footer" {...props}>
        <Container style={{ maxWidth: 1120 }}>
          <div className="footer-intro">
            Health Insurance Comparison does not compare all products in the market. The availability of products
            compared may change from time to time. Not all products available from our partners are compared and not all
            products are available to all customers.
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} sd={6} md={3} lg={3}>
              <img src="/static/logo-cep.svg" loading="lazy" alt="Logo" width="211" height="48" className="logo" />
              <p style={{ color: '#a4a4a4' }}>Level 7 / 222 Pitt Street, Sydney, NSW 2000</p>
            </Grid>
            <Grid item xs={6} sm={3} sd={3} md={3} lg={3}>
              <ul className="list-unstyled">
                <li>
                  <a href="https://google.com">About Us</a>
                </li>{' '}
                <li>
                  <a href="https://google.com">Health Funds</a>
                </li>{' '}
                <li>
                  <a href="https://google.com">Guides</a>
                </li>{' '}
                <li>
                  <a href="https://google.com">Careers</a>
                </li>{' '}
                <li>
                  <a href="https://google.com">Contact Us</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={3} sd={3} md={3} lg={3}>
              <ul className="list-unstyled">
                <li>
                  <a href="https://google.com">Privacy Policy</a>
                </li>{' '}
                <li>
                  <a href="https://google.com">Terms of use</a>
                </li>{' '}
                <li>
                  <a href="https://google.com">FAQ</a>
                </li>{' '}
                <li>
                  <a href="https://google.com">Complaints</a>
                </li>{' '}
                <li></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={2} sd={3} md={3} lg={3}>
              <img
                src="https://cdn.statically.io/img/asset.healthinsurancecomparison.com.au/wp-content/uploads/2020/04/27062614/PHII-Logo-SPOT.jpg?f=auto&width=106"
                width="106"
                height="78"
                loading="lazy"
                alt="PHII"
              />
              <p className="copyright">&copy; Copyright Count Every Penny 2020</p>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <style jsx>{`
        .footer {
          background: #fff;
          padding: 20px 0 30px;
          border-top: 1px solid #eeeeee;
          margin-top: 0;

          @media screen and (max-width: 500px) {
            text-align: left;
            padding-left: 40px;
            padding-right: 40px;
            background: #fafafa;
            padding: 10px 20px 30px;
          }

          .footer-intro {
            max-width: 1070px;
            margin: 20px auto 30px;
            text-align: left;
            color: #707070;
            font-size: 16px;
          }

          ul:not(.list-unstyled) {
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

          .list-unstyled {
            padding: 0;
            margin: 0;
            list-style: none;

            @media screen and (max-width: 500px) {
              //margin: 20px 0;
            }

            li {
              display: block;
              line-height: normal;
              height: 32px;
              margin-bottom: 8px;
              a {
                color: ${theme.palette.primary.main};
                font-weight: 700;
                font-size: 15px;
              }
            }
          }

          img {
            max-width: 100%;
          }

          .copyright {
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 24px;
            color: #a4a4a4;
          }
        }
      `}</style>
    </>
  )
}
