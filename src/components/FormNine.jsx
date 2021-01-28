import Radio from '@/components/Input/Radio'
import Button from '@material-ui/core/Button'
import theme from '@/theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useRouter } from 'next/router'
import LinearProgress from '@material-ui/core/LinearProgress'
import MenuItem from '@material-ui/core/MenuItem'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputMask from 'react-input-mask'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'
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
  border: `1px solid ${theme.palette.cep.secondary}`,
  boxShadow: `0px 0px 6px rgba(${theme.palette.cep.secondary}, 0.5)`
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
const useStyles = makeStyles((theme) => ({
  bar: () => ({
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,.1)'
  }),
  filled: () => ({
    borderRadius: 90,
    backgroundColor: theme.palette.cep.secondary
  }),
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
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 700,
    textTransform: 'unset',
    backgroundColor: theme.palette.cep.secondary,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#035AA6'
    },
    '&.Mui-disabled': {
      background: '#D6D6D6',
      color: '#fff'
    }
  }
}))

// Life Stage list
const lifestagelists = [
  {
    text: 'Just For Me - Male',
    value: 'single-male'
  },
  {
    text: 'Just For Me - Female',
    value: 'single-female'
  },
  {
    text: 'Me And My Partner',
    value: 'couple'
  },
  {
    text: 'My Whole Family',
    value: 'family'
  },
  {
    text: 'Single Parent',
    value: 'single-parent'
  }
]

// Cover types
const covers = [
  {
    text: 'Hospital & Extras',
    value: 'hospital_extras'
  },
  {
    text: 'Hospital Only',
    value: 'hospital'
  },
  {
    text: 'Extras Only',
    value: 'extras'
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

export default function FormNine(props) {
  const router = useRouter()
  const classes = useStyles(props)
  const { step } = props
  let progress = step * 10

  const handleSubmit = () => {
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
      .push(`/form-9/step${parseInt(step + 1)}${Object.keys(urlparam).length > 0 ? '?' + urlparam : ''}`)
      .then(() => window.scrollTo(0, 0))
  }
  // Handle Select Change
  const handleChange = (e, key) => {
    const { value } = e.target
  }
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
      <section className="form">
        <div className="container">
          {props.headline && <h1 className="form-headline">{props.headline}</h1>}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="progress-line">
                    <LinearProgress
                      classes={{
                        colorPrimary: classes.bar,
                        barColorPrimary: classes.filled
                      }}
                      variant="determinate"
                      style={{ height: 10 }}
                      value={progress}
                    />
                    <p className="progress-percentage">Progress {progress}%</p>
                  </div>
                  <ValidatorForm instantValidate={false} onSubmit={handleSubmit}>
                    {step == 1 && (
                      <>
                        <h3 className="card-title">I’m looking at Health cover for...</h3>
                        {lifestagelists.map((item, index) => (
                          <Radio
                            label={item.text}
                            value={item.value}
                            name="lifeStage"
                            id={`lifeStage-${index}`}
                            key={index}
                          />
                        ))}
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disableElevation
                          className={classes.submitbutton}
                          fullWidth
                          onClick={() => {
                            handleSubmit()
                          }}>
                          Next
                        </Button>
                        <p className="ps">Complete our short form. it only takes a minute</p>
                      </>
                    )}
                    {step == 2 && (
                      <>
                        <h3 className="card-title">What kind of cover are you looking for?</h3>
                        {covers.map((item, index) => (
                          <Radio
                            label={item.text}
                            value={item.value}
                            name="covers"
                            id={`covers-${index}`}
                            key={index}
                          />
                        ))}
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disableElevation
                          className={classes.submitbutton}
                          fullWidth
                          onClick={() => {
                            handleSubmit()
                          }}>
                          Next
                        </Button>
                      </>
                    )}
                    {step == 3 && (
                      <>
                        <h3 className="card-title mb-50px">Who is your current health fund?</h3>
                        <SelectValidator
                          validators={['required', 'isNotNone']}
                          errorMessages={['Required', 'Required']}
                          id="fund"
                          className={`${classes.coverselect} mb-50px`}
                          placeholder="Select One"
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
                        <p className="note">
                          FYI: In October 2020, Australian Unity policies went up an average of 2.79%. In April 2021,
                          they'll be increasing by a further 1.99%.
                        </p>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disableElevation
                          className={classes.submitbutton}
                          fullWidth
                          onClick={() => {
                            handleSubmit()
                          }}>
                          Next
                        </Button>
                      </>
                    )}
                    {step == 4 && (
                      <>
                        <h3 className="card-title mb-50px">What is your date of birth?</h3>
                        <InputMask
                          mask="nm/ed/zyyy"
                          alwaysShowMask={false}
                          formatChars={formatChars}
                          maskChar={null}
                          // value={state.yob}
                          disabled={false}
                          onChange={(e) => {
                            handleChange(e, 'birth')
                          }}>
                          {() => (
                            <TextValidator
                              variant="outlined"
                              className={`${classes.formcontrol} mb-50px`}
                              validators={['required']}
                              errorMessages={['Required']}
                              placeholder="DD/MM/YYYY"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start" style={{ marginRight: 20, border: 'none' }}>
                                    <img src="/static/img/calendar.svg" alt="" height="30" loading="lazy" />
                                  </InputAdornment>
                                )
                              }}
                            />
                          )}
                        </InputMask>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disableElevation
                          className={classes.submitbutton}
                          fullWidth
                          onClick={() => {
                            handleSubmit()
                          }}>
                          Next
                        </Button>
                      </>
                    )}
                    {step == 5 && (
                      <>
                        <h3 className="card-title mb-50px">Your postcode</h3>
                        <TextValidator
                          validators={['required', 'isNumber', 'matchRegexp:^\\d{4}$', 'validPostcode']}
                          errorMessages={['Required', 'Numeric only', 'Must be 4 digit', 'Enter valid postcode']}
                          id="postcode"
                          placeholder="Enter Postcode"
                          variant="outlined"
                          className={`${classes.formcontrol} mb-50px`}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start" style={{ marginRight: 20, border: 'none' }}>
                                <img src="/static/img/form/location.svg" alt="" height="30" width="30" loading="lazy" />
                              </InputAdornment>
                            )
                          }}
                          onChange={(e) => {
                            handleChange(e, 'postcode')
                          }}
                        />
                        <p className="note">Your postcode ensures quotes are as accurate as possible for your area.</p>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disableElevation
                          className={classes.submitbutton}
                          fullWidth
                          onClick={() => {
                            handleSubmit()
                          }}>
                          Find Quotes
                        </Button>
                      </>
                    )}
                    {step == 6 && (
                      <>
                        <h3 className="card-title">Hold on.. we’re finding quotes that best match your needs!</h3>
                        <div className="text-center">
                          <img src="/static/img/find-quotes.png" alt="Find Quotes" className="img-fluid" />
                        </div>
                      </>
                    )}
                    {step == 7 && (
                      <>
                        <h3 className="card-title">Success! We found 6 QUOTES that appear to suit your preferences!</h3>
                        <p>
                          It looks like you might be overpaying on your <a href="#">Australian Unity policy</a>. Let's
                          see if we can save you some money.
                        </p>
                        <p>
                          <strong>Australian Unity</strong>'s average policy increase was <strong>2.79%</strong> in
                          October 2020 and will be a further
                          <strong>1.99%</strong> in April 2021. That's <strong>4.78%</strong> in 6 months. Give us a
                          chance to do better - <strong>we saved our average customer $357.95 in 2020.</strong>
                        </p>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disableElevation
                          className={classes.submitbutton}
                          fullWidth
                          onClick={() => {
                            handleSubmit()
                          }}>
                          Next
                        </Button>
                      </>
                    )}
                  </ValidatorForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Style */}
      <style jsx>{`
        .form {
          &-headline {
            text-align: center;
            font-weight: 800;
            font-size: 38px;
            line-height: 45px;
            margin-bottom: 20px;
            color: #fff;
          }
          .card {
            margin-bottom: 40px;
            background: #ffffff;
            box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            border: none;
            color: #333;
            &-body {
              padding: 40px;
            }
            &-title {
              font-weight: 700;
              font-size: 24px;
              line-height: 33px;
              margin-bottom: 20px;
            }

            p {
              font-size: 20px;
              line-height: 35px;
              margin-bottom: 20px;

              &.progress-percentage {
                text-align: center;
                font-weight: 700;
                font-size: 14px;
                line-height: 19px;
                color: #888;
                margin-bottom: 20px;
              }

              &.note {
                padding: 15px;
                background-color: rgba(#000, 0.05);
                font-size: 14px;
                line-height: 25px;
                text-align: center;
                border-radius: 4px;
              }

              &.ps {
                margin-top: 20px;
                margin-bottom: 0;
                font-style: italic;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                text-align: center;
              }
            }
          }
        }
      `}</style>
      <style jsx global>
        {`
          .mb-50px {
            margin-bottom: 50px !important;
          }
        `}
      </style>
    </>
  )
}
