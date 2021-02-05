import { makeStyles } from '@material-ui/styles'
import theme from '@/theme'
import dynamic from 'next/dynamic'
const Button = dynamic(() => import('@material-ui/core/Button'))

//const useStyles = makeStyles(() => ({
const useStyles = makeStyles(() => ({
  getquotes: {
    borderBottom: `3px solid ${theme.palette.primary.darken1}`
  }
}))

export default function NavBar(props) {
  const classes = useStyles(props)
  const { isamp, logo, cta, height, link, ...other } = props
  const logoImg = logo ? logo : '/static/logo-cep.svg'
  const chevron = '/static/img/chevron-right.svg'
  return (
    <>
      <header {...other}>
        <div className="container">
          <div className="row justify-content-between align-content-center">
            <div className="col-6 col-md-3">
              {!isamp ? (
                <img src={logoImg} loading="lazy" alt="Logo" width="195" height="44.82" className="logo" />
              ) : (
                <amp-img src={logoImg} width="195" height="44.82" layout="responsive"></amp-img>
              )}
            </div>

            <div className="col-6 col-md-9 text-right">
              {cta != null ? (
                cta
              ) : (
                <Button
                  href={link}
                  className={classes.getquotes}
                  variant="contained"
                  color="primary"
                  disableElevation={true}>
                  Get Quotes
                  {!isamp && <img src={chevron} alt="chevron" width="20" height="20" style={{ marginLeft: 5 }} />}
                </Button>
              )}
            </div>
          </div>
        </div>
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
