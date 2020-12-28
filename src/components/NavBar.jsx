import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

//const useStyles = makeStyles((theme) => ({
const useStyles = makeStyles((theme) => ({
  getquotes: {
    borderBottom: `3px solid ${theme.palette.primary.darken1}`
  }
}))

export default function NavBar(props) {
  const classes = useStyles(props)
  const { isamp, logo, cta, height, ...other } = props
  const logoImg = logo ? logo : '/static/logo-cep.svg'
  const chevron = '/static/img/chevron-right.svg'
  return (
    <>
      <header {...other}>
        <Container style={{ maxWidth: 1100 }}>
          <Grid container spacing={2} justify="space-between" alignItems="center">
            {/* Left Content */}
            <Grid xs={6} md={3} item>
              {!isamp ? (
                <img src={logoImg} loading="lazy" alt="Logo" width="195" height="44.82" className="logo" />
              ) : (
                <amp-img src={logoImg} width="195" height="44.82" layout="responsive"></amp-img>
              )}
            </Grid>

            {/* Sidebar */}
            <Grid xs={6} md={9} item style={{ textAlign: 'right' }}>
              {cta != null ? (
                cta
              ) : (
                <Button className={classes.getquotes} variant="contained" color="primary" disableElevation={true}>
                  Get Quotes
                  {!isamp && <img src={chevron} alt="chevron" width="20" height="20" style={{ marginLeft: 5 }} />}
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </header>
      <style jsx>
        {`
          header {
            background: #fff;
            padding: ${height ? '10px 0' : '13px 0'};
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
            height: ${height ? height + 'px' : 'auto'};
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
