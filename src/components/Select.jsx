import Select from '@material-ui/core/Select'
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

const formControlStyle = {
  width: '100%',
  color: '#333',
  fontWeight: '700',
  background: '#FCFCFC',
  border: '1px solid #DFDFDF',
  borderRadius: 4,
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

const useStyles = () => ({
  formcontrol: formControlStyle
})

function CepSelect(props) {
  const { classes, children, ...other } = props

  return (
    <>
      <Select className={classes.formcontrol} {...other}>
        {children}
      </Select>
    </>
  )
}

export default withStyles(useStyles)(CepSelect)
