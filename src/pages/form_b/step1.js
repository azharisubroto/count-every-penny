import { useState } from 'react'
import NavBarForm from '../../components/NavBarForm'
import FeefoSlide from '../../components/FeefoSlide'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import FooterSimple from '../../components/FooterSimple'
import Head from 'next/head'
import theme from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  bar: () => ({
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,.1)'
  }),
  filled: () => ({
    backgroundColor: theme.palette.cep.yellow
  }),
  lifestageCard: {
    background: '#fff',
    border: '1px solid #d6d6d6',
    borderEadius: '4px',
    width: '200px',
    height: '200px',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center',
    letterSpacing: '0.03em',
    textTransform: 'capitalize',
    padding: '32px 25px',
    cursor: 'pointer',
    filter: 'grayscale(100%)',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#000'
    },
    '&.active': {
      border: '1px solid #f09020',
      boxShadow: '0px 0px 6px rgba(255, 155, 37, 0.5)',
      filter: 'grayscale(0)'
    },
    [theme.breakpoints.down('md')]: {
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
      [theme.breakpoints.down('md')]: {
        flex: '1 1 100%'
      }
    }
  }
}))

export default function form2Step1(props) {
  const router = useRouter()
  const [progress] = useState(0)
  const [lifestage, setLifestage] = useState(null)
  const classes = useStyles(props)

  /**
   * Handle LifeStageClick
   */
  const handleLifeStageClick = (type) => {
    setLifestage(type)
    router.push('/form_b/step2')
  }

  /**
   * LifeStage Card
   * @param {Object} LifeStage - active state, image, text
   * @param {string} LifeStage.isActive - Card active
   * @param {string} LifeStage.img - Card Icon
   * @param {string} LifeStage.text - Card Text
   */
  const LifeStageCard = ({ isActive, children, ...other }) => {
    return (
      <>
        {/* Card Parent */}
        <div {...other} className={`${classes.lifestageCard} ${isActive ? 'active' : ''}`}>
          {children}
        </div>

        {/* Styles */}
        <style jsx>{`
          .lifestageCard {
            background: #fff;
            border: 1px solid #d6d6d6;
            border-radius: 4px;
            width: 200px;
            height: 200px;
            font-size: 18px;
            line-height: 25px;
            text-align: center;
            letter-spacing: 0.03em;
            text-transform: capitalize;
            padding: 32px 25px;
            cursor: pointer;
            filter: grayscale(100%);
            transition: all 0.2s ease;

            &:hover {
              border-color: #000;
            }

            &.active {
              border: 1px solid #f09020;
              box-shadow: 0px 0px 6px rgba(255, 155, 37, 0.5);
              filter: grayscale(0);
            }
          }
          @media screen and (max-width: 667px) {
            .lifestageCard {
              width: 100%;
              height: auto;
              flex: 1 1 100%;
            }
          }
        `}</style>
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
          <h1>
            Compare Australian Health Insurance Providers <span>in 5 Minutes</span>
          </h1>

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
                  <div className="lookingfor">I’m looking a Health cover for...</div>
                </Box>

                {/* Life Card Section */}
                <Box
                  className={classes.lifestagecards}
                  mt={{ xs: 2, sm: 3, md: 4 }}
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="space-between">
                  <Box>
                    <LifeStageCard
                      isActive={lifestage == 'single-male' ? 'active' : ''}
                      onClick={() => handleLifeStageClick('single-male')}>
                      <Box>
                        <img src="/static/img/form_b/icon-single-male.svg" alt="" width="70" height="70" />
                      </Box>
                      <Box mt={{ md: 1 }}>Just for me - Male</Box>
                    </LifeStageCard>
                  </Box>

                  <Box>
                    <LifeStageCard
                      isActive={lifestage == 'single-female' ? 'active' : ''}
                      onClick={() => handleLifeStageClick('single-female')}>
                      <Box>
                        <img src="/static/img/form_b/icon-single-female.svg" alt="" width="70" height="70" />
                      </Box>
                      <Box mt={{ md: 1 }}>Just for me - Female</Box>
                    </LifeStageCard>
                  </Box>

                  <Box>
                    <LifeStageCard
                      isActive={lifestage == 'couple' ? 'active' : ''}
                      onClick={() => handleLifeStageClick('couple')}>
                      <Box>
                        <img src="/static/img/form_b/icon-couple.svg" alt="" width="70" height="70" />
                      </Box>
                      <Box mt={{ md: 1 }}>For me and my partner</Box>
                    </LifeStageCard>
                  </Box>

                  <Box>
                    <LifeStageCard
                      isActive={lifestage == 'family' ? 'active' : ''}
                      onClick={() => handleLifeStageClick('family')}>
                      <Box>
                        <img src="/static/img/form_b/icon-family.svg" alt="" width="70" height="70" />
                      </Box>
                      <Box mt={{ md: 1 }}>For my whole family</Box>
                    </LifeStageCard>
                  </Box>

                  <Box>
                    <LifeStageCard
                      isActive={lifestage == 'single-parent' ? 'active' : ''}
                      onClick={() => handleLifeStageClick('single-parent')}>
                      <Box>
                        <img src="/static/img/form_b/icon-single-parent.svg" alt="" width="70" height="70" />
                      </Box>
                      <Box mt={{ md: 1 }}>For my family - single parent</Box>
                    </LifeStageCard>
                  </Box>
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

            @media screen and (max-width: 667px) {
              font-size: 32px;
            }

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
