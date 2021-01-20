import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

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

const styles = {
  root: {
    position: 'relative',
    width: '100%',
    color: '#333',
    fontWeight: '700',
    overflow: 'hidden',
    '& .MuiInputBase-formControl': {
      minHeight: 60,
      background: '#fff',
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
}

function CepTextField(props) {
  const { classes, className, ...other } = props

  return <TextField className={clsx(classes.root, className)} {...other} />
}

CepTextField.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string
}

export default withStyles(styles)(CepTextField)
