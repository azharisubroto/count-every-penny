import { useState, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '@/store/store'
import { withRouter } from 'next/router'
import { formEbook } from '@/store/ebook/action'
import theme from '@/theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import axios from 'axios'
// CoverStyle to reusable
const coverstyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 16,
  fontWeight: 400,
  borderBottom: '1px solid #eee',
  height: 45,
  lineHeight: '45px'
}

// Active State style
const formControlTouch = {
  border: '1px solid #F09020',
  boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)'
}

const formControlStyle = {
  width: '100%',
  color: '#9D9D9D',
  fontWeight: '400',
  '& .MuiInputBase-formControl': {
    height: 45,
    minHeight: 45,
    lineHeight: '45px',
    '&:hover fieldset': formControlTouch,
    '&.Mui-focused fieldset': formControlTouch
  },
  '& input': {
    fontWeight: 400,
    fontSize: 16
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
    fontWeight: '700',
    fontSize: 18,
    lineHeight: '27px',
    color: '#000000',
    marginBottom: 0,
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
    color: '#9d9d9d',
    fontSize: 16
  },
  valid: {
    color: '#9d9d9d',
    '& input, & .seltext, & .MuiInputBase-input, & .seltext-root': {
      color: '#9d9d9d'
    },

    '& fieldset': {
      borderColor: `${theme.palette.cep.secondary}!important`,
      borderWidth: '2px !important',
      boxShadow: 'none!important'
    }
  },
  submitbutton: {
    fontSize: 24,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 700,
    textTransform: 'unset',
    backgroundColor: theme.palette.cep.secondary,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#035AA6'
    }
  }
}))

// Life Stage list
const lifestagelists = [
  {
    text: 'Select your lifestage',
    value: 'none'
  },
  {
    text: 'Just for me - Male',
    value: 'single-male'
  },
  {
    text: 'Just for me - Female',
    value: 'single-female'
  },
  {
    text: 'For me and my partner',
    value: 'couple'
  },
  {
    text: 'For my whole family',
    value: 'family'
  },
  {
    text: 'For my family - single parent',
    value: 'single-parent'
  }
]
function FormEbook(props) {
  const classes = useStyles(props)
  const [postcodes, setPostcodes] = useState({})
  const dispatch = useDispatch()
  const state = useSelector((state) => state.ebook.form)

  // Fetch Postcode
  useEffect(() => {
    fetchPostcode()
  }, [])

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
      formEbook({
        ...state,
        [key]: value
      })
    )
  }

  // Set custom validation rules
  useEffect(() => {
    ValidatorForm.addValidationRule('isNotNone', (value) => {
      if (value != 'none') {
        return true
      }
      return false
    })
    ValidatorForm.addValidationRule('auPhone', (phone_num) => {
      const phonePattern = /^0[0-8]\d{8}$/g
      return phonePattern.test(phone_num)
    })
    ValidatorForm.addValidationRule('validPostcode', (value) => {
      const result = [value] in postcodes
      //console.log(result)
      return result
    })
  })
  // Handle Submit
  const handleSubmit = () => {
    console.log('Submit Ebook')
  }
  return (
    <>
      <div className="card">
        <div className="card-body">
          <ValidatorForm instantValidate={false} onSubmit={handleSubmit}>
            <div className="form-group">
              <InputLabel className={`${classes.label}`}>Name</InputLabel>
              <TextValidator
                validators={['required']}
                errorMessages={['Required']}
                placeholder="Your Full Name"
                variant="outlined"
                value={state.name}
                className={`${classes.formcontrol}`}
                onChange={(e) => {
                  handleChange(e, 'name')
                }}
              />
            </div>

            {/* My 10 digit phone number */}
            <div className="form-group">
              <InputLabel className={`${classes.label}`}>Phone Number</InputLabel>
              <TextValidator
                validators={['required', 'auPhone']}
                errorMessages={['Required', 'Invalid phone number format']}
                placeholder="Your valid phone number"
                variant="outlined"
                value={state.phone}
                className={`${classes.formcontrol}`}
                inputProps={{ maxLength: 10, pattern: '[0-9]', type: 'number' }}
                onChange={(e) => {
                  handleChange(e, 'phone')
                }}
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <InputLabel className={`${classes.label}`}>Email</InputLabel>
              <TextValidator
                validators={['required', 'isEmail']}
                errorMessages={['Required', 'Invalid email address']}
                placeholder="Your valid email"
                variant="outlined"
                maxLength={10}
                value={state.email}
                className={`${classes.formcontrol}`}
                onChange={(e) => {
                  handleChange(e, 'email')
                }}
              />
            </div>

            {/* POSTCODE */}
            <div className="form-group">
              <InputLabel className={`${classes.label}`} id="postcode-label">
                Postcode
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
                onChange={(e) => {
                  handleChange(e, 'postcode')
                }}
              />
            </div>

            {/* Lifestage */}
            <div className="form-group pb-3">
              <InputLabel className={`${classes.label}`}>Lifestage</InputLabel>
              <SelectValidator
                validators={['required', 'isNotNone']}
                errorMessages={['Required', 'Required']}
                className={`${classes.coverselect}`}
                placeholder="Select your lifestage"
                variant="outlined"
                value={state.lifestage}
                onChange={(e) => {
                  handleChange(e, 'lifestage')
                }}>
                {lifestagelists.map((item) => (
                  <MenuItem
                    className={classes.coveritem}
                    disabled={item.value == 'none'}
                    key={item.value}
                    value={item.value}>
                    {item.text}
                  </MenuItem>
                ))}
              </SelectValidator>
            </div>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disableElevation
              className={classes.submitbutton}
              fullWidth>
              Download Now
            </Button>
          </ValidatorForm>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            background-color: #fff;
            box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
            border-radius: 10px;

            &-body {
              padding: 35px 45px;

              @media screen and (max-width: 992px - 1) {
                padding: 25px;
              }

              .form-group {
                margin-bottom: 10px;
              }
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .MuiSvgIcon-root {
            width: 29px !important;
            height: 29px !important;
            background-image: url('/static/img/ebook/chevron-down.svg');
            background-size: 29px 29px;
            path {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}
export default wrapper.withRedux(withRouter(FormEbook))
