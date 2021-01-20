import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Form from '@/layout/Form'
import List from '@material-ui/core/List'
import CoverItem from '@/components/CoverItem'
import Tooltip from '@material-ui/core/Tooltip'
import { useSelector, useDispatch } from 'react-redux'
import { formCounter } from '@/store/counter/action'
import theme from '@/theme'
import { useRouter } from 'next/router'
import { init, logEvent } from '@/utils/analytics'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
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
      color: theme.palette.cep.secondary,
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

function Step3(props) {
  const classes = useStyles(props)
  const router = useRouter()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.counter.form)

  const [coverList] = useState(props.data)
  const hospitalCovers = state.hospitalCovers
  const extraCovers = state.extraCovers

  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened Form Step 3')
    }
  }, [])

  // Handle Change Switch
  const handleChange = (e) => {
    const key = e.target.value
    const check = e.target.checked
    const type = e.target.name

    // current_hospital
    if (type == 'hospital') {
      var current_hospital = hospitalCovers
      if (check !== false) {
        current_hospital.push(key)
      } else {
        var index = current_hospital.indexOf(key)
        if (index !== -1) {
          current_hospital.splice(index, 1)
        }
      }

      // Dispatch
      dispatch(
        formCounter({
          ...state,
          hospitalCovers: current_hospital
        })
      )
    }

    // Extra
    else {
      var current_extra = extraCovers
      if (check !== false) {
        current_extra.push(key)
      } else {
        var idx = current_extra.indexOf(key)
        if (idx !== -1) {
          current_extra.splice(idx, 1)
        }
      }

      // Dispatch
      dispatch(
        formCounter({
          ...state,
          extraCovers: current_extra
        })
      )
    }
  }

  // Handle submit
  const handleSubmit = () => {
    if (state.hospitalCovers.length > 0 || state.extraCovers.length > 0) {
      logEvent(`Submitted Form Step 3`)
      dispatch(
        formCounter({
          ...state,
          step_passed: 3
        })
      )

      const utms = {
        ...(router.query.utm_source && { utm_source: router.query.utm_source }),
        ...(router.query.utm_medium && { utm_medium: router.query.utm_medium }),
        ...(router.query.utm_campaign && { utm_campaign: router.query.utm_campaign }),
        ...(router.query.utm_content && { utm_content: router.query.utm_content }),
        ...(router.query.utm_term && { utm_term: router.query.utm_term })
      }

      const urlparam = Object.entries(utms)
        .map(([key, val]) => `${key}=${val}`)
        .join('&')

      router
        .push(`/form/step4${Object.keys(urlparam).length > 0 ? '?' + urlparam : ''}`)
        .then(() => window.scrollTo(0, 0))
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <>
      <section className="hero text-start py-md-5 py-4">
        <Container style={{ maxWidth: 1120 }}>
          {/* HEADING AND IMAGE */}
          <Grid container spacing={4}>
            <Grid item md={7}>
              <h1 className="my-0" style={{ marginBottom: 0, marginTop: 30, textAlign: 'left!important' }}>
                Make your health insurance cover work for you.
              </h1>
            </Grid>
            <Grid item md={5}>
              <div className="hero-img-type text-md-end">
                <img src="/static/img/mascott.svg" alt="" width="227" height="332" loading="lazy" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="sub-intro">
        <Container style={{ maxWidth: 1200 }}>
          <h2>Simply choose the benefits most important to you to receive personalised cover options.</h2>

          {hospitalCovers.length == 0 && extraCovers == 0 && (
            <div className="error">You need to select at least one cover option</div>
          )}

          {/* <pre>{JSON.stringify(hospitalCovers, null, 2)}</pre>
          <pre>{JSON.stringify(extraCovers, null, 2)}</pre> */}

          <Grid container space={4}>
            <Grid item xs={12} md={12}>
              {/* HOSPITAL: */}
              <div className="coverbox">
                <div className="coverbox--head">
                  <h2>Hospital Cover</h2>
                </div>
                <div className="coverbox--body">
                  {/* Status: {hospitalCovers['private_hospital_shared'] !== false ? 'checked' : 'not checked'} */}
                  <Grid container space={0}>
                    <Grid item xs={12} md={6} className={classes.leftside}>
                      {coverList != null && (
                        <List className={classes.coverparent}>
                          {coverList.hospitalCovers.map((item, i) => {
                            if (i < 8)
                              return (
                                <CoverItem
                                  key={item.label}
                                  title={item.name}
                                  value={item.label}
                                  name="hospital"
                                  checked={state.hospitalCovers.indexOf(item.label) !== -1 ? true : false}
                                  onClick={handleChange}
                                />
                              )
                          })}
                        </List>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {coverList != null && (
                        <List className={classes.coverparent}>
                          {coverList.hospitalCovers.map((item, i) => {
                            if (i >= 8)
                              return (
                                <CoverItem
                                  key={item.label}
                                  title={item.name}
                                  value={item.label}
                                  name="hospital"
                                  checked={state.hospitalCovers.indexOf(item.label) !== -1 ? true : false}
                                  onChange={handleChange}
                                />
                              )
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
                            if (i < 7)
                              return (
                                <CoverItem
                                  key={item.label}
                                  title={item.name}
                                  value={item.label}
                                  name="extra"
                                  checked={state.extraCovers.indexOf(item.label) !== -1 ? true : false}
                                  onChange={handleChange}
                                />
                              )
                          })}
                        </List>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {coverList != null && (
                        <List className={classes.coverparent}>
                          {coverList.extraCovers.map((item, i) => {
                            if (i >= 7)
                              return (
                                <CoverItem
                                  key={item.label}
                                  title={item.name}
                                  value={item.label}
                                  name="extra"
                                  checked={state.extraCovers.indexOf(item.label) !== -1 ? true : false}
                                  onChange={handleChange}
                                />
                              )
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
            <Tooltip
              style={{ maxWidth: 500 }}
              arrow
              interactive
              title="Personal information is being collected by Asymmetric Information (AM) who can be contacted at compliance@asymmetricinformation.com.au. Personal information is being collected by AI so that AI can provide and market its products and services to you which may include telephone calls to you about our products and services.If AI does not collect personal information from you, AI will not, nor will our partners, be able to provide its products or services to you.To provide AI's products and services, AI may need to disclose personal information to commercial partners to fulfil your requests or third party service providers who provide services to AI.For more information, please review our Privacy Policy.In some circumstances AI may disclose personal information to overseas recipients in the United States of America, Serbia, Philippines & India.">
              <a href="/collection-notice/">Collection Notice</a>
            </Tooltip>
            . I confirm that you may contact me about your services. I consent to you using sensitive personal
            information that you may collect for the purposes of providing your products and services.
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
              handleSubmit()
            }}
            fullWidth>
            Continue
          </Button>
        </Container>
      </section>

      {/* JSX Styling */}
      <style jsx>{`
        .hero {
          position: relative;
          z-index: 0;
          overflow: hidden;
          @media screen and (min-width: 1024px) {
            background: #f9f9f9;
            &:before {
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              height: 100%;
              width: 100%;
              transform-origin: top left;
              background: ${theme.palette.cep.primary};
              content: '';
              z-index: -1;
            }
            &:after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              height: 300px;
              width: 300px;
              background: url('/static/img/decoration.svg') no-repeat top right;
              z-index: -1;
            }
          }
          @media screen and (max-width: 1023px) {
            background: ${theme.palette.cep.primary};
            padding: 40px 0;
          }
          @media screen and (max-width: 769px) {
            margin-bottom: 40px;
          }
          h1 {
            font-weight: 800;
            font-size: 42px;
            line-height: 54px;
            color: #fff;
            margin-bottom: 26px;
            margin-top: 0;
            @media screen and (max-width: 769px) {
              font-size: 20px;
              line-height: 30px;
              text-align: center;
              font-weight: 700;
              margin: 0;
            }
          }
          .hero-img-type {
            text-align: right;
            position: absolute;
            top: 0;
            right: 5%;
            img {
              height: 332px;
              width: 267px;
              position: relative;
              transform: translateX(50px);
            }
            @media screen and (max-width: 769px) {
              display: none;
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

        .error {
          text-align: center;
          font-size: 20px;
          margin-top: 25px;
          padding: 15px 0;
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
          margin-bottom: 1rem;
          border: 1px solid transparent;
          border-radius: 0.25rem;
          position: relative;
          font-weight: 800;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://counteverypenny.com.au/api/coverlist')
  const data = await res.json()

  // By returning { props: posts }, the Blog component
  return {
    props: {
      data
    }
  }
}
Step3.Layout = Form

export default Step3
