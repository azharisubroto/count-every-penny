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
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {Array.apply(null, {
            length: 7
          }).map((e, i) => (
            <div index={i} key={i} className="swiper-slide">
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
          ))}
        </div>

        <div className="swiper-pagination"></div>
      </div>
      {/* Style */}
      <style jsx>
        {`
          .swiper {
            &-slide {
              width: 30%;
              @media screen and (max-width: 768px - 1) {
                width: 60%;
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
