import Typography from '@material-ui/core/Typography'

/**
 * Paragraph
 * @param {icon, children}
 */
const P = ({ icon, children }) => {
  return (
    <>
      <Typography className={`${icon && 'hasIcon'} text-md-18 lh-md-30 my-4`} component="p" gutterBottom>
        {children}
      </Typography>
    </>
  )
}

export default P
