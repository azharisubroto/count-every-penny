import { useState, useEffect } from 'react'
import NavBarForm from '@/components/NavBarForm'
import FeefoSlide from '@/components/FeefoSlide'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import FindAnimation from '@/components/FindAnimation'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import LinearProgress from '@material-ui/core/LinearProgress'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import AwardBox from '@/components/AwardBox'
import FooterSimple from '@/components/FooterSimple'
import Head from 'next/head'
import Lottie from 'react-lottie'
import * as animationData from '@/components/Lottie/check.json'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import InputLabel from '@material-ui/core/InputLabel'
import theme from '@/theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import InputMask from 'react-input-mask'
import { useRouter, withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '@/store/store'
import { form4 } from '@/store/form4/action'
import axios from 'axios'
import { logEvent } from '@/utils/form4tracker'

// Styling
const coverstyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 18,
  fontWeight: 600,
  borderBottom: '1px solid #eee',
  height: 60,
  lineHeight: '60px'
}

const formControlTouch = {
  border: '1px solid #F09020',
  boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)'
}

const formControlStyle = {
  width: '100%',
  color: '#333',
  fontWeight: '700',
  maxWidth: 600,
  '& .MuiInputBase-formControl': {
    height: 60,
    minHeight: 60,
    lineHeight: '60px',
    '&:hover fieldset': formControlTouch,
    '&.Mui-focused fieldset': formControlTouch,
    [theme.breakpoints.down('sm')]: {
      height: 50,
      lineHeight: '50px',
      minHeight: 50,
      '& .MuiInputBase-input': {
        height: 50,
        lineHeight: '50px',
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 16
      }
    }
  },
  '& input': {
    fontWeight: 700,
    fontSize: 21
  },
  '& > div.Mui-error': {
    '& input': {
      color: 'red!important'
    },
    '& fieldset': {
      borderColor: 'red!important'
    }
  },
  '& fieldset': {
    border: '1px solid #dfdfdf',
    top: 0
  },
  '& .MuiSelect-select': {
    paddingTop: 0,
    paddingBottom: 0
  },
  '& > div > div': coverstyle,
  '& > div.Mui-error *': {
    color: 'red!important'
  }
}

const useStyles = makeStyles((theme) => ({
  bar: () => ({
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,.1)'
  }),
  filled: () => ({
    borderRadius: 90,
    backgroundColor: theme.palette.cep.yellow
  }),
  simplebtn: {
    backgroundColor: '#fff',
    border: '1px solid #D6D6D6',
    color: '#333333',
    lineHeight: '1',
    padding: '0 25px',
    height: 80,
    textTransform: 'capitalize',
    width: 200,
    margin: '0 10px',
    '&:hover, &.active': {
      border: '1px solid #F09020',
      boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)'
    },
    [theme.breakpoints.down('sm')]: {
      height: 58
    }
  },
  lifestageCard: {
    background: '#fff',
    border: '1px solid #d6d6d6',
    height: '180px',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center',
    letterSpacing: '0.03em',
    textTransform: 'capitalize',
    padding: '20px 15px',
    cursor: 'pointer',
    borderRadius: 4,
    transition: 'all 0.2s ease',
    '&.bw': {
      filter: 'grayscale(100%)'
    },
    '&:hover': {
      border: '1px solid #f09020',
      boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)',
      filter: 'grayscale(0)'
    },
    '&.active': {
      border: '1px solid #f09020',
      boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)',
      filter: 'grayscale(0)'
    },
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
      width: '100%',
      display: 'flex',
      textAlign: 'left',
      height: 'auto',
      padding: 10,
      alignItems: 'center',
      marginBottom: 10,
      borderRadius: 4,
      '& .MuiBox-root:first-of-type': {
        maxWidth: 42,
        marginRight: 0,
        paddingLeft: 0,
        '& img': {
          height: 42
        }
      },
      '& .MuiBox-root:last-of-type': {
        marginLeft: 'auto',
        marginTop: 0
      }
    }
  },
  lifestagecards: {
    '& .MuiBox-root': {
      flex: '1 1 15%',
      padding: '0 10px',
      [theme.breakpoints.down('md')]: {
        flex: '1 1 15%',
        padding: '0 10px'
      },
      [theme.breakpoints.down('sm')]: {
        flex: '1 1 100%',
        padding: '0 10px'
      }
    }
  },
  coverselect: {
    maxWidth: 500,
    width: '100%',
    color: '#333',
    fontWeight: '700',
    '& .MuiInputBase-formControl': {
      height: 60,
      minHeight: 60,
      lineHeight: '60px',
      '&:hover fieldset': formControlTouch,
      '&.Mui-focused fieldset': formControlTouch
    },
    '& input': {
      fontWeight: 700,
      fontSize: 21
    },
    '& > div.Mui-error': {
      '& input': {
        color: 'red!important'
      },
      '& fieldset': {
        borderColor: 'red!important'
      }
    },
    '& fieldset': {
      border: '1px solid #dfdfdf'
    },
    '& .MuiSelect-select': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '& > div > div': coverstyle,
    '& > div.Mui-error *': {
      color: 'red!important'
    }
  },
  coveritem: coverstyle,
  formcontrol: formControlStyle,
  submitbutton: {
    width: '100%',
    height: 60,
    background: '#035AA6',
    color: '#fff',
    fontSize: 18,
    textTransform: 'capitalize',
    '&:hover': {
      background: '#035AA6',
      color: '#fff'
    },
    '&.Mui-disabled': {
      background: '#D6D6D6',
      color: '#fff'
    }
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: '27px',
    color: '#474747',
    marginBottom: 10,
    textTransform: 'capitalize',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      marginBottom: 5
    }
  },
  feefocustom: {
    paddingBottom: 0,
    '& .MuiContainer-root': {
      padding: 0
    }
  },
  awardbox: {
    '& .card': {
      boxShadow: '0px 18px 24px rgba(0, 0, 0, 0.05)!important'
    }
  },
  keyfeatures: {
    background: 'rgba(255,255,255,.6)',
    padding: 20,
    marginTop: 10
  },
  featureitem: {
    display: 'block',
    paddingLeft: 35,
    background: 'url(/static/img/bi_check.svg) no-repeat left center',
    backgroundSize: '20px 20px',
    textAlign: 'left',
    fontSize: 14
  },
  backdrop: {
    zIndex: 999,
    color: '#fff'
  }
}))

// Life Stage list
const lifestagelists = [
  {
    img: '/static/img/form_b/icon-single-male.svg',
    text: 'Just for me - Male',
    value: 'single-male'
  },
  {
    img: '/static/img/form_b/icon-single-female.svg',
    text: 'Just for me - Female',
    value: 'single-female'
  },
  {
    img: '/static/img/form_b/icon-couple.svg',
    text: 'For me and my partner',
    value: 'couple'
  },
  {
    img: '/static/img/form_b/icon-family.svg',
    text: 'For my whole family',
    value: 'family'
  },
  {
    img: '/static/img/form_b/icon-single-parent.svg',
    text: 'For my family - single parent',
    value: 'single-parent'
  }
]

// Cover types
const covers = [
  {
    img: '/static/img/hospital-and-extras.svg',
    text: 'Hospital & Extras',
    value: 'hospital_extras'
  },
  {
    img: '/static/img/hospital.svg',
    text: 'Hospital Only',
    value: 'hospital'
  },
  {
    img: '/static/img/extras.svg',
    text: 'Extras Only',
    value: 'extras'
  }
]

// Fund lists
const funds = [
  'Select One',
  'AHM Health Insurance',
  'Australian Unity',
  'BUPA',
  'GMHBA',
  'HBF (Health Benefits Fund)',
  'HCF (Hospitals Contribution Fund)',
  'health.com.au',
  'Latrobe Health',
  'Medibank Provate',
  'NIB',
  'ACA Health Benefits',
  'Other fund or not listed',
  "I'm not currently insured"
]

const loadintexts = [
  'Reviewing your hospital cover preferences...',
  'Checking your extras cover selections...',
  'Searching health cover policy database...',
  'Looking for appropriate health cover options...'
]

// Main Component
function form4Page(props) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [step6texts, setStep6texts] = useState(loadintexts[0])
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const classes = useStyles(props)
  const state = useSelector((state) => state.form4.form)
  const dispatch = useDispatch()

  useEffect(() => {
    if (step == 1) {
      setProgress(0)

      // Log event
      logEvent({
        event_type: `Form 4: Opened Step 1`
      })
    } else if (step == 2) {
      setProgress(20)
      // Log event
      logEvent({
        event_type: `Form 4: Opened Step 2`
      })
    } else if (step == 3) {
      setProgress(40)
      // Log event
      logEvent({
        event_type: `Form 4: Opened Step 3`
      })
    } else if (step == 4) {
      setProgress(60)
      // Log event
      logEvent({
        event_type: `Form 4: Opened Step 4`
      })
    } else if (step == 5) {
      setProgress(85)
      // Log event
      logEvent({
        event_type: `Form 4: Opened Step 5`
      })
      setTimeout(() => {
        setStep6texts(loadintexts[1])
      }, 2000)

      setTimeout(() => {
        setStep6texts(loadintexts[2])
      }, 3000)

      setTimeout(() => {
        setStep6texts(loadintexts[3])
      }, 4000)

      setTimeout(() => {
        redirect(6)
      }, 5000)
    } else if (step == 6) {
      setProgress(90)
      // Log event
      logEvent({
        event_type: `Form 4: Opened Step 6`
      })
    } else if (step == 7) {
      setProgress(98)
      // Log event
      logEvent({
        event_type: `Form 4: Opened Step 7`
      })
    }
  }, [step])

  useEffect(() => {
    ValidatorForm.addValidationRule('isNotNone', (value) => {
      if (value != 'none') {
        return true
      }
      return false
    })
    ValidatorForm.addValidationRule('goodAge', (value) => {
      if (parseInt(value) < 18 || parseInt(value) > 120) {
        return false
      }
      return true
    })
    ValidatorForm.addValidationRule('auPhone', (phone_num) => {
      const phonePattern = /^0[0-8]\d{8}$/g
      return phonePattern.test(phone_num)
    })
    ValidatorForm.addValidationRule('allowedYears', (year) => {
      if (parseInt(year) < 1900 || parseInt(year) > 2003) {
        return false
      }
      return true
    })

    const thisstep = parseInt(router.query.step)
    if (thisstep > 1) {
      setStep(thisstep)
    } else {
      setStep(1)
    }
    // const statestep = parseInt(state.step_passed + 1)
    // if (statestep != thisstep) {
    //   router
    //     .push({
    //       pathname: '/form-4',
    //       query: {
    //         step: statestep
    //       }
    //     })
    //     .then(() => window.scrollTo(0, 0))
    // } else {
    //   if (thisstep > 1) {
    //     setStep(thisstep)
    //   } else {
    //     setStep(1)
    //   }
    // }
  })

  /**
   * Handle LifeStageClick
   */
  const handleLifeStageClick = (value) => {
    setTimeout(() => {
      dispatch(
        form4({
          ...state,
          lifestage: value,
          step_passed: 1
        })
      )
    }, 1000)

    router
      .push({
        pathname: '/form-4',
        query: {
          step: 2
        }
      })
      .then(() => window.scrollTo(0, 0))
  }

  /**
   * Set router
   */
  const redirect = (step) => {
    logEvent({
      event_type: `Form 4: Submitted Step ${step}`
    })
    router
      .push({
        pathname: '/form-4',
        query: {
          step: step
        }
      })
      .then(() => window.scrollTo(0, 0))
  }

  /**
   * Handle State change
   * @param {string} key - name of the state key
   * @param {any} value - value for the state
   */
  const setState = (key, value) => {
    dispatch(
      form4({
        ...state,
        [key]: value
      })
    )
  }

  const NohandleSubmit = () => {
    console.log('step 4')
  }

  /**
   * Hanle Submit
   * @param {*} param0
   */
  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/lead', {
        fullname: state.name,
        phone: state.phone,
        email: state.email,
        postcode: state.postcode,
        life_stage: state.lifestage,
        health_fund: state.fund,
        cover_type: JSON.stringify({
          hospital: state.cover_type == 'hospital_extras' || state.cover_type == 'hospital' ? 1 : 0,
          extras: state.cover_type == 'hospital_extras' || state.cover_type == 'extras' ? 1 : 0
        }),
        date_of_birth: state.yob,
        utm_source: router.query.utm_source ? router.query.utm_source : '',
        utm_medium: router.query.utm_medium ? router.query.utm_medium : '',
        utm_campaign: router.query.utm_campaign ? router.query.utm_campaign : '',
        utm_content: router.query.utm_content ? router.query.utm_content : '',
        utm_term: router.query.utm_term ? router.query.utm_term : ''
      })
      const data = await response.data

      if (data.status == 'success') {
        logEvent({
          event_type: `Form 4: Submitted Step 7`
        })
        router.push(`/thankyou`).then(() => window.scrollTo(0, 0))
      } else {
        logEvent({
          event_type: `Submission Failed`
        })
      }
      setLoading(false)
    } catch (error) {
      logEvent({
        event_type: `Submission Failed`
      })
      alert('An error occured')
      setLoading(false)
    }
  }

  /**
   * LifeStage Card
   * @param {Object} LifeStage - active state, image, text
   * @param {string} LifeStage.isActive - Card active
   * @param {string} LifeStage.img - Card Icon
   * @param {string} LifeStage.text - Card Text
   */
  const LifeStageCard = ({ isActive, img, text, noBlackWhite, ...other }) => {
    return (
      <>
        {/* Card Parent */}
        <div
          {...other}
          className={`${classes.lifestageCard} ${isActive ? 'active' : ''} ${noBlackWhite !== true ? 'color' : 'bw'}`}>
          <Box>
            <img src={img} alt="" width="70" height="70" />
          </Box>
          <Box mt={{ md: 1 }}>{text}</Box>
        </div>
      </>
    )
  }

  // Lottie options
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  // Slide Background
  const slideBg =
    'linear-gradient(69.17deg, #F5F5F5 1.82%, rgba(255, 255, 255, 0) 63.85%), linear-gradient(243.37deg, rgba(228, 228, 228, 0.4) 0%, rgba(255, 255, 255, 0.1) 49.83%);'

  const formatChars = {
    n: '[0-3]',
    m: '[0-9]',
    e: '[0-1]',
    d: '[0-9]',
    z: '[1-2]',
    y: '[0-9]'
  }
  return (
    <>
      <Head>
        <title>Compare Health Insurance</title>

        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NAVBAR */}
      <NavBarForm
        logoprops={{
          logoWidth: 245,
          logoHeight: 53
        }}
        style={{ padding: '10px 0' }}
      />

      {/* FORM HERO */}
      {(step < 5 || step == 7) && (
        <>
          <section className="hero">
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            <div className="container text-center">
              {step == 1 && (
                <Box pt={{ xs: 3, sm: 4, md: 4, lg: 4 }} mx={{ md: 5 }}>
                  <h1 className="text-24 lh-30 text-md-36 lh-md-40">
                    Compare, Switch, &amp; Save
                    <br />– We saved the average Aussie <span>$347.95</span> on their cover
                  </h1>
                </Box>
              )}

              {/* KEY FEATURES for STEP 1 only */}
              {step == 1 && (
                <div className={`${classes.keyfeatures} d-none d-md-block`}>
                  <Grid container spacing={0} alignItems="center">
                    {/* LEFT */}
                    <Grid item xs={12} md={3}>
                      <div className={classes.featureitem}>Policies from $2.93 per day</div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <div className={classes.featureitem}>No lock in contracts</div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <div className={classes.featureitem}>No fees or markups</div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <div className={classes.featureitem}>100% Australian owned & operated</div>
                    </Grid>
                  </Grid>
                </div>
              )}

              <Box>
                <div className="form_b_card">
                  <Box pt={{ xs: 2, sm: 3, md: 5, lg: 5 }} px={{ xs: 2, sm: 3, md: 5 }}>
                    {/* Linear Progress */}
                    <div className="progress-bar-main">
                      <div className="progress-indicator">{progress}%</div>
                      <LinearProgress
                        classes={{
                          colorPrimary: classes.bar,
                          barColorPrimary: classes.filled
                        }}
                        variant="determinate"
                        style={{ height: 30 }}
                        value={progress}
                      />
                    </div>

                    {/* Headling */}
                    {step < 8 && (
                      <Box mt={3}>
                        <div className="lookingfor text-20 lh-25 text-md-32 lh-md-40">
                          {step == 1 && <>I’m looking a Health cover for...</>}
                          {step == 2 && <>What kind of cover are you looking for?</>}
                          {step == 3 && <>Who is your current health fund?</>}
                          {step == 4 && <>Tell us about yourself</>}
                        </div>
                      </Box>
                    )}

                    {/* STEP 1 */}
                    {step == 1 && (
                      <Box
                        className={classes.lifestagecards}
                        mt={{ xs: 2, sm: 3, md: 4 }}
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="space-between">
                        {lifestagelists.map((item) => (
                          <Box key={item.value}>
                            <LifeStageCard
                              noBlackWhite
                              img={item.img}
                              text={item.text}
                              isActive={state.lifestage == item.value ? 'active' : ''}
                              onClick={() => handleLifeStageClick(item.value)}
                            />
                          </Box>
                        ))}
                      </Box>
                    )}

                    {step == 2 && (
                      <Box
                        className={classes.lifestagecards}
                        mt={{ xs: 2, sm: 3, md: 4 }}
                        mx="auto"
                        display="flex"
                        flexWrap="wrap"
                        maxWidth={700}
                        justifyContent="space-between">
                        {covers.map((item) => (
                          <Box key={item.value}>
                            <LifeStageCard
                              img={item.img}
                              text={item.text}
                              isActive={state.cover_type == item.value ? 'active' : ''}
                              onClick={() => {
                                setState('cover_type', item.value)
                                redirect(3)
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    )}

                    {/* STEP 4 */}
                    {step == 3 && (
                      <>
                        {/* Life Card Section */}
                        <Box mt={{ xs: 2, sm: 3, md: 4 }} pb={5} display="flex" justifyContent="center">
                          <Select
                            className={`${classes.coverselect}`}
                            placeholder="Select the cover type..."
                            variant="outlined"
                            value={state.fund}
                            onChange={(e) => {
                              setState('fund', e.target.value)
                            }}>
                            {funds.map((item) => (
                              <MenuItem
                                disabled={item == 'Select One'}
                                className={classes.coveritem}
                                key={item}
                                value={item}>
                                <div className={`${classes.seltext} seltext-root`}>{item}</div>
                              </MenuItem>
                            ))}
                          </Select>
                        </Box>

                        <Box maxWidth="740px" mx="auto" justifyContent="center" display="flex">
                          <Button
                            disabled={state.fund == 'Select One' || state.fund == 'none'}
                            className={classes.submitbutton}
                            onClick={() => {
                              redirect(4)
                            }}>
                            Next
                          </Button>
                        </Box>
                      </>
                    )}

                    {/* STEP 4 */}
                    {step == 4 && (
                      <>
                        <ValidatorForm key="step5validator" instantValidate={true} onSubmit={NohandleSubmit}>
                          <Box mt={{ xs: 4, sm: 3, md: 4 }} pb={5} display="flex" justifyContent="center">
                            <Box maxWidth="500px" width="100%">
                              <div className={classes.label}>Tell us your year of birth</div>

                              <InputMask
                                mask="nm/ed/zyyy"
                                alwaysShowMask={false}
                                formatChars={formatChars}
                                maskChar={null}
                                value={state.yob}
                                disabled={false}
                                onChange={(e) => {
                                  setState('yob', e.target.value)
                                }}>
                                {() => (
                                  <TextValidator
                                    variant="outlined"
                                    className={`${classes.formcontrol}`}
                                    validators={['required']}
                                    errorMessages={['Required']}
                                    placeholder="DD/MM/YYYY"
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start" style={{ marginRight: 10 }}>
                                          <img src="/static/img/calendar.svg" alt="" height="30" loading="lazy" />
                                        </InputAdornment>
                                      )
                                    }}
                                  />
                                )}
                              </InputMask>

                              <Box mt={3}>
                                <div className={classes.label}>My four digit postcode</div>
                                <TextValidator
                                  placeholder="2000"
                                  variant="outlined"
                                  value={state.postcode}
                                  className={`${classes.formcontrol}`}
                                  validators={['required', 'isNumber', 'matchRegexp:^\\d{4}$']}
                                  errorMessages={['Required', 'Numeric only', 'Must be 4 digit']}
                                  onChange={(e) => {
                                    setState('postcode', e.target.value)
                                  }}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start" style={{ marginRight: 10 }}>
                                        <img src="/static/img/form/location.svg" alt="" height="30" loading="lazy" />
                                      </InputAdornment>
                                    )
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>

                          <Box maxWidth="740px" mx="auto" justifyContent="center" display="flex">
                            <Button
                              onClick={() => {
                                redirect(5)
                              }}
                              disabled={state.yob == '' || state.postcode == ''}
                              type="submit"
                              className={classes.submitbutton}>
                              Find Quotes
                            </Button>
                          </Box>
                        </ValidatorForm>
                      </>
                    )}

                    {/* STEP 7, LAST */}
                    {step == 7 && (
                      <>
                        <Box mt={4}>
                          <Grid container spacing={3}>
                            {/* LEFT */}
                            <Grid item xs={12} md={6}>
                              <div className="finalintro">
                                <h3 className="text-20 lh-25 text-md-28 lh-md-38">
                                  Almost there. Please add your details so we can get the best comparison from our panel
                                  direct to you.
                                </h3>
                                <p className="text-16 text-md-24 text-md-18 lh-md-32">
                                  One of our consultants will contact you as soon as possible, for now sit tight, you’re
                                  already on your way to finding the right fund, with the right cover.
                                </p>

                                <FeefoSlide
                                  className={`${classes.feefocustom} d-none d-md-block`}
                                  slideBackground="linear-gradient(69.17deg, #F5F5F5 1.82%, rgba(255, 255, 255, 0) 63.85%), linear-gradient(243.37deg, rgba(228, 228, 228, 0.4) 0%, rgba(255, 255, 255, 0.1) 49.83%)"
                                  slideDotsColor={theme.palette.cep.primary}
                                  slideDotsPosition="right"
                                  slideFontStyle="normal"
                                  slideFontWeight="400"
                                  slideQuoteIconColor="#F09020"
                                  maxWidth={1220}
                                  disableRatingCard
                                />
                              </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <ValidatorForm instantValidate={true} onSubmit={handleSubmit}>
                                <InputLabel className={`${classes.label}`}>My Name</InputLabel>
                                <TextValidator
                                  validators={['required']}
                                  errorMessages={['Required']}
                                  id="age"
                                  placeholder="Enter Full Name"
                                  variant="outlined"
                                  name="full_name"
                                  value={state.name}
                                  className={`${classes.formcontrol}`}
                                  onChange={(e) => {
                                    setState('name', e.target.value)
                                  }}
                                />

                                <Box mt={{ xs: 3, md: 4, lg: 5 }}>
                                  <InputLabel className={`${classes.label}`}>My 10 digit phone number</InputLabel>
                                  <TextValidator
                                    validators={['required', 'auPhone']}
                                    errorMessages={['Required', 'Invalid phone number format']}
                                    placeholder="Enter Phone Number"
                                    variant="outlined"
                                    value={state.phone}
                                    className={`${classes.formcontrol}`}
                                    inputProps={{ maxLength: 10, pattern: '[0-9]', type: 'number' }}
                                    onChange={(e) => {
                                      setState('phone', e.target.value)
                                    }}
                                  />
                                </Box>
                                <Box mt={{ xs: 3, md: 4, lg: 5 }}>
                                  <InputLabel className={`${classes.label}`} id="age-label">
                                    My email address
                                  </InputLabel>
                                  <TextValidator
                                    validators={['required', 'isEmail']}
                                    errorMessages={['Required', 'Invalid email address']}
                                    placeholder="Enter Email Address"
                                    variant="outlined"
                                    value={state.email}
                                    className={`${classes.formcontrol}`}
                                    onChange={(e) => {
                                      setState('email', e.target.value)
                                    }}
                                  />
                                </Box>
                                <Box mt={{ xs: 3, md: 4, lg: 5 }}>
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disableElevation
                                    disabled={state.name == '' || state.phone == '' || state.email == ''}
                                    className={classes.submitbutton}
                                    fullWidth>
                                    Get Me My Quotes
                                  </Button>
                                </Box>
                              </ValidatorForm>

                              {/* Submission Loader Effect */}
                              <Backdrop className={classes.backdrop} open={loading}>
                                <CircularProgress color="secondary" />
                              </Backdrop>

                              <Box mt={3} mx={{ sm: 0, lg: 3 }}>
                                <div className={`${classes.featureitem} mb-3 text-16 text-md-18`}>
                                  Free 210 piece first aid kit if you switch in January
                                </div>
                                <div className={`${classes.featureitem} mb-3 text-16 text-md-18`}>
                                  100% Australian owned &amp; operated
                                </div>
                                <div className={`${classes.featureitem} text-16 text-md-18`}>
                                  No lock in contracts &amp; 30 day cooling off period
                                </div>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </>
                    )}
                  </Box>
                </div>
              </Box>
            </div>
          </section>

          {/* FEEFO SLIDE */}
          {step != 7 && (
            <Box py={5} style={{ backgroundColor: '#fff' }}>
              <FeefoSlide
                slideBackground={slideBg}
                slideDotsColor={theme.palette.cep.primary}
                slideDotsPosition="right"
                slideFontStyle="normal"
                slideFontWeight="400"
                slideQuoteIconColor="#F09020"
                maxWidth={1220}
              />
            </Box>
          )}

          {step == 7 && (
            <>
              <div className="d-none d-md-block">
                <AwardBox maxWidth="1200px" className={classes.awardbox} />
              </div>

              <div className="d-md-none">
                <Box px={2} pt={5} pb={5}>
                  <FeefoSlide
                    className={`${classes.feefocustom}`}
                    slideBackground="linear-gradient(69.17deg, #F5F5F5 1.82%, rgba(255, 255, 255, 0) 63.85%), linear-gradient(243.37deg, rgba(228, 228, 228, 0.4) 0%, rgba(255, 255, 255, 0.1) 49.83%)"
                    slideDotsColor={theme.palette.cep.primary}
                    slideDotsPosition="right"
                    slideFontStyle="normal"
                    slideFontWeight="400"
                    slideQuoteIconColor="#F09020"
                    maxWidth={1220}
                  />
                </Box>
              </div>
            </>
          )}

          <FooterSimple style={{ marginTop: 0 }} />
        </>
      )}

      {/* STEP 5 */}
      {step == 5 && (
        <>
          <Box maxWidth="1120px" mx="auto" pt={{ xs: 6, sm: 7, md: 8 }}>
            <div className="text-center text-24 lh-30 text-md-32 lh-md-35">
              <strong>{step6texts}</strong>
            </div>
          </Box>
          <FindAnimation />
        </>
      )}

      {/* STEP 6 */}
      {step == 6 && (
        <div className="container">
          <Lottie options={defaultOptions} height={300} width={300} />

          <div style={{ textAlign: 'center', fontSize: 32, lineHeight: '35px', fontWeight: 600 }}>
            We found <span className="highlight">6 QUOTES</span> that appear to suit your preferences
          </div>

          <Box mx={{ sm: 0, lg: 8 }}>
            <p style={{ textAlign: 'center' }} className="text-16 lh-md-24 text-md-20 lh-md-35">
              No fluff, just a fact: In 2020, we saved 53,893 Aussie singles, couples, and families $357.95 on their
              health cover - policies start from just $2.93 per day. There are no fees or markups - we guarantee all
              quotes come directly from the insurers.
            </p>
          </Box>

          <Box maxWidth={994} mx={`auto`}>
            <Button
              className={classes.submitbutton}
              onClick={() => {
                redirect(7)
              }}>
              Show My Quotes
            </Button>

            <p className="mt-3 text-14 text-center disclaimer">
              By clicking &lsquo;Get my quotes&rsquo;, I acknowledge that I have read and agree to the{' '}
              <a href="/terms-of-use/">Terms of Use</a>, the &nbsp;
              <a href="/privacy-policy">Privacy Policy</a> and the
              <Tooltip
                style={{ maxWidth: 500 }}
                arrow
                interactive
                title="Personal information is being collected by Asymmetric Information (AI) who can be contacted at compliance@asymmetricinformation.com.au. Personal information is being collected by AI so that AI can provide and market its products and services to you which may include telephone calls to you about our products and services.If AI does not collect personal information from you, AI will not, nor will our partners, be able to provide its products or services to you.To provide AI's products and services, AI may need to disclose personal information to commercial partners to fulfil your requests or third party service providers who provide services to AI.For more information, please review our Privacy Policy.In some circumstances AI may disclose personal information to overseas recipients in the United States of America, Serbia, Philippines & India.">
                <a href="/collection-notice"> Collection Notice</a>
              </Tooltip>
              . I confirm that you may contact me about your services. I consent to you using sensitive personal
              information that you may collect for the purposes of providing your products and services.
            </p>
          </Box>
        </div>
      )}

      {/* FOOTER SECTION */}

      <style jsx>{`
        .hero {
          background: url('/static/img/form_b/hero.jpg') no-repeat center center;
          background-size: cover;
          min-height: 300px;
          padding-top: 0;

          h1 {
            font-weight: 800;
            position: relative;
            margin-bottom: 10px;
            margin-top: 0;
            z-index: 1;
            span {
              position: relative;
              display: inline-block;
              color: ${theme.palette.cep.secondary};
              &:before {
                content: '';
                height: 30px;
                background: ${theme.palette.cep.yellow};
                position: absolute;
                bottom: 0;
                left: -5px;
                right: -5px;
                margin: 0 auto;
                z-index: -1;
              }
            }
          }
        }

        .form_b_card {
          background: #fff;
          border-radius: 4px 4px 0 0;
          min-height: 290px;
        }

        .lookingfor {
          font-size: 32px;
          line-height: 44px;
          font-weight: 700;
          text-align: center;
        }

        .progress-bar-main {
          position: relative;
          height: 30px;

          .progress-indicator {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            margin: 0 auto;
            color: #000;
            opacity: 0.7;
            z-index: 10;
            cursor: default;
          }
        }

        .highlight {
          position: relative;
          display: inline-block;
          font-weight: 800;
          color: #035aa6;
          &:before {
            content: '';
            height: 20px;
            background: ${theme.palette.cep.yellow};
            position: absolute;
            bottom: 0;
            left: -5px;
            right: -5px;
            margin: 0 auto;
            z-index: -1;
          }
        }

        .finalintro {
          text-align: left;
          h3 {
            font-style: normal;
            font-weight: bold;
            letter-spacing: 0.01em;
            text-align: left;
            margin-top: 0;
            @media screen and (max-width: 667px) {
              text-align: center;
            }
          }

          p {
            font-weight: normal;
          }
          @media screen and (max-width: 667px) {
            text-align: center;
          }
        }

        .disclaimer {
          color: #636363;
          a {
            color: ${theme.palette.cep.primary};
          }
        }
      `}</style>
    </>
  )
}

export default wrapper.withRedux(withRouter(form4Page))
