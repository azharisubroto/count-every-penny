import React, { useEffect } from 'react'
import Form from '@/layout/Form'
import Head from 'next/head'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogTitle from '@material-ui/core/DialogTitle'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from '@/theme'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { useSelector, useDispatch } from 'react-redux'
import { formCounter } from '@/store/counter/action'
import { init, logEvent } from '@/utils/analytics'
import { useRouter } from 'next/router'
import Slide from '@material-ui/core/Slide'
import axios from 'axios'

// Styling

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
  '& > div.Mui-error *': {
    color: 'red!important'
  }
}

const useStyles = makeStyles(() => ({
  cep_dialog: {
    [theme.breakpoints.down('xs')]: {
      '& .MuiPaper-root': {
        margin: 0,
        maxWidth: '100%',
        height: '100vh',
        overflowY: 'scroll'
      }
    },
    '& .MuiDialogTitle-root': {
      background: theme.palette.cep.primary,
      paddingTop: 15,
      paddingBottom: 15,
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& h2': {
        fontstyle: 'normal',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: '32px',
        textAlign: 'center',
        color: '#fff',
        marginbottom: 0
      }
    },
    '& .MuiDialogContent-root': {
      paddingTop: '16px',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        paddingLeft: '60px',
        paddingRight: '60px'
      }
    }
  },
  dialogintro: {
    textAlign: 'center',
    margin: '10px 0',
    fontSize: 22,
    lineHeight: '25px',
    color: '#404040'
  },
  formcontrol: formControlStyle,
  label: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: '26px',
    color: '#474747',
    marginBottom: 10,
    textAlign: 'left'
  },
  mb4: {
    marginBottom: 20
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
    marginBottom: 30,
    '&:hover': {
      backgroundColor: '#035AA6'
    }
  },
  backdrop: {
    zIndex: 9999999999,
    color: '#fff'
  }
}))

// TRansition dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
// Main Page component
export default function Step5(props) {
  const classes = useStyles(props)
  const router = useRouter()
  const state = useSelector((state) => state.counter.form)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    ValidatorForm.addValidationRule('auPhone', (phone_num) => {
      const phonePattern = /^0[0-8]\d{8}$/g
      return phonePattern.test(phone_num)
    })
  })

  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened form B Step 5')
    }

    setTimeout(() => {
      setOpen(true)
    }, 1000)
  }, [])

  // Close Dialog
  const handleClose = () => {
    setOpen(false)
  }

  // Handle Submit
  const handleSubmit = async () => {
    setLoading(true)

    const payload = {
      fullname: state.name,
      phone: state.phone,
      email: state.email,
      postcode: state.postcode,
      life_stage: state.covertype,
      health_fund: state.fund,
      cover_type: JSON.stringify({
        hospital: state.hospitalCovers,
        extras: state.extraCovers
      }),
      age: state.age,
      //date_of_birth: '02/03/1995',
      ...(router.query.utm_source && { utm_source: router.query.utm_source }),
      ...(router.query.utm_medium && { utm_medium: router.query.utm_medium }),
      ...(router.query.utm_campaign && { utm_campaign: router.query.utm_campaign }),
      ...(router.query.utm_content && { utm_content: router.query.utm_content }),
      ...(router.query.utm_term && { utm_term: router.query.utm_term })
    }

    try {
      const response = await axios.post('/api/lead', payload)
      const data = await response.data

      if (data.status == 'success') {
        logEvent(`Submitted Form Step 5`)

        if (process.env.NODE_ENV === 'production') {
          window.gtag('event', 'conversion', { send_to: 'AW-442105576/x68cCLupoPEBEOj959IB' })
        }

        router.push(`/thankyou`).then(() => window.scrollTo(0, 0))
        dispatch(
          formCounter({
            ...state,
            step_passed: 5
          })
        )
        logEvent('Opened Thank You Page')
      } else {
        logEvent(`Submission Failed`)
      }
      setLoading(false)
    } catch (error) {
      logEvent(`Submission Failed`)
      alert('An error occured')

      setLoading(false)
    }
  }

  // Handle input change
  const handleChange = (e, key) => {
    const { value } = e.target

    let final_value = value
    if (key == 'email') {
      final_value = final_value.replace(' ', '')
    }
    dispatch(
      formCounter({
        ...state,
        [key]: final_value
      })
    )
  }

  return (
    <>
      <Head>
        <title>Compare Health Insurance - Count Every Penny</title>
      </Head>

      {/* DIALOG BOX */}
      <Dialog
        scroll="body"
        TransitionComponent={Transition}
        open={open}
        keepMounted
        disableBackdropClick
        disableEscapeKeyDown
        onClose={handleClose}
        className={classes.cep_dialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        {/* Title */}
        <DialogTitle>{'Almost there.'}</DialogTitle>

        {/* Content */}
        <DialogContent>
          <DialogContentText className={classes.dialogintro}>
            Add your details so we can get the best comparison from our panel direct to you.
          </DialogContentText>

          {/* MAIN FORM */}
          <ValidatorForm instantValidate onSubmit={handleSubmit} key={'profileform'}>
            {/* MY NAME */}
            <div className={`${classes.mb4} ${state.name != '' && classes.valid}`}>
              <InputLabel className={`${classes.label}`} id="age-label">
                My Name Is
              </InputLabel>
              <TextValidator
                validators={['required']}
                errorMessages={['Required']}
                placeholder="Enter name"
                variant="outlined"
                value={state.name}
                className={`${classes.formcontrol}`}
                onChange={(e) => {
                  handleChange(e, 'name')
                }}
              />
            </div>

            {/* My 10 digit phone number */}
            <div className={`${classes.mb4} ${state.phone != '' && classes.valid}`}>
              <InputLabel className={`${classes.label}`} id="age-label">
                My 10 digit phone number
              </InputLabel>
              <TextValidator
                validators={['required', 'auPhone']}
                errorMessages={['Required', 'Invalid phone number format']}
                placeholder="Enter preferred number"
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
            <div className={`${classes.mb4} ${state.email != '' && classes.valid}`}>
              <InputLabel className={`${classes.label}`} id="age-label">
                My email address
              </InputLabel>
              <TextValidator
                validators={['required', 'isEmail']}
                errorMessages={['Required', 'Invalid email address']}
                placeholder="Enter email"
                variant="outlined"
                maxLength={10}
                value={state.email}
                className={`${classes.formcontrol}`}
                onChange={(e) => {
                  handleChange(e, 'email')
                }}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disableElevation
              className={classes.submitbutton}
              fullWidth>
              Show My Quotes
            </Button>
          </ValidatorForm>
        </DialogContent>
      </Dialog>

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </>
  )
}

Step5.Layout = Form
