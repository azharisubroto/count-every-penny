import { useState, useEffect } from 'react'
import NavBarForm from '../../components/NavBarForm'
import FeefoSlide from '../../components/FeefoSlide'
import AwardBox from '../../components/AwardBox'
import FooterSimple from '../../components/FooterSimple'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import Head from 'next/head'
import theme from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import InputLabel from '@material-ui/core/InputLabel'

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

// Custom Styles
const useStyles = makeStyles((theme) => ({
  bar: () => ({
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,.1)'
  }),
  filled: () => ({
    backgroundColor: theme.palette.cep.yellow
  }),
  formcard: {
    background: '#fff',
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box',
    boxShadow: '0 6px 4px rgba(0,0,0,.05)',
    borderRadius: 5,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: '-125px',
      position: 'absolute',
      padding: '40px 50px',
      height: 289
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '-100px',
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
    textTransform: 'capitalize',
    textAlign: 'left'
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
  },
  feefocustom: {
    '& .MuiContainer-root': {
      padding: 0
    }
  }
}))

export default function form2Step8(props) {
  const [progress] = useState(98)
  const classes = useStyles(props)

  // Set custom validation rules
  useEffect(() => {
    ValidatorForm.addValidationRule('auPhone', (phone_num) => {
      const phonePattern = /^0[0-8]\d{8}$/g
      return phonePattern.test(phone_num)
    })
    ValidatorForm.addValidationRule('goodAge', (value) => {
      if (parseInt(value) < 18 || parseInt(value) > 120) {
        return false
      }
      return true
    })
  })

  const handleSubmit = (e) => {
    console.log(e.target)
  }

  return (
    <>
      <Head>
        <title>Compare Health Insurance</title>
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
      <main className="outter-wrapper">
        <section className="hero">
          <div className="container">
            <Box pt={{ xs: 2, sm: 3, md: 3 }}>
              <div className="form_b_card">
                <Box pt={{ xs: 2, sm: 3, md: 4 }} px={{ xs: 2, sm: 3, md: 5 }}>
                  {/* Linear Progress */}
                  <div className="progress-bar-main text-center">
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

                  <Box mt={4}>
                    <Grid container spacing={3}>
                      {/* LEFT */}
                      <Grid item xs={12} md={6}>
                        <div className="finalintro">
                          <h3 className="text-20 lh-25 text-md-28 lh-md-38">
                            Almost there. Please add your details so we can get the best comparison from our panel
                            direct to you.
                          </h3>
                          <p className="text-16 text-md-24 text-md-20 lh-md-35">
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
                        <ValidatorForm instantValidate={false} onSubmit={handleSubmit}>
                          <InputLabel className={`${classes.label}`}>My Age</InputLabel>
                          <TextValidator
                            validators={['required', 'isNumber', 'goodAge']}
                            errorMessages={['Required', 'Numeric only', 'Valid age is between 18 to 120']}
                            id="age"
                            placeholder="Enter My Age"
                            variant="outlined"
                            className={`${classes.formcontrol}`}
                          />

                          <Box mt={{ xs: 3, md: 4, lg: 5 }}>
                            <InputLabel className={`${classes.label}`}>My 10 digit phone number</InputLabel>
                            <TextValidator
                              validators={['required', 'auPhone']}
                              errorMessages={['Required', 'Invalid phone number format']}
                              placeholder="Enter preferred number"
                              variant="outlined"
                              className={`${classes.formcontrol}`}
                              inputProps={{ maxLength: 10, pattern: '[0-9]', type: 'number' }}
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
                              maxLength={10}
                              className={`${classes.formcontrol}`}
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
                </Box>
              </div>
            </Box>
          </div>
        </section>

        {/* Awards Box */}
        <section>
          <Box maxWidth="1120px" py={0} mx="auto">
            <div className="d-none d-md-block">
              <AwardBox />
            </div>
          </Box>

          <FeefoSlide
            className={`d-block d-md-none`}
            slideBackground="linear-gradient(69.17deg, #F5F5F5 1.82%, rgba(255, 255, 255, 0) 63.85%), linear-gradient(243.37deg, rgba(228, 228, 228, 0.4) 0%, rgba(255, 255, 255, 0.1) 49.83%)"
            slideDotsColor={theme.palette.cep.primary}
            slideDotsPosition="right"
            slideFontStyle="normal"
            slideFontWeight="400"
            slideQuoteIconColor="#F09020"
            maxWidth={1220}
          />
        </section>

        <FooterSimple />
      </main>

      <style jsx>{`
        .outter-wrapper {
          background: #fff;
        }
        .hero {
          background: url('/static/img/form_b/hero.jpg') no-repeat center top;
          background-size: 100% auto;
          min-height: 300px;
          padding-top: 80px;

          h1 {
            font-weight: 800;
            font-size: 45px;
            line-height: 120%;
            position: relative;
            margin-top: 0;
            z-index: 1;

            span {
              position: relative;
              display: inline-block;
              &:before {
                content: '';
                height: 30px;
                background: ${theme.palette.cep.yellow};
                position: absolute;
                bottom: 0;
                left: -10px;
                right: -10px;
                margin: 0 auto;
                z-index: -1;
              }
            }
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

        .form_b_card {
          background: #fff;
          border-radius: 4px 4px 0 0;
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
      `}</style>
    </>
  )
}
