import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Logo from '@/components/Logo'

export default function NavBarForm(props) {
  let l_width = 177,
    l_height = 40

  if (props.logoprops) {
    const { logoWidth, logoHeight } = props.logoprops
    l_width = logoWidth ? logoWidth : '177'
    l_height = logoHeight ? logoHeight : '40'
  }
  return (
    <>
      <header {...props}>
        <Container style={{ maxWidth: 1200 }}>
          <Grid container spacing={0} justify="space-between" alignItems="center">
            {/* Left Content */}
            <Grid xs={6} item>
              <div className="logo">
                <Logo width={l_width} height={l_height} />
              </div>
            </Grid>

            {/* Sidebar */}
            <Grid xs={6} item style={{ textAlign: 'right' }}>
              <div className="phonebutton">
                <div className="icon">
                  <img src="/static/img/phone.svg" loading="lazy" width="32" height="32" alt="" />
                </div>
                <div className="number">
                  <a href="tel:1300163402">1300 163 402</a>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </header>

      {/* Style */}
      <style jsx>
        {`
          header {
            background: #fff;
            min-height: 60px;
            display: flex;
            width: 100%;
            align-items: center;
            line-height: 0;
            position: relative;
            z-index: 100;
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
          }

          .phonebutton {
            font-size: 20px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;
            line-height: 0;
            font-weight: 700;
            .number {
              @media screen and (max-width: 500px) {
                font-size: 16px;
              }
            }
          }

          .logo {
            @media screen and (max-width: 500px) {
              max-width: 150px;
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}
