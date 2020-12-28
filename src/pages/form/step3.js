import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Form from '../../layout/Form'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Switch from '../../components/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
//import { useSelector } from 'react-redux'
import theme from '../../theme'
import { useRouter } from 'next/router'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { logEvent } from '../../utils/tracker'

const useStyles = makeStyles((theme) => ({
  coverlist: {
    borderBottom: '1px solid #d7d7d7',
    fontStyle: 'italic',
    padding: '12px 30px 12px 60px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding: '10px 20px'
    },
    '& span': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        fontSize: 15
      }
    },
    '& label': {
      marginLeft: 0,
      width: '100%',
      justifyContent: 'space-between'
    },
    '&:last-of-type': {
      borderBottom: 0
    }
  },
  coverparent: {
    padding: 0
  },
  leftside: {
    borderRight: '1px solid #d7d7d7'
  },
  disclaimer: {
    fontSize: 14,
    lineHeight: '19px',
    color: '#777',
    marginTop: 0,
    marginBottom: 30,
    '& a': {
      color: theme.palette.cep.primary,
      textDecoration: 'underline'
    }
  },
  submitbutton: {
    fontSize: 25,
    paddingTop: 13,
    paddingBottom: 13,
    fontWeight: 800,
    textTransform: 'unset',
    backgroundColor: theme.palette.cep.secondary,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#035AA6'
    }
  }
}))

export default function Step3(props) {
  const classes = useStyles(props)
  const router = useRouter()
  //const state = useSelector((state) => state.counter.form)

  // if (state.covertype == 'none' || state.postcode == '') {
  //   router.push(`/form/step1`).then(() => window.scrollTo(0, 0))
  // } else {
  //   if (state.age == '' || state.fund == '') {
  //     router.push(`/form/step2`).then(() => window.scrollTo(0, 0))
  //   }
  // }

  const [coverList, setCoverList] = useState(null)

  useEffect(async () => {
    if (coverList == null) {
      const res = await fetch('/api/coverlist')
      const data = await res.json()
      setCoverList(data)
    }

    logEvent({
      event_type: `Opened Form Step 3`
    })
  }, [])

  const CoverItem = ({ item }) => {
    return (
      <ListItem className={classes.coverlist} button>
        <FormControlLabel value={item.label} control={<Switch />} label={item.name} labelPlacement="start" />
      </ListItem>
    )
  }

  return (
    <>
      <section className="hero">
        <Container style={{ maxWidth: 1120 }}>
          <h1>Make your health insurance cover work for you.</h1>
        </Container>
      </section>

      <section className="sub-intro">
        <Container style={{ maxWidth: 1200 }}>
          <h2>Simply choose the benefits most important to you to receive personalised cover options.</h2>

          <Grid container space={4}>
            <Grid item xs={12} md={12}>
              {/* HOSPITAL: */}
              <div className="coverbox">
                <div className="coverbox--head">
                  <h2>Hospital Cover</h2>
                </div>
                <div className="coverbox--body">
                  <Grid container space={0}>
                    <Grid item xs={12} md={6} className={classes.leftside}>
                      {coverList != null && (
                        <List className={classes.coverparent}>
                          {coverList.hospitalCovers.map((item, i) => {
                            if (i < 8) return <CoverItem key={item.label} item={item} />
                          })}
                        </List>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {coverList != null && (
                        <List className={classes.coverparent}>
                          {coverList.hospitalCovers.map((item, i) => {
                            if (i >= 8) return <CoverItem key={item.label} item={item} />
                          })}
                        </List>
                      )}
                    </Grid>
                  </Grid>
                </div>
              </div>

              {/* EXTRAS */}
              <div className="coverbox">
                <div className="coverbox--head">
                  <h2>Extras Cover</h2>
                </div>
                <div className="coverbox--body">
                  <Grid container space={0}>
                    <Grid item xs={12} md={6} className={classes.leftside}>
                      {coverList != null && (
                        <List className={classes.coverparent}>
                          {coverList.extraCovers.map((item, i) => {
                            if (i < 7) return <CoverItem key={item.label} item={item} />
                          })}
                        </List>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {coverList != null && (
                        <List className={classes.coverparent}>
                          {coverList.extraCovers.map((item, i) => {
                            if (i >= 7) return <CoverItem key={item.label} item={item} />
                          })}
                        </List>
                      )}
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* Disclaimer */}
          <p className={classes.disclaimer}>
            By clicking &apos;Continue search&apos;, I acknowledge that I have read and agree to the{' '}
            <a href="/terms-of-use/">Terms of Use</a>, the <a href="/privacy-policy/">Privacy Policy</a> and the &nbsp;
            <a href="/collection-notice/">Collection Notice</a>. I confirm that you may contact me about your services.
            I consent to you using sensitive personal information that you may collect for the purposes of providing
            your products and services.
          </p>

          {/* SUBMIT */}
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            disableElevation
            className={classes.submitbutton}
            onClick={() => {
              logEvent({
                event_type: `Submitted Form Step 3`
              })
              router.push('/form/step4/')
            }}
            fullWidth>
            Continue
          </Button>
        </Container>
      </section>

      {/* JSX Styling */}
      <style jsx>{`
        .hero {
          background-color: ${theme.palette.cep.primary};
          padding: 40px 0;
          color: #fff;

          h1 {
            font-weight: 800;
            font-size: 42px;
            line-height: 54px;
            color: #fff;
            margin-top: 26px;
            margin-bottom: 26px;
            text-align: center;
            @media screen and (max-width: 769px) {
              font-size: 20px;
              line-height: 30px;
              text-align: center;
              font-weight: 700;
              margin-top: 0;
              margin: 0;
            }
          }
        }
        .sub-intro {
          padding: 30px 0 0;
          @media screen and (max-width: 769px) {
            margin-bottom: 30px;
          }
          h2 {
            font-size: 21px;
            line-height: 21px;
            color: #404040;
            text-align: center;
            font-weight: 400;
            @media screen and (max-width: 769px) {
              font-size: 16px;
              line-height: 22px;
              text-align: center;
              margin: 0;
            }
          }
          .coverbox {
            margin: 30px 0;
            background: #fff;
            border: 1px solid #e6e6e6;
            box-sizing: border-box;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
            .coverbox--head {
              padding: 15px 60px;
              background: ${theme.palette.cep.primary};
              border-radius: 4px;
              @media screen and (max-width: 769px) {
                padding: 15px 20px;
              }
              h2 {
                margin: 0;
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 33px;
                color: #fff;
                text-align: left;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

Step3.Layout = Form
