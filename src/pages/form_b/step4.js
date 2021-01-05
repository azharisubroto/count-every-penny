import { useState } from 'react'
import Link from 'next/link'
import NavBarForm from '../../components/NavBarForm'
import FeefoSlide from '../../components/FeefoSlide'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import FooterSimple from '../../components/FooterSimple'
import Head from 'next/head'
import theme from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'

const coverstyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 18,
  fontWeight: 600,
  borderBottom: '1px solid #eee',
  height: 60,
  lineHeight: '60px'
}
const formControlTouch = {
  border: '1px solid #F09020',
  boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)'
}
const useStyles = makeStyles(() => ({
  bar: () => ({
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,.1)'
  }),
  filled: () => ({
    backgroundColor: theme.palette.cep.yellow
  }),
  simplebtn: () => ({
    backgroundColor: '#fff',
    border: '1px solid #D6D6D6',
    color: '#333333',
    fontSize: 25,
    lineHeight: '1',
    padding: '0 25px',
    height: 80,
    textTransform: 'capitalize',
    width: 200,
    margin: '0 10px',
    '&:hover': {
      border: '1px solid #F09020',
      boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)'
    }
  }),
  coverselect: {
    maxWidth: 500,
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
      border: '1px solid #dfdfdf'
    },
    '& .MuiSelect-select': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '& > div > div': coverstyle,
    '& > div.Mui-error *': {
      color: 'red!important'
    }
  },
  coveritem: coverstyle,
  submitbutton: {
    width: '100%',
    height: 60,
    background: '#035AA6',
    color: '#fff',
    fontSize: 18,
    textTransform: 'capitalize',
    '&:hover': {
      background: '#035AA6',
      color: '#fff'
    },
    '&.Mui-disabled': {
      background: '#D6D6D6',
      color: '#fff'
    }
  }
}))

const coverlist = [
  'Select One',
  'Australian Unity',
  'bupa',
  'defence health',
  'GMHBA',
  'HBF',
  'HCF',
  'Medibank',
  'NIB',
  'Teachers Health'
]

export default function form2Step4(props) {
  const [progress] = useState(60)
  const [healthcover, setHealthcover] = useState('Select One')
  const classes = useStyles(props)

  // Slide Background
  const slideBg =
    'linear-gradient(69.17deg, #F5F5F5 1.82%, rgba(255, 255, 255, 0) 63.85%), linear-gradient(243.37deg, rgba(228, 228, 228, 0.4) 0%, rgba(255, 255, 255, 0.1) 49.83%);'

  const handleChange = (e) => {
    setHealthcover(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Compare Health Insurance</title>
      </Head>

      {/* NAVBAR */}
      <NavBarForm
        logoprops={{
          logoWidth: 245,
          logoHeight: 53
        }}
        style={{ padding: '10px 0' }}
      />

      {/* FORM HERO */}
      <section className="hero">
        <div className="container text-center">
          <Box pt={{ xs: 2, sm: 3, md: 3 }}>
            <div className="form_b_card">
              <Box pt={{ xs: 2, sm: 3, md: 4 }} px={{ xs: 2, sm: 3, md: 3 }}>
                {/* Linear Progress */}
                <div className="progress-bar-main">
                  <div className="progress-indicator">{progress}%</div>
                  <LinearProgress
                    classes={{
                      colorPrimary: classes.bar,
                      barColorPrimary: classes.filled
                    }}
                    variant="determinate"
                    style={{ height: 30 }}
                    value={progress}
                  />
                </div>

                {/* Headling */}
                <Box mt={3}>
                  <div className="lookingfor text-20 lh-25 text-md-32 lh-md-40">Who is your current health fund?</div>
                </Box>

                {/* Life Card Section */}
                <Box mt={{ xs: 2, sm: 3, md: 4 }} pb={5} display="flex" justifyContent="center">
                  <Select
                    className={`${classes.coverselect}`}
                    placeholder="Select the cover type..."
                    value={healthcover}
                    variant="outlined"
                    onChange={(e) => {
                      handleChange(e)
                    }}
                    select>
                    {coverlist.map((item) => (
                      <MenuItem disabled={item == 'Select One'} className={classes.coveritem} key={item} value={item}>
                        <div className={`${classes.seltext} seltext-root`}>{item}</div>
                      </MenuItem>
                    ))}
                  </Select>
                </Box>

                <Box maxWidth="740px" mx="auto" justifyContent="center" display="flex">
                  <Link href="/form_b/step5">
                    <Button disabled={healthcover == 'Select One'} className={classes.submitbutton}>
                      Next
                    </Button>
                  </Link>
                </Box>

                {/* Button Progress */}
                {/* {progress < 100 && <button onClick={() => handleProgress()}>Add Progress</button>} */}
              </Box>
            </div>
          </Box>
        </div>
      </section>

      {/* FEEFO SLIDE */}
      <Box py={5} style={{ backgroundColor: '#fff' }}>
        <FeefoSlide
          slideBackground={slideBg}
          slideDotsColor={theme.palette.cep.primary}
          slideDotsPosition="right"
          slideFontStyle="normal"
          slideFontWeight="400"
          slideQuoteIconColor="#F09020"
          maxWidth={1220}
        />
      </Box>

      {/* FOOTER SECTION */}
      <FooterSimple style={{ marginTop: 0 }} />

      <style jsx>{`
        .hero {
          background: url('/static/img/form_b/hero.jpg') no-repeat center center;
          background-size: cover;
          min-height: 300px;
          padding-top: 80px;

          h1 {
            font-weight: 800;
            font-size: 45px;
            line-height: 120%;
            position: relative;
            margin-top: 0;
            z-index: 1;

            span {
              position: relative;
              display: inline-block;
              &:before {
                content: '';
                height: 30px;
                background: ${theme.palette.cep.yellow};
                position: absolute;
                bottom: 0;
                left: -10px;
                right: -10px;
                margin: 0 auto;
                z-index: -1;
              }
            }
          }
        }

        .form_b_card {
          background: #fff;
          border-radius: 4px 4px 0 0;
        }

        .lookingfor {
          font-size: 32px;
          line-height: 44px;
          font-weight: 700;
          text-align: center;
        }

        .progress-bar-main {
          position: relative;
          height: 30px;

          .progress-indicator {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            margin: 0 auto;
            color: #000;
            opacity: 0.7;
            z-index: 10;
            cursor: default;
          }
        }
      `}</style>
    </>
  )
}
