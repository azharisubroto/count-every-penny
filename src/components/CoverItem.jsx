import ListItem from '@material-ui/core/ListItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Switch from './Switch'

const useStyles = makeStyles((theme) => ({
  coverlist: {
    borderBottom: '1px solid #d7d7d7',
    fontStyle: 'italic',
    padding: '12px 30px 12px 60px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding: '10px 20px'
    },
    '& span': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        fontSize: 15
      }
    },
    '& label': {
      marginLeft: 0,
      width: '100%',
      justifyContent: 'space-between'
    },
    '&:last-of-type': {
      borderBottom: 0
    }
  }
}))

/**
 * Cover Item
 * @component
 * @param {Object} item
 * @property {String} value - Item Value
 * @property {String} title- Item Name
 */
const CoverItem = (props) => {
  const classes = useStyles(props)
  const { value, title, ...rest } = props

  return (
    <ListItem className={classes.coverlist} button>
      <FormControlLabel value={value} control={<Switch {...rest} />} label={title} labelPlacement="start" />
    </ListItem>
  )
}

export default CoverItem
