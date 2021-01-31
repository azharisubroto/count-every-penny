import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { formCounter } from '@/store/counter/action'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'
import theme from '@/theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { logEvent } from '@/utils/analytics'
import axios from 'axios'

// CoverStyle to reusable
const coverstyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 18,
  fontWeight: 600,
  borderBottom: '1px solid #eee',
  height: 60,
  lineHeight: '60px'
}

// Active State style
const formControlTouch = {
  border: '1px solid #F09020',
  boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)'
}

const formControlStyle = {
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

// Custom Styles
const useStyles = makeStyles(() => ({
  formcard: {
    background: '#fff',
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box',
    boxShadow: '0 6px 4px rgba(0,0,0,.05)',
    borderRadius: 5,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: '-105px',
      position: 'absolute',
      padding: '40px 50px',
      height: 289
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '-70px',
      padding: '40px 50px',
      height: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 30
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      marginTop: 0,
      padding: 20
    }
  },
  relative: {
    position: 'relative'
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: '27px',
    color: '#474747',
    marginBottom: 15,
    textTransform: 'capitalize'
  },
  formcontrol: formControlStyle,
  coverselect: formControlStyle,
  coveritem: coverstyle,
  selicon: {
    width: 40,
    textAlign: 'center',
    marginRight: 10,
    lineHeight: '0',
    '& img': {
      width: 'auto!important'
    }
  },
  seltext: {
    marginRight: 0,
    color: '#333',
    fontSize: 21
  },
  valid: {
    color: '#333',
    '& input, & .seltext, & .MuiInputBase-input, & .seltext-root': {
      color: '#333'
    },

    '& fieldset': {
      borderColor: `${theme.palette.cep.secondary}!important`,
      borderWidth: '2px !important',
      boxShadow: 'none!important'
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

// Cover List
const coverlist = [
  {
    value: 'none',
    name: 'Select the cover type...',
    img: '/static/img/form/asterisks.svg'
  },
  {
    value: 'single',
    name: 'Myself',
    img: '/static/img/form_b/icon-single-male.svg'
  },
  {
    value: 'couple',
    name: 'Myself & My partner',
    img: '/static/img/form_b/icon-couple.svg'
  },
  {
    value: 'family',
    name: 'My Family',
    img: '/static/img/form_b/icon-family.svg'
  },
  {
    value: 'single-parents',
    name: 'Myself & My Kid(s)',
    img: '/static/img/form_b/icon-single-parent.svg'
  }
]

// Funds List
const fundlist = [
  {
    text: 'Select One',
    value: 'none'
  },
  {
    text: 'Australian Unity',
    value: 'au'
  },
  {
    text: 'Bupa',
    value: 'bupa'
  },
  {
    text: 'Defence Health',
    value: 'Defence Health Limited'
  },
  {
    text: 'GMHBA',
    value: 'gmhba'
  },
  {
    text: 'HBF',
    value: 'HBF Health Limited'
  },
  {
    text: 'HCF',
    value: 'hcf'
  },
  {
    text: 'Medibank',
    value: 'medibank'
  },
  {
    text: 'NIB',
    value: 'nib'
  },
  {
    text: 'Teachers Health',
    value: 'teachers'
  },
  {
    text: 'Other fund not listed',
    value: 'other'
  },
  {
    text: "I don't currently have a fund",
    value: 'not insured'
  }
]

// Step 1 Form
const FormStep = (props) => {
  const classes = useStyles(props)
  const router = useRouter()
  const [postcodes, setPostcodes] = useState({})
  const state = useSelector((state) => state.counter.form)
  const { step } = props

  const dispatch = useDispatch()

  // Fetch Postcode
  useEffect(() => {
    fetchPostcode()
  }, [])

  // Set custom validation rules
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
    ValidatorForm.addValidationRule('validPostcode', (value) => {
      const result = [value] in postcodes
      //console.log(result)
      return result
    })
  })

  // Check Route
  useEffect(() => {
    const path = router.pathname
    const passed_step = parseInt(state.step_passed)
    const step = parseInt(path.substr(path.length - 1))
    //console.log(passed_step, step)

    // If not thank you
    if (path != '/form/thankyou') {
      if (passed_step < step) {
        router.push(`/form-b/step${passed_step}`)
      }
    } else {
      const step_t = 5
      if (passed_step < step_t) {
        router.push(`/form-b/step${passed_step}`)
      }
    }
  }, [router.asPath])

  // Fetch postcode
  const fetchPostcode = async () => {
    try {
      const { data } = await axios.get('/api/postcode')
      setPostcodes(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Handle Select Change
  const handleChange = (e, key) => {
    const { value } = e.target

    dispatch(
      formCounter({
        ...state,
        [key]: value
      })
    )
  }

  // Handle Submit
  const handleSubmit = () => {
    if (state.postcode != '' && state.covertype != 'none') {
      logEvent(`Submitted Form B Step ${step}`)

      // Set passed step
      dispatch(
        formCounter({
          ...state,
          step_passed: parseInt(step + 1)
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

      router.push(`/form-b/step${parseInt(step + 1)}?${urlparam}`).then(() => window.scrollTo(0, 0))
    }
  }

  return (
    <>
      <ValidatorForm instantValidate={false} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* LEFT */}
          <Grid item xs={12} md={6}>
            {/* I’m looking health cover for... */}
            {step == 1 && (
              <>
                <InputLabel
                  className={`${classes.label} ${state.covertype != 'none' && classes.valid}`}
                  id="cover-type-label">
                  I want cover for
                </InputLabel>
                <SelectValidator
                  validators={['required', 'isNotNone']}
                  errorMessages={['Required', 'Required']}
                  className={`${classes.coverselect} ${state.covertype != 'none' && classes.valid}`}
                  value={state.covertype}
                  placeholder="Select your life stage"
                  variant="outlined"
                  select
                  onChange={(e) => {
                    handleChange(e, 'covertype')
                  }}>
                  {coverlist.map((item) => (
                    <MenuItem
                      disabled={item.value == 'none'}
                      className={classes.coveritem}
                      key={item.value}
                      value={item.value}>
                      <div className={classes.selicon}>
                        {item.value == 'none' ? (
                          <img src={item.img} alt="" loading="lazy" height="24" width="24" />
                        ) : (
                          <img src={item.img} alt="" loading="lazy" height="42" width="42" />
                        )}
                      </div>

                      <div className={`${classes.seltext} seltext-root`}>{item.name}</div>
                    </MenuItem>
                  ))}
                </SelectValidator>
              </>
            )}

            {step == 2 && (
              <>
                <InputLabel className={`${classes.label} ${state.age != '' && classes.valid}`} id="age-label">
                  My Age
                </InputLabel>
                <TextValidator
                  validators={['required', 'isNumber', 'goodAge']}
                  errorMessages={['Required', 'Numeric only', 'Valid age is between 18 to 120']}
                  id="age"
                  placeholder="Enter My Age"
                  variant="outlined"
                  value={state.age}
                  className={`${classes.formcontrol} ${state.age != '' && classes.valid}`}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" style={{ marginRight: 10 }}>
                        <img src="/static/img/person.svg" alt="" height="30" loading="lazy" />
                      </InputAdornment>
                    )
                  }}
                  onChange={(e) => {
                    handleChange(e, 'age')
                  }}
                />
              </>
            )}
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6}>
            {/* My four digit postcode */}
            {step == 1 && (
              <>
                <InputLabel
                  className={`${classes.label} ${state.postcode != '' && state.postcode.length == 4 && classes.valid}`}
                  id="postcode-label">
                  My four digit postcode
                </InputLabel>
                <TextValidator
                  validators={['required', 'isNumber', 'matchRegexp:^\\d{4}$', 'validPostcode']}
                  errorMessages={['Required', 'Numeric only', 'Must be 4 digit', 'Enter valid postcode']}
                  id="postcode"
                  placeholder="Enter Postcode"
                  variant="outlined"
                  className={`${classes.formcontrol} ${
                    state.postcode != '' && state.postcode.length == 4 && classes.valid
                  }`}
                  value={state.postcode}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" style={{ marginRight: 10 }}>
                        <img src="/static/img/form/location.svg" alt="" height="30" width="30" loading="lazy" />
                      </InputAdornment>
                    )
                  }}
                  onChange={(e) => {
                    handleChange(e, 'postcode')
                  }}
                />
              </>
            )}

            {step == 2 && (
              <>
                <InputLabel className={`${classes.label} ${state.fund != 'none' && classes.valid}`} id="fund-label">
                  My current health fund
                </InputLabel>
                <SelectValidator
                  validators={['required', 'isNotNone']}
                  errorMessages={['Required', 'Required']}
                  id="fund"
                  className={`${classes.coverselect} ${state.fund != 'none' && classes.valid}`}
                  value={state.fund}
                  placeholder="Select from funds..."
                  variant="outlined"
                  onChange={(e) => {
                    handleChange(e, 'fund')
                  }}>
                  {fundlist.map((fund) => (
                    <MenuItem
                      className={classes.coveritem}
                      disabled={fund.value == 'none'}
                      key={fund.value}
                      value={fund.value}>
                      {fund.text}
                    </MenuItem>
                  ))}
                </SelectValidator>
              </>
            )}
          </Grid>

          <Grid item xs={12} md={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disableElevation
              className={classes.submitbutton}
              fullWidth>
              Next
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </>
  )
}

export default function FormHeroB(props) {
  const classes = useStyles(props)
  //const state = useSelector((state) => state.counter.form)

  return (
    <>
      <section className="hero">
        <Container style={{ maxWidth: 1200 }}>
          {/* HEADING AND IMAGE */}
          <Grid container spacing={4}>
            <Grid item md={9}>
              <h1 className="text-20 text-md-42" style={{ marginBottom: 0 }}>
                {props.headline}
              </h1>

              {props.step == 1 && (
                <div className="row white--text text-16 mt-2 mt-md-4 pb-md-4 key-points">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-6 py-1 py-md-2">
                    <div className="d-flex">
                      <div className="mr-2">
                        <img src="/static/img/icons/check-badge.svg" loading="lazy" alt="" />
                      </div>
                      <div>Average saving of $357.95 per customer in 2020</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-12 col-xl-6 py-1 py-md-2">
                    <div className="d-flex">
                      <div className="mr-2">
                        <img src="/static/img/icons/check-badge.svg" loading="lazy" alt="" />
                      </div>
                      <div>No lock in contracts</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-12 col-xl-6 py-1 py-md-2">
                    <div className="d-flex">
                      <div className="mr-2">
                        <img src="/static/img/icons/check-badge.svg" loading="lazy" alt="" />
                      </div>
                      <div>No fees or markups</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-12 col-xl-6 py-1 py-md-2">
                    <div className="d-flex">
                      <div className="mr-2">
                        <img src="/static/img/icons/check-badge.svg" loading="lazy" alt="" />
                      </div>
                      <div>100% Australian owned & operated</div>
                    </div>
                  </div>
                </div>
              )}
            </Grid>
            <Grid item md={3}>
              <div className="hero-img-type">
                <img src="/static/img/mascott.svg" alt="" width="227" height="332" loading="lazy" />
              </div>
            </Grid>
          </Grid>

          {/* ACTUAL FORM */}
          <Grid container spacing={0}>
            <Grid item xs={12} md={12} className={classes.relative}>
              <Card className={classes.formcard}>
                <FormStep step={props.step} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <style jsx>{`
        .hero {
          position: relative;
          z-index: 0;
          @media screen and (min-width: 1024px) {
            padding: 30px 0 80px;
            min-height: 466px;
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
            padding: 25px 0;
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
            margin-top: ${props.step > 1 ? '40px' : 0};
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

        .key-points {
          font-weight: 600;
          color: #fff;
        }
      `}</style>
    </>
  )
}
