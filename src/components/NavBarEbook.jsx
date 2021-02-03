import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export default function NavBarForm(props) {
  return (
    <>
      <header {...props}>
        <Container style={{ maxWidth: 1200 }}>
          <Grid container spacing={0} justify="space-between" alignItems="center">
            {/* Left Content */}
            <Grid xs={6} item>
              <div className="logo">
                <img src="/static/logo-cep.svg" className="logo-white" alt="Count Every Penny" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </header>

      {/* Style */}
      <style jsx>
        {`
          header {
            background-color: #fff;
            display: flex;
            width: 100%;
            align-items: center;
            line-height: 0;
            position: relative;
            z-index: 100;
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
            padding: 11px 0;

            @media screen and (min-width: 768px) and (max-width: 992px - 1) {
              padding: 11.5px 0;
            }
            @media screen and (max-width: 767px) {
              padding: 11.5px 0;
            }
          }

          .logo {
            img {
              height: 43px;
              width: auto;
              @media screen and (min-width: 768px) and (max-width: 992px - 1) {
                height: 37px;
              }
              @media screen and (max-width: 767px) {
                height: 37px;
              }
            }
          }
        `}
      </style>
    </>
  )
}
