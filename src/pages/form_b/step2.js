import { useState } from 'react'
import Link from 'next/link'
import NavBarForm from '../../components/NavBarForm'
import FeefoSlide from '../../components/FeefoSlide'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import FooterSimple from '../../components/FooterSimple'
import Head from 'next/head'
import theme from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
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
    lineHeight: '1',
    padding: '0 25px',
    height: 80,
    textTransform: 'capitalize',
    width: 200,
    margin: '0 10px',
    '&:hover': {
      border: '1px solid #F09020',
      boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)'
    },
    [theme.breakpoints.down('sm')]: {
      height: 58
    }
  })
}))

export default function form2Step2(props) {
  const [progress] = useState(20)
  const classes = useStyles(props)

  // Slide Background
  const slideBg =
    'linear-gradient(69.17deg, #F5F5F5 1.82%, rgba(255, 255, 255, 0) 63.85%), linear-gradient(243.37deg, rgba(228, 228, 228, 0.4) 0%, rgba(255, 255, 255, 0.1) 49.83%);'

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
              <Box pt={{ xs: 2, sm: 3, md: 4 }} pb={{ xs: 4 }} px={{ xs: 2, sm: 3, md: 3 }}>
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
                  <div className="lookingfor text-20 lh-25 text-md-32 lh-md-40">
                    Do you currently have health insurance?
                  </div>
                </Box>

                {/* Life Card Section */}
                <Box mt={{ xs: 2, sm: 3, md: 4 }} display="flex" justifyContent="center">
                  <Link href="/form_b/step3">
                    <Button className={`${classes.simplebtn} text-18 text-md-25`}>Yes</Button>
                  </Link>
                  <Link href="/form_b/step3">
                    <Button className={`${classes.simplebtn} text-18 text-md-25`} to="./step3">
                      No
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
