import React, { useEffect, useRef } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
import 'swiper/swiper-bundle.css'
import theme from '@/theme'
const ThanksSwiper = () => {
  const swiper = useRef(null)
  useEffect(() => {
    swiper.current = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 15,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    //add necessary parameters required by checking the offical docs of swiper
  }, [])
  return (
    <>
      <section className="thanks-slide position-relative px-5">
        <div className="container">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
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
              </div>
              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Fund 2</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6>4.68%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6>4.07%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total">8.75%</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Fund 3</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6>4.32%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6>4.30%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total">8.62%</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Fund 4</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6>3.91%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6>4.26%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total">8.17%</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Fund 5</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6>3.94%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6>0.83%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total total-success">4.77%</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Fund 6</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6>2.66%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6>1.11%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total total-success">3.77%</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Fund 7</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6>2.90%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6>0.50%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total total-success">3.40%</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Fund 8</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6>1.98%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6>0.94%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total total-success">2.92%</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-fund">
                  <div className="card-header">
                    <h6>Industry Average</h6>
                  </div>
                  <div className="card-body">
                    <div className="card-fund__item">
                      <p>October 2020</p>
                      <h6 className="total total-warning">2.92%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>April 2020</p>
                      <h6 className="total total-warning">2.74%</h6>
                    </div>
                    <div className="card-fund__item">
                      <p>Total Rate Rise</p>
                      <h6 className="total total-warning">5.66%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* Arrow */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </section>
      {/* Style */}
      <style jsx>
        {`
          $primary: #f09020;
          $secondary: #0b3053;
          $white: #fff;
          $black: #000;
          .thanks {
            &-slide {
              margin-bottom: 40px;
              display: none;
              @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                display: block;
              }
              @media screen and (max-width: 768px - 1) {
                display: block;
              }
            }
          }
          .swiper {
            &-slide {
              width: calc(100% / 3);
              @media screen and (max-width: 768px - 1) {
                width: 50%;
              }
              @media screen and (max-width: 540px) {
                width: 100%;
              }
            }
            &-button {
              &-next,
              &-prev {
                top: 35%;
                color: $primary;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: $white;
                box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
                display: flex;
                justify-content: center;
                align-items: center;

                &:after {
                  font-size: 1.5rem;
                }
              }
              &-next {
                right: 25px;
              }

              &-prev {
                left: 25px;
              }
            }
            &-pagination {
              position: relative;
              margin: 40px 0;

              &-bullet {
                width: 10px;
                height: 10px;
                outline: 0;
                border: 0;
                margin: 0 3px;
                opacity: 0.25;
                background: $primary;
                &-active {
                  opacity: 1;
                }
              }
            }
          }
          .card {
            &-fund {
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

                    &-success {
                      color: #85a412 !important;
                    }

                    &-warning {
                      color: #7c4e18 !important;
                    }
                  }
                }

                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
        `}
      </style>
    </>
  )
}
export default ThanksSwiper
