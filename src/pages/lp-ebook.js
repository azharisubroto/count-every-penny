import Head from 'next/head'
import NavBarEbook from '@/components/NavBarEbook'
import FormEbook from '@/components/FormEbook'
import FooterSimpleEbook from '@/components/FooterSimpleEbook'

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Landing Page Ebook</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"></link>
      </Head>
      {/* NAVBAR */}
      <NavBarEbook />
      <div className="page page--ebook">
        <section className="hero">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-11">
                <div className="hero-caption">
                  <h1>
                    Get your <span className="underline">FREE</span> eBook Now
                  </h1>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum justo ut justo congue
                    mollis.
                  </h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-11">
                <div className="row justify-content-lg-center justify-content-start align-items-md-center">
                  <div className="col-lg-5 col-md-6 col-10 pr-lg-4 pr-3 pl-lg-3 pl-md-0 pl-3">
                    <div className="hero-ebook">
                      <img src="/static/img/ebook/ebook.png" alt="Ebook" className="w-100" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-5 pl-lg-4 pl-3 hero-form">
                    <FormEbook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-11">
                <h3 className="features-title">
                  All the dirty little secrets your health insurer doesn’t want you to know about. Written by industry
                  insiders. Get it <strong>FREE for a limited time</strong>, delivered instantly to your email inbox.
                </h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-11 col-11">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="features-list">
                      <li>The most complained about health insurers in Australia</li>
                      <li>How much has each fund’s premium increased over the last 23 years</li>
                      <li>Which funds have the most private hospital agreements</li>
                      <li>What percentage extras treatment expenses are covered by the fund</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="features-list">
                      <li>Which funds pay out the most to their members</li>
                      <li>Which funds had the highest rate rises in 2020 and 2021</li>
                      <li>What percentage of claims were fully refunded</li>
                      <li>How to get hospital AND extras cover from as little as $2.93 per day</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSimpleEbook style={{ marginTop: 0 }} />

      <style jsx>
        {`
          .page {
            padding-bottom: 40px;
            &--ebook {
              .container {
                position: relative;
                z-index: 2;
              }
              .hero {
                position: relative;
                padding: 35px 0;
                background-color: #f09020;
                overflow: hidden;

                &:before {
                  width: 110%;
                  height: 50%;
                  position: absolute;
                  left: 50%;
                  bottom: -15%;
                  content: '';
                  background-color: #fff;
                  transform: translateX(-50%) rotate(8deg);

                  @media screen and (max-width: 992px - 1) {
                    width: 130%;
                  }
                }

                &-caption {
                  text-align: center;
                  color: #fff;

                  h1 {
                    font-weight: 800;
                    font-size: 46px;
                    line-height: 63px;
                    margin-bottom: 10px;

                    @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                      font-size: 36px;
                      line-height: 49px;
                    }

                    @media only screen and (max-width: 768px - 1) {
                      font-size: 32px;
                      line-height: 38px;
                    }

                    span {
                      &.underline {
                        position: relative;

                        &:before {
                          width: 138px;
                          height: 6px;
                          position: absolute;
                          bottom: 0;
                          background-image: url('/static/img/ebook/underline.png');
                          background-size: 138px 6px;
                          content: '';
                          left: 50%;
                          transform: translateX(-50%);

                          @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                            width: 100px;
                            height: 6px;
                            background-size: 100px 6px;
                          }

                          @media only screen and (max-width: 768px - 1) {
                            width: 84px;
                            height: 5px;
                            background-size: 84px 5px;
                          }
                        }
                      }
                    }
                  }

                  h3 {
                    font-weight: 400;
                    font-size: 30px;
                    line-height: 41px;
                    margin-bottom: 30px;

                    @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                      font-size: 24px;
                      line-height: 33px;
                    }

                    @media only screen and (max-width: 768px - 1) {
                      font-size: 18px;
                      line-height: 25px;
                    }
                  }
                }

                &-form {
                  @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                    padding-right: 0;
                  }
                  @media screen and (max-width: 768px - 1) {
                    margin-top: -50%;
                  }
                }
              }

              .features {
                &-title {
                  text-align: center;
                  font-weight: 700;
                  font-size: 32px;
                  line-height: 45px;
                  color: #120136;
                  margin-bottom: 60px;

                  @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                    font-size: 24px;
                    line-height: 33px;
                  }

                  @media only screen and (max-width: 768px - 1) {
                    font-size: 24px;
                    line-height: 33px;
                  }

                  strong {
                    font-weight: 900;
                    color: #035aa6;
                  }
                }

                &-list {
                  list-style: none;
                  margin-bottom: 0;
                  padding: 0;

                  li {
                    padding-left: 40px;
                    font-weight: bold;
                    font-size: 22px;
                    line-height: 30px;
                    color: #120136;
                    margin-bottom: 30px;
                    position: relative;

                    @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                      font-size: 20px;
                      line-height: 27px;
                      color: #494949;
                    }

                    @media only screen and (max-width: 768px - 1) {
                      font-size: 20px;
                      line-height: 27px;
                      color: #494949;
                    }
                    &:before {
                      position: absolute;
                      content: '';
                      width: 25px;
                      height: 25px;
                      left: 0;
                      background-image: url('/static/img/ebook/check.png');
                      background-size: cover;
                      top: 2px;
                    }
                  }
                }
              }
            }
          }
        `}
      </style>
    </>
  )
}
