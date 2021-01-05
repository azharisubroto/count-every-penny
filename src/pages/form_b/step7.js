import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NavBarForm from '../../components/NavBarForm'
import { wrapper } from '../../../store/store'
import Lottie from 'react-lottie'
import * as animationData from '../../components/Lottie/check.json'
import theme from '../../theme'
import Button from '@material-ui/core/Button'
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

function form2Step7(props) {
  const classes = useStyles(props)

  // Lottie setup
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <Head>
        <title>Finding Policies Now - Count Every Penny</title>
      </Head>

      <NavBarForm
        logoprops={{
          logoWidth: 245,
          logoHeight: 53
        }}
        style={{ padding: '10px 0' }}
      />

      <section className="partners-section">
        <div className="container">
          <Lottie options={defaultOptions} height={300} width={300} />

          <div style={{ textAlign: 'center', fontSize: 32, lineHeight: '35px', fontWeight: 600 }}>
            We found <span className="highlight">13 QUOTES</span> that suits your preferences
          </div>

          <p style={{ textAlign: 'center' }}>
            One of our consultants will contact you as soon as possible, for now sit tight, you’re already on your way
            to finding the right fund, with the right cover.
          </p>

          <div style={{ margin: '0 auto', maxWidth: 580 }}>
            <Link href="/form_b/step8">
              <Button style={{ maxWidth: 580, margin: '0 auto' }} className={classes.submitbutton}>
                Show My Quotes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1170px;
          margin: 0 auto;
        }

        .highlight {
          position: relative;
          display: inline-block;
          font-weight: 800;
          color: #035aa6;
          &:before {
            content: '';
            height: 20px;
            background: ${theme.palette.cep.yellow};
            position: absolute;
            bottom: 0;
            left: -5px;
            right: -5px;
            margin: 0 auto;
            z-index: -1;
          }
        }

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 35px;
          max-width: 786px;
          margin: 30px auto;
          /* or 175% */

          text-align: center;
          letter-spacing: 0.01em;
        }

        .hero {
          font-size: 25px;
          text-align: center;
          padding: 90px 0 0;
          font-weight: 800;

          h1 {
            margin: 0 auto;
            max-width: 1170px;
            font-size: 32px;
          }

          h2 {
            margin-top: 0;
          }

          p {
            max-width: 1000px;
            margin: 0 auto;
            font-size: 20px;
            font-weight: 400;
            line-height: 35px;
          }
        }

        .partners-section {
          padding: 30px 0;
          min-height: 50vh;
        }
        .partners {
          width: 100%;
          margin: 0 auto;
          max-width: 1000px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: center;
        }

        .loading {
          @extend .hero;
          position: relative;
          img {
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  )
}

export default wrapper.withRedux(form2Step7)
