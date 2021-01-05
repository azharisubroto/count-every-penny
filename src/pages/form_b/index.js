import { useState, useEffect } from 'react'
import NavBarForm from '../../components/NavBarForm'
import FeefoSlide from '../../components/FeefoSlide'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import FooterSimple from '../../components/FooterSimple'
import Head from 'next/head'
import theme from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
//import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../../../store/store'
import { form4 } from '../../../store/form4/action'

// Styling
const useStyles = makeStyles((theme) => ({
  bar: () => ({
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,.1)'
  }),
  filled: () => ({
    backgroundColor: theme.palette.cep.yellow
  }),
  simplebtn: {
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
  },
  lifestageCard: {
    background: '#fff',
    border: '1px solid #d6d6d6',
    height: '180px',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center',
    letterSpacing: '0.03em',
    textTransform: 'capitalize',
    padding: '20px 15px',
    cursor: 'pointer',
    filter: 'grayscale(100%)',
    borderRadius: 4,
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#000'
    },
    '&.active': {
      border: '1px solid #f09020',
      boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)',
      filter: 'grayscale(0)'
    },
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
      width: '100%',
      display: 'flex',
      textAlign: 'left',
      height: 'auto',
      padding: 10,
      alignItems: 'center',
      marginBottom: 10,
      borderRadius: 4,
      '& .MuiBox-root:first-of-type': {
        maxWidth: 42,
        marginRight: 15,
        '& img': {
          height: 42
        }
      },
      '& .MuiBox-root:last-of-type': {
        marginLeft: 'auto',
        marginTop: 0
      }
    }
  },
  lifestagecards: {
    '& .MuiBox-root': {
      flex: '1 1 15%',
      padding: '0 10px',
      [theme.breakpoints.down('md')]: {
        flex: '1 1 15%',
        padding: '0 10px'
      }
    }
  }
}))

// Life Stage list
const lifestagelists = [
  {
    img: '/static/img/form_b/icon-single-male.svg',
    text: 'Just for me - Male',
    value: 'single-male'
  },
  {
    img: '/static/img/form_b/icon-single-female.svg',
    text: 'Just for me - Female',
    value: 'single-female'
  },
  {
    img: '/static/img/form_b/icon-couple.svg',
    text: 'For me and my partner',
    value: 'couple'
  },
  {
    img: '/static/img/form_b/icon-family.svg',
    text: 'For my whole family',
    value: 'family'
  },
  {
    img: '/static/img/form_b/icon-single-parent.svg',
    text: 'For my family - single parent',
    value: 'single-parent'
  }
]

// Main Component
function form2Step1(props) {
  //const router = useRouter()
  const [progress, setProgress] = useState(0)
  const classes = useStyles(props)
  const state = useSelector((state) => state.form4.form)
  const step = parseInt(state.step_passed + 1)
  const dispatch = useDispatch()

  useEffect(() => {
    if (step == 1) {
      setProgress(0)
    } else if (step == 2) {
      setProgress(20)
    } else if (step == 3) {
      setProgress(40)
    } else if (step == 4) {
      setProgress(60)
    } else if (step == 5) {
      setProgress(80)
    } else if (step == 6) {
      setProgress(85)
    } else if (step == 7) {
      setProgress(90)
    } else if (step == 8) {
      setProgress(98)
    }
  }, [step])

  /**
   * Handle LifeStageClick
   */
  const handleLifeStageClick = (value) => {
    setTimeout(() => {
      dispatch(
        form4({
          ...state,
          lifestage: value,
          step_passed: 1
        })
      )
    }, 2000)
    window.scrollTo(0, 0)
    setProgress(20)
  }

  /**
   * LifeStage Card
   * @param {Object} LifeStage - active state, image, text
   * @param {string} LifeStage.isActive - Card active
   * @param {string} LifeStage.img - Card Icon
   * @param {string} LifeStage.text - Card Text
   */
  const LifeStageCard = ({ isActive, img, text, ...other }) => {
    return (
      <>
        {/* Card Parent */}
        <div {...other} className={`${classes.lifestageCard} ${isActive ? 'active' : ''}`}>
          <Box>
            <img src={img} alt="" width="70" height="70" />
          </Box>
          <Box mt={{ md: 1 }}>{text}</Box>
        </div>
      </>
    )
  }

  // Slide Background
  const slideBg =
    'linear-gradient(69.17deg, #F5F5F5 1.82%, rgba(255, 255, 255, 0) 63.85%), linear-gradient(243.37deg, rgba(228, 228, 228, 0.4) 0%, rgba(255, 255, 255, 0.1) 49.83%);'

  return (
    <>
      <Head>
        <title>Compare Health Insurance</title>

        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
          rel="stylesheet"
        />
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
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        <div className="container text-center">
          {step == 1 && (
            <Box pt={{ xs: 3, sm: 4, md: 4, lg: 4 }} mx={{ md: 5 }}>
              <h1 className="text-32 lh-40 text-md-40 lh-md-50">
                Compare Australian Health Insurance Providers <span>in 5 Minutes</span>
              </h1>
            </Box>
          )}

          <Box pt={{ xs: 2, sm: 3, md: 3 }}>
            <div className="form_b_card">
              <Box pt={{ xs: 2, sm: 3, md: 5 }} px={{ xs: 2, sm: 3, md: 5 }}>
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
                    {step == 1 && <>I’m looking a Health cover for...</>}
                    {step == 2 && <>Do you currently have health insurance?</>}
                    {step == 3 && <>What is your primary health cover consideration?</>}
                    {step == 4 && <>Who is your current health fund?</>}
                    {step == 5 && <>Tell us about yourself</>}
                  </div>
                </Box>

                {/* STEP 1 */}
                {step == 1 && (
                  <Box
                    className={classes.lifestagecards}
                    mt={{ xs: 2, sm: 3, md: 4 }}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between">
                    {lifestagelists.map((item) => (
                      <Box key={item.value}>
                        <LifeStageCard
                          img={item.img}
                          text={item.text}
                          isActive={state.lifestage == item.value ? 'active' : ''}
                          onClick={() => handleLifeStageClick(item.value)}
                        />
                      </Box>
                    ))}
                  </Box>
                )}

                {step == 2 && (
                  <Box mt={{ xs: 2, sm: 3, md: 4 }} pb={5} display="flex" justifyContent="center">
                    <Button className={`${classes.simplebtn} text-18 text-md-25`}>Yes</Button>
                    <Button className={`${classes.simplebtn} text-18 text-md-25`} to="./step3">
                      No
                    </Button>
                  </Box>
                )}
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
          padding-top: 0;

          h1 {
            font-weight: 800;
            position: relative;
            margin-bottom: 10px;
            margin-top: 0;
            z-index: 1;
            span {
              position: relative;
              display: inline-block;
              color: ${theme.palette.cep.secondary};
              &:before {
                content: '';
                height: 30px;
                background: ${theme.palette.cep.yellow};
                position: absolute;
                bottom: 0;
                left: -5px;
                right: -5px;
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

export default wrapper.withRedux(form2Step1)
