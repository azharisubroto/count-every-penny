import React from 'react'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from '../components/Card'
import Rating from '@material-ui/lab/Rating'
import theme from '../theme'
import PropTypes from 'prop-types'

/**
 * Render FeefoSlide
 *
 * @author Azhari Subroto <azhari.subroto@gmail.com>
 * @param {Object} props
 * @component
 * @example
 * const bg = '#fff'
 * return (
 *   <FeefoSlide slideBackground={bg} />
 * )
 */
const FeefoSlide = (props) => {
  const {
    slideBackground,
    slideTheme,
    slideDotsColor,
    slideFontStyle,
    slideFontWeight,
    slideQuoteIconColor,
    slideDotsPosition,
    maxWidth,
    disableRatingCard,
    ...rest
  } = props

  // Slides JSON
  const slides = [
    {
      author: 'Alan',
      text: `My family have been loyal customers to our old
      health insurance and decided to give Health
      Insurance Comparison a go! We have now
      switched Health Insurance and made a saving of
      $1000.00 and a better cover. Have put my
      family and friends onto Health Insurance
      Comparison and they are loving the savings
      too!! Recommend anyone to give them ago!!`
    },
    {
      author: 'Brooke',
      text: `I thought I was covered for pregnancy and top hospital in my current cover but they discovered that I wasn’t. They have saved me a lot of money down the track. Super helpful and thorough. Couldn’t be more impressed by the service.`
    },
    {
      author: 'Carol',
      text: `Service was excellent. After reviewing the Health Insurance which we already had, we were paying for services which we did not require. We ended up saving approximately $800.00 for changing our Health Insurance. I definitely would recommend your service.`
    },
    {
      author: 'Deanne',
      text: `There is no better way to buy private health insurance than through HIC! Robert was so helpful and knowledgeable and found me the best possible deal covering all the things I need and none of the things I don’t for the most reasonable price.`
    }
  ]

  return (
    <>
      <Box pt={0} pb={8} {...rest}>
        <Container style={{ maxWidth: maxWidth ? maxWidth : 1120 }}>
          <Grid container spacing={4}>
            {/* Left Content */}
            <Grid
              item
              xs={12}
              sm={disableRatingCard != true ? 7 : 12}
              md={disableRatingCard != true ? 8 : 12}
              lg={disableRatingCard != true ? 9 : 12}>
              <Card
                dark={slideTheme == 'dark' ? true : false}
                color={slideBackground ? slideBackground : theme.palette.cep.primary}
                disableElevation
                className="slidecard"
                padding="0">
                <Box p={{ xs: 1, md: 4 }}>
                  {slideQuoteIconColor != null && (
                    <div className="slidequoteicon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.8333 16.6667C10.4617 16.6667 10.105 16.7233 9.75 16.775C9.865 16.3883 9.98333 15.995 10.1733 15.6417C10.3633 15.1283 10.66 14.6833 10.955 14.235C11.2017 13.75 11.6367 13.4217 11.9567 13.0067C12.2917 12.6033 12.7483 12.335 13.11 12C13.465 11.65 13.93 11.475 14.3 11.2283C14.6867 11.0067 15.0233 10.7617 15.3833 10.645L16.2817 10.275L17.0717 9.94667L16.2633 6.71667L15.2683 6.95667C14.95 7.03667 14.5617 7.13001 14.12 7.24167C13.6683 7.32501 13.1867 7.55334 12.65 7.76167C12.12 7.99834 11.5067 8.15834 10.9367 8.53834C10.3633 8.90167 9.70166 9.20501 9.11833 9.69167C8.55333 10.1933 7.87166 10.6283 7.36833 11.2667C6.81833 11.8633 6.275 12.49 5.85333 13.2033C5.365 13.8833 5.03333 14.63 4.68333 15.3683C4.36666 16.1067 4.11166 16.8617 3.90333 17.595C3.50833 19.065 3.33166 20.4617 3.26333 21.6567C3.20666 22.8533 3.24 23.8483 3.31 24.5683C3.335 24.9083 3.38166 25.2383 3.415 25.4667L3.45666 25.7467L3.5 25.7367C3.79643 27.1214 4.47884 28.3939 5.46827 29.407C6.4577 30.4201 7.71373 31.1323 9.09106 31.4614C10.4684 31.7904 11.9107 31.7228 13.2513 31.2664C14.5918 30.81 15.7757 29.9833 16.666 28.8821C17.5563 27.781 18.1167 26.4502 18.2824 25.0438C18.448 23.6375 18.2121 22.2129 17.6019 20.935C16.9917 19.6572 16.0322 18.5781 14.8344 17.8228C13.6366 17.0674 12.2494 16.6666 10.8333 16.6667ZM29.1667 16.6667C28.795 16.6667 28.4383 16.7233 28.0833 16.775C28.1983 16.3883 28.3167 15.995 28.5067 15.6417C28.6967 15.1283 28.9933 14.6833 29.2883 14.235C29.535 13.75 29.97 13.4217 30.29 13.0067C30.625 12.6033 31.0817 12.335 31.4433 12C31.7983 11.65 32.2633 11.475 32.6333 11.2283C33.02 11.0067 33.3567 10.7617 33.7167 10.645L34.615 10.275L35.405 9.94667L34.5967 6.71667L33.6017 6.95667C33.2833 7.03667 32.895 7.13001 32.4533 7.24167C32.0017 7.32501 31.52 7.55334 30.9833 7.76167C30.455 8.00001 29.84 8.15834 29.27 8.54001C28.6967 8.90334 28.035 9.20667 27.4517 9.69334C26.8867 10.195 26.205 10.63 25.7017 11.2667C25.1517 11.8633 24.6083 12.49 24.1867 13.2033C23.6983 13.8833 23.3667 14.63 23.0167 15.3683C22.7 16.1067 22.445 16.8617 22.2367 17.595C21.8417 19.065 21.665 20.4617 21.5967 21.6567C21.54 22.8533 21.5733 23.8483 21.6433 24.5683C21.6683 24.9083 21.715 25.2383 21.7483 25.4667L21.79 25.7467L21.8333 25.7367C22.1298 27.1214 22.8122 28.3939 23.8016 29.407C24.791 30.4201 26.0471 31.1323 27.4244 31.4614C28.8017 31.7904 30.2441 31.7228 31.5846 31.2664C32.9251 30.81 34.109 29.9833 34.9993 28.8821C35.8897 27.781 36.4501 26.4502 36.6157 25.0438C36.7813 23.6375 36.5454 22.2129 35.9352 20.935C35.325 19.6572 34.3656 18.5781 33.1678 17.8228C31.9699 17.0674 30.5828 16.6666 29.1667 16.6667Z"
                          fill={slideQuoteIconColor}
                        />
                      </svg>
                    </div>
                  )}

                  <CarouselProvider
                    visibleSlides={1}
                    totalSlides={4}
                    step={1}
                    dragStep={1}
                    interval={4000}
                    isPlaying={true}
                    isIntrinsicHeight>
                    <Slider classNameAnimation="hictransition">
                      {slides.map((item, i) => (
                        <Slide index={i} key={i}>
                          <p className="item-testimony">{item.text}</p>
                          <h4 className="item-person">
                            <span className="item-line"></span> <p>{item.author}</p>
                          </h4>
                        </Slide>
                      ))}
                    </Slider>
                    <DotGroup className="hicdots" dotNumbers />
                  </CarouselProvider>
                </Box>
              </Card>
            </Grid>

            {/* Sidebar */}
            {disableRatingCard != true && (
              <Grid item xs={12} sm={5} md={4} lg={3}>
                {' '}
                {/* RATING BOX */}
                <Card color="#fff" padding="30px 45px 28px" className="ratingcard">
                  <img src="/static/img/feefo.png" width="136" height="32" alt="feefo logo" />
                  <div style={{ margin: '10px 0' }}>Customer Experience</div>
                  <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                  <div style={{ margin: '10px 0' }}>Product Rating</div>
                  <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
      <style jsx global>{`
        .slidecard {
          position: relative;
          ${slideQuoteIconColor != true
            ? 'background: url("/static/img/blockquote.png") no-repeat top 30px left 30px;'
            : ''}

          @media screen and (max-width: 500px) {
            padding-top: 80px !important;
          }
        }
        .hictransition {
          transition: transform 500ms;
          transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .ratingcard {
          text-align: center;
          border: 1px solid #ededed;
          box-shadow: 0px 18px 24px rgba(0, 0, 0, 0.05) !important;
          img {
            max-width: 100%;
            display: inline-block;
          }
          @media screen and (min-width: 800px) {
            height: 100%;
          }
          @media screen and (max-width: 768px) and (min-width: 501px) {
            height: 100%;
          }
        }
        .hicdots {
          text-align: ${slideDotsPosition ? slideDotsPosition : 'center'};
          button {
            background: ${slideDotsColor ? slideDotsColor : '#fff'};
            border-radius: 500px;
            width: 10px;
            height: 10px;
            outline: 0;
            border: 0;
            margin: 0 3px;
            opacity: 0.25;
            display: inline-block;
            padding: 0;
            text-indent: -9999px;
            &.carousel__dot--selected {
              opacity: 1;
            }
          }
        }
        .item-testimony {
          font-style: ${slideFontStyle ? slideFontStyle : 'italic'};
          font-weight: ${slideFontWeight ? slideFontWeight : '700'};
          font-size: 16px;
          line-height: 26px;
          margin: 0;
          color: ${slideTheme == 'dark' ? '#fff' : '#000'};
        }
        .item-person {
          font-size: 24px;
          margin: 0;
          .item-line {
            width: 50px;
            height: 2px;
            background: ${slideTheme == 'dark' ? '#fff' : '#000'};
            display: inline-block;
            vertical-align: middle;
          }
          p {
            display: inline-block;
            color: ${slideTheme == 'dark' ? '#fff' : '#000'};
            margin: 0;
            padding-left: 10px;
            vertical-align: middle;
            font-style: italic;
            font-weight: 800;
            font-size: 18px;
            line-height: 25px;
          }
        }
      `}</style>
    </>
  )
}

// Validate prop types
FeefoSlide.propTypes = {
  /** - Card Background */
  slideBackground: PropTypes.string,
  /** - Theme, dark or light */
  slideTheme: PropTypes.oneOf(['dark', 'light']),
  /** - Navigation dots color */
  slideDotsColor: PropTypes.string,
  /** - Font style of content */
  slideFontStyle: PropTypes.oneOf(['italic', 'normal']),
  /** - Font weight of content */
  slideFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** - Quote icon color */
  slideQuoteIconColor: PropTypes.string,
  /** - Set dots position. */
  slideDotsPosition: PropTypes.oneOf(['left', 'center', 'right'])
}

FeefoSlide.defaultProps = {
  slideDotsPosition: 'center'
}

export default FeefoSlide
