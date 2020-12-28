import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card'
//import makeStyles from '@material-ui/core/styles/makeStyles'

//const useStyles = makeStyles({
// const useStyles = makeStyles(() => ({
//   awardcard: {
//     boxShadow: '0 3px 4px rgba(0,0,0,.1)'
//   }
// }))

export default function AwardBox() {
  //const classes = useStyles(props)
  return (
    <Box pt={5} pb={5} style={{ background: '#fff' }}>
      <Container style={{ maxWidth: 1120 }}>
        <Grid item xs={12}>
          <Card padding="0">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box pr={2}>
                <img src="/static/img/form/gold-award.png" alt="" width="171" height="151" />
              </Box>
              {Array.apply(null, {
                length: 7
              }).map((e, i) => (
                <Box px={1} key={'award-' + i}>
                  <img src={'/static/img/form/award-' + parseInt(i + 1) + '-1.png'} width="94" height="94" alt="" />
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Container>
    </Box>
  )
}
