import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import theme from '../theme'

//const useStyles = makeStyles((theme) => ({
const useStyles = makeStyles((theme) => ({
  getquotes: {
    borderBottom: `3px solid ${theme.palette.secondary.bevel}`
  },
  'age-btn': {
    padding: '10px 5px',
    minWidth: 'inherit',
    maxWidth: 'inherit',
    width: 'calc(25% - 10px)'
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

          <div className="age-buttons">
            {Array.apply(null, {
              length: 40
            }).map((e, i) => (
              <Button
                key={'age-' + i}
                variant="contained"
                color="primary"
                disableElevation
                className={classes['age-btn']}>
                <strong>
                  {i == 0 && <>&lt; </>}
                  {i == 43 && <>&gt; </>}
                  {i + 40}
                </strong>
              </Button>
            ))}
          </div>

          <div className="age-card-footer">*Average savings based off 15178 customers during FY18/19.</div>
        </div>

        <style jsx>
          {`
            .age-card {
              background: ${theme.palette.primary.darken1};
              border-radius: 3px;
              padding: 28px 35px;
              color: #fff;
            }
            .alert {
              padding: 15px 18px;
              border-radius: 5px;
              background: #fff;
              color: ${theme.palette.primary.main};
            }
            .headline {
              font-weight: 800;
              font-size: 24px;
              line-height: 26px;
              text-align: center;
              color: #fff;
              margin: 20px 0 10px;
            }
            p {
              text-align: center;
            }
            .age-buttons {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }
            .age-card-footer {
              text-align: center;
              margin-top: 20px;
            }
          `}
        </style>
      </aside>
    </>
  )
}
