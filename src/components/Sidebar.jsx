import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import theme from '@/theme'

//const useStyles = makeStyles((theme) => ({
const useStyles = makeStyles((theme) => ({
  getquotes: {
    borderBottom: `3px solid ${theme.palette.secondary.bevel}`
  },
  'age-btn': {
    padding: '10px 0',
    minWidth: 'inherit',
    maxWidth: 'inherit',
    width: 'calc((100% / 4) - 10px)',
    margin: 5,
    lineHeight: 1
  }
}))

export default function Sidebar(props) {
  const classes = useStyles(props)

  return (
    <>
      <aside {...props}>
        <div className="age-card">
          <div className="alert text-primary">
            <strong>Australia:</strong> We saved our average customer <strong>$380.79*</strong> on their average annual
            premium!
          </div>

          <div className="headline">
            Select your age and
            <br />
            compare now!
          </div>
          <p>We’ll show best quotes for you</p>

          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {Array.apply(null, {
              length: 28
            }).map((e, i) => (
              <Button
                key={'age-' + i}
                variant="contained"
                color="primary"
                disableElevation
                className={classes['age-btn']}>
                <strong>
                  {i == 0 && <>&lt; </>}
                  {i == 27 && <>&gt; </>}
                  {i + 43}
                </strong>
              </Button>
            ))}
          </Box>

          <div className="age-card-footer">*Average savings based off 15178 customers during FY18/19.</div>
        </div>

        <style jsx>
          {`
            .age-card {
              background: ${theme.palette.primary.darken1};
              border-radius: 3px;
              padding: 20px;
              color: #fff;
            }
            .alert {
              padding: 10px;
              border-radius: 5px;
              background: #fff;
              color: ${theme.palette.primary.main};
            }
            .headline {
              font-weight: 800;
              font-size: 20px;
              line-height: 22px;
              text-align: center;
              color: #fff;
              margin-top: 10px;
            }
            p {
              text-align: center;
              margin: 5px 0;
            }
            .age-buttons {
              display: flex;
              flex-wrap: wrap;
            }
            .age-card-footer {
              text-align: center;
              font-size: 14px;
              padding-top: 5px;
            }
          `}
        </style>
      </aside>
    </>
  )
}
