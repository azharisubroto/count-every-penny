import { useState, useEffect } from 'react'
import NavBarForm from '../../components/NavBarForm'
import FeefoSlide from '../../components/FeefoSlide'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import FindAnimation from '../../components/FindAnimation'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import LinearProgress from '@material-ui/core/LinearProgress'
import AwardBox from '../../components/AwardBox'
import FooterSimple from '../../components/FooterSimple'
import Head from 'next/head'
import Lottie from 'react-lottie'
import * as animationData from '../../components/Lottie/check.json'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import InputLabel from '@material-ui/core/InputLabel'
import theme from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useRouter, withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../../../store/store'
import { form4 } from '../../../store/form4/action'

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
    filter: 'grayscale(100%)',
    borderRadius: 4,
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#000'
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

// Fund lists
const funds = [
  'Select One',
  'Australian Unity',
  'bupa',
  'defence health',
  'GMHBA',
  'HBF',
  'HCF',
  'Medibank',
  'NIB',
  'Teachers Health'
]

// Cover list
const coverlist = [
  'Select One',
  "I'm looking for better health cover",
  'I have a specific health concern',
  "I'm looking for cheaper cover",
  'I just want to compare options',
  "I'm planning on having a baby"
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

  const [step, setStep] = useState(1)
  const classes = useStyles(props)
  const state = useSelector((state) => state.form4.form)
  const dispatch = useDispatch()

  useEffect(() => {
    if (step == 1) {
      setProgress(0)
    } else if (step == 2) {
      setProgress(20)
    } else if (step == 3) {
      setProgress(40)
    } else if (step == 4) {
      setProgress(60)
    } else if (step == 5) {
      setProgress(80)
    } else if (step == 6) {
      setProgress(85)
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
        redirect(7)
      }, 5000)
    } else if (step == 7) {
      setProgress(90)
    } else if (step == 8) {
      setProgress(98)
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

  /**
   * Hanle Submit
   * @param {*} param0
   */
  const handleSubmit = (e) => {
    console.log(e.target)
  }

  /**
   * LifeStage Card
   * @param {Object} LifeStage - active state, image, text
   * @param {string} LifeStage.isActive - Card active
   * @param {string} LifeStage.img - Card Icon
   * @param {string} LifeStage.text - Card Text
   */
  const LifeStageCard = ({ isActive, img, text, ...other }) => {
    return (
      <>
        {/* Card Parent */}
        <div {...other} className={`${classes.lifestageCard} ${isActive ? 'active' : ''}`}>
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
      {(step < 6 || step == 8) && (
        <>
          <section className="hero">
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            <div className="container text-center">
              {step == 1 && (
                <Box pt={{ xs: 3, sm: 4, md: 4, lg: 4 }} mx={{ md: 5 }}>
                  <h1 className="text-24 lh-30 text-md-40 lh-md-45">
                    Compare Australian Health Insurance Providers <span>in 5 Minutes</span>
                  </h1>
                </Box>
              )}

              <Box pt={{ xs: 2, sm: 3, md: 3 }}>
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
                          {step == 2 && <>Do you currently have health insurance?</>}
                          {step == 3 && <>What is your primary health cover consideration?</>}
                          {step == 4 && <>Who is your current health fund?</>}
                          {step == 5 && <>Tell us about yourself</>}
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
                      <Box mt={{ xs: 2, sm: 3, md: 4 }} pb={5} display="flex" justifyContent="center">
                        <Button
                          className={`${classes.simplebtn} ${
                            state.has_life_insurance == 'Yes' ? 'active' : ''
                          } text-18 text-md-25`}
                          onClick={() => {
                            setState('has_life_insurance', 'Yes')
                            redirect(3)
                          }}>
                          Yes
                        </Button>
                        <Button
                          className={`${classes.simplebtn} ${
                            state.has_life_insurance == 'No' ? 'active' : ''
                          } text-18 text-md-25`}
                          onClick={() => {
                            setState('has_life_insurance', 'No')
                            redirect(3)
                          }}>
                          No
                        </Button>
                      </Box>
                    )}

                    {/* STEP 3 */}
                    {step == 3 && (
                      <>
                        {/* Life Card Section */}
                        <Box mt={{ xs: 2, sm: 3, md: 4 }} pb={5} display="flex" justifyContent="center">
                          <Select
                            className={`${classes.coverselect}`}
                            placeholder="Select the cover type..."
                            value={state.primary_health_cover}
                            variant="outlined"
                            onChange={(e) => {
                              setState('primary_health_cover', e.target.value)
                            }}>
                            {coverlist.map((item) => (
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
                            disabled={state.primary_health_cover == 'Select One'}
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
                              redirect(5)
                            }}>
                            Next
                          </Button>
                        </Box>
                      </>
                    )}

                    {/* STEP 5 */}
                    {step == 5 && (
                      <>
                        <ValidatorForm key="step5validator" instantValidate={true} onSubmit={handleSubmit}>
                          <Box mt={{ xs: 4, sm: 3, md: 4 }} pb={5} display="flex" justifyContent="center">
                            <Box maxWidth="500px" width="100%">
                              <div className={classes.label}>Tell us your year of birth</div>
                              <TextValidator
                                placeholder="YYYY"
                                variant="outlined"
                                value={state.yob}
                                className={`${classes.formcontrol}`}
                                validators={['required', 'isNumber', 'matchRegexp:^\\d{4}$', 'allowedYears']}
                                errorMessages={['Required', 'Numeric only', 'Must be 4 digit', 'Invalid Year']}
                                onChange={(e) => {
                                  setState('yob', e.target.value)
                                }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start" style={{ marginRight: 10 }}>
                                      <img src="/static/img/calendar.svg" alt="" height="30" loading="lazy" />
                                    </InputAdornment>
                                  )
                                }}
                              />

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
                                redirect(6)
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

                    {/* STEP 8 */}
                    {step == 8 && (
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
                                <InputLabel className={`${classes.label}`}>My Age</InputLabel>
                                <TextValidator
                                  validators={['required', 'isNumber']}
                                  errorMessages={['Required', 'Numeric only', 'Valid age is between 18 to 120']}
                                  id="age"
                                  placeholder="Enter My Age"
                                  variant="outlined"
                                  value={state.age}
                                  className={`${classes.formcontrol}`}
                                  onChange={(e) => {
                                    setState('age', e.target.value)
                                  }}
                                />

                                <Box mt={{ xs: 3, md: 4, lg: 5 }}>
                                  <InputLabel className={`${classes.label}`}>My 10 digit phone number</InputLabel>
                                  <TextValidator
                                    validators={['required', 'auPhone']}
                                    errorMessages={['Required', 'Invalid phone number format']}
                                    placeholder="Enter preferred number"
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
                                    placeholder="Enter email"
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
                                    className={classes.submitbutton}
                                    fullWidth>
                                    Next
                                  </Button>
                                </Box>
                              </ValidatorForm>
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
          {step != 8 && (
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

          {step == 8 && (
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

      {/* STEP 6 */}
      {step == 6 && (
        <>
          <Box maxWidth="1120px" mx="auto" pt={{ xs: 6, sm: 7, md: 8 }}>
            <div className="text-center text-24 lh-30 text-md-32 lh-md-35">
              <strong>{step6texts}</strong>
            </div>
          </Box>
          <FindAnimation />
        </>
      )}

      {step == 7 && (
        <div className="container">
          <Lottie options={defaultOptions} height={300} width={300} />

          <div style={{ textAlign: 'center', fontSize: 32, lineHeight: '35px', fontWeight: 600 }}>
            We found <span className="highlight">13 QUOTES</span> that suits your preferences
          </div>

          <Box mx={{ sm: 0, lg: 8 }}>
            <p style={{ textAlign: 'center' }} className="text-16 lh-md-24 text-md-20 lh-md-35">
              One of our consultants will contact you as soon as possible, for now sit tight, you’re already on your way
              to finding the right fund, with the right cover.
            </p>
          </Box>

          <div style={{ margin: '0 auto', maxWidth: 580 }}>
            <Button
              style={{ maxWidth: 580, margin: '0 auto' }}
              className={classes.submitbutton}
              onClick={() => {
                redirect(8)
              }}>
              Show My Quotes
            </Button>
          </div>
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
      `}</style>
    </>
  )
}

export default wrapper.withRedux(withRouter(form4Page))
