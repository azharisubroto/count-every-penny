import React from 'react'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import theme from '@/theme'

const ThanksSlide = () => {
  return (
    <>
      <section className="thanks-slide">
        <div className="cont">
          <CarouselProvider
            visibleSlides={4}
            totalSlides={7}
            step={1}
            dragStep={1}
            interval={4000}
            isPlaying={true}
            isIntrinsicHeight>
            <Slider classNameAnimation="hictransition">
              {Array.apply(null, {
                length: 7
              }).map((e, i) => (
                <Slide index={i} key={i}>
                  <div className="card card-fund">
                    <div className="card-header">
                      <h6>Fund 1</h6>
                    </div>
                    <div className="card-body">
                      <div className="card-fund__item">
                        <p>October 2020</p>
                        <h6>5.58%</h6>
                      </div>
                      <div className="card-fund__item">
                        <p>April 2020</p>
                        <h6>3.78%</h6>
                      </div>
                      <div className="card-fund__item">
                        <p>Total Rate Rise</p>
                        <h6 className="total">9.36%</h6>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <DotGroup className="carousel-dot" dotNumbers />
          </CarouselProvider>
        </div>
      </section>
      {/* Style */}
      <style jsx>
        {`
          .card {
            &-fund {
              margin: 0 7.5px;
              .card-header {
                background-color: ${theme.palette.cep.primary};
                h6 {
                  font-size: 20px;
                  line-height: 27px;
                  color: #fff;
                }
              }

              &__item {
                margin-bottom: 15px;
                p {
                  font-size: 18px;
                  line-height: 25px;
                  margin-bottom: 0;
                }
                h6 {
                  font-weight: 700;
                  font-size: 18px;
                  line-height: 25px;
                  margin-bottom: 0;

                  &.total {
                    color: #b41818;
                  }
                }

                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
          .carousel-dot {
            text-align: center;
            button {
              background: ${theme.palette.cep.primary};
              border-radius: 50%;
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
        `}
      </style>
    </>
  )
}

export default ThanksSlide
