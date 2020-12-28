import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { formCounter } from '../../../store/counter/action'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'
import theme from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { logEvent } from '../../utils/tracker'

const coverstyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 18,
  fontStyle: 'italic',
  fontWeight: 600,
  borderBottom: '1px solid #eee',
  height: 60,
  lineHeight: '60px'
}

const useStyles = makeStyles((theme) => ({
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
  formcontrol: {
    width: '100%',
    fontStyle: 'italic',
    color: '#333',
    fontWeight: '700',
    '& .MuiInputBase-formControl': {
      height: 60,
      minHeight: 60,
      lineHeight: '60px'
    },
    '& input': {
      fontWeight: 700,
      fontSize: 21
    },
    '& > div.Mui-error input': {
      color: 'red!important'
    },
    '& fieldset': {
      border: '1px solid #dfdfdf'
    }
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: '27px',
    color: '#474747',
    marginBottom: 15
  },
  coverselect: {
    width: '100%',
    position: 'relative',
    '& .MuiInputBase-formControl': {
      height: 60,
      minHeight: 60,
      lineHeight: '60px'
    },
    '& .MuiSelect-select': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '& > div > div': coverstyle,
    '& > div.Mui-error *': {
      color: 'red!important'
    },
    '& fieldset': {
      border: '1px solid #dfdfdf'
    }
  },
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
    color: `${theme.palette.cep.secondary}`,
    '& input, & .seltext, & .MuiInputBase-input, & .seltext-root': {
      color: `${theme.palette.cep.secondary}`
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.cep.secondary}`
      }
    },
    '& fieldset': {
      borderColor: `${theme.palette.cep.secondary}`
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
    name: 'Select the cover type...'
  },
  {
    value: 'single',
    name: 'Single'
  },
  {
    value: 'couple',
    name: 'Couple'
  },
  {
    value: 'family',
    name: 'Family'
  },
  {
    value: 'single-parents',
    name: 'Single Parent Family'
  }
]

// Funds List
const fundlist = [
  {
    text: 'Bupa',
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
  const state = useSelector((state) => state.counter.form)
  const { step } = props

  const dispatch = useDispatch()

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
  })

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
      logEvent({
        event_type: `Submitted Form Step ${step}`
      })

      router.push(`/form/step${parseInt(step + 1)}`).then(() => window.scrollTo(0, 0))
    }
  }

  return (
    <>
      <ValidatorForm instantValidate={true} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* LEFT */}
          <Grid item xs={12} md={6}>
            {step == 1 && (
              <>
                <InputLabel
                  className={`${classes.label} ${state.covertype != 'none' && classes.valid}`}
                  id="cover-type-label">
                  The cover type I&apos;m looking for is
                </InputLabel>
                <SelectValidator
                  validators={['required', 'isNotNone']}
                  errorMessages={['Required', 'Required']}
                  className={`${classes.coverselect} ${state.covertype != 'none' && classes.valid}`}
                  value={state.covertype}
                  placeholder="Select the cover type..."
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
                        <img
                          src={'/static/img/form/dropdown-' + item.value + '.png'}
                          alt=""
                          loading="lazy"
                          height="30"
                          width="30"
                        />
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
                  errorMessages={['Required', 'Numeric only', 'Valid age is from 18 to 120']}
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
            {step == 1 && (
              <>
                <InputLabel
                  className={`${classes.label} ${state.postcode != '' && state.postcode.length == 4 && classes.valid}`}
                  id="postcode-label">
                  My 4 digit postcode
                </InputLabel>
                <TextValidator
                  validators={['required', 'isNumber', 'matchRegexp:^\\d{4}$']}
                  errorMessages={['Required', 'Numeric only', 'Must be 4 digit']}
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

export default function FormHero(props) {
  const classes = useStyles(props)
  //const state = useSelector((state) => state.counter.form)

  return (
    <>
      <section className="hero">
        <Container style={{ maxWidth: 1200 }}>
          {/* HEADING AND IMAGE */}
          <Grid container spacing={4}>
            <Grid item md={7}>
              <h1 style={{ marginBottom: 0, marginTop: 30 }}>{props.headline}</h1>
            </Grid>
            <Grid item md={5}>
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
            padding: 60px 0 104px;
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
      `}</style>
    </>
  )
}
