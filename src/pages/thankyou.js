import React from 'react'
import Head from 'next/head'
import NavBarThanks from '@/components/NavBarThanks'
import FooterMisc from '@/components/FooterMisc'
import LineSeparator from '@/components/LineSeparator'
import ThanksRating from '@/components/ThanksRating'
import ThanksFreebie from '@/components/ThanksFreebie'
import ThanksVideo from '@/components/ThanksVideo'
import ThanksBenefit from '@/components/ThanksBenefit'
import ThanksAward from '@/components/ThanksAward'
import ThanksSwiper from '@/components/ThanksSwiper'

export default function ThankYou1() {
  React.useEffect(() => {
    if (typeof window != 'undefined') {
      window['optimizely'] = window['optimizely'] || []
      window['optimizely'].push({
        type: 'event',
        eventName: 'typageventoptimizely',
        tags: {
          revenue: 0, // Optional in cents as integer (500 == $5.00)
          value: 0.0 // Optional as float
        }
      })
      //console.log('optimizely fired')
    }
  })

  return (
    <>
      <Head>
        <title>Thank You</title>
        {/* <link href="/static/css/theme.css" rel="stylesheet" /> */}
      </Head>
      {/* NAVBAR */}
      <NavBarThanks />
      <div className="page page--thanks">
        <div className="page-content">
          <section className="thanks-title">
            <div className="container">
              <h1>THANK YOU</h1>
              <h4>We are preparing some money savings quotes for you now, and will be in touch with you shortly!</h4>
            </div>
          </section>
          <section className="thanks-recommend">
            <div className="container">
              <p>In the meantime we recommend...</p>
              <ul className="check">
                <li>
                  <strong>Getting your hands on your most recent health insurance bill</strong>, just so you know the
                  exact policy you are paying for and the amount you are paying... so we can <strong>beat it</strong>.
                </li>
                <li>
                  Having a think about your <strong>‘must have’ hospital and extras cover</strong> and your{' '}
                  <strong>‘nice to have’ hospital and extras cover</strong>. Think about whether you need top of the
                  range hospital cover? Or maybe you wear glasses and you might need optical cover? If you don’t know
                  the answers, let our experts know and they can help you out.
                </li>
              </ul>
            </div>
            <LineSeparator />
          </section>
          {/* THANKS RATING */}
          <ThanksRating />
          <section className="thanks-freebie">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <ThanksFreebie />

                  <ThanksVideo />
                </div>
              </div>
            </div>
          </section>

          <section className="thanks-table">
            <div className="container page-content-table">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-widget">
                    <div className="card-body">
                      <h5 className="card-title text-center mb-10px">
                        Health Insurance Premium Increases in 2020 and 2021
                      </h5>
                      <p className="mb-30px text-center">
                        The table below shows that some funds (which we cannot name here) are increasing their premiums
                        by 4 times as much as other funds. You can talk to one of our advisors for the full details
                      </p>
                      <div className="card-table">
                        <table className="table table-borderless table-fund">
                          <thead>
                            <tr className="table-orange text-left">
                              <th></th>
                              <th>Oct 2020</th>
                              <th>April 2021</th>
                              <th>Total Rate Rise</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Fund 1</td>
                              <td>5.58%</td>
                              <td>3.78%</td>
                              <td className="table-danger">9.36%</td>
                            </tr>
                            <tr>
                              <td>Fund 2</td>
                              <td>4.68%</td>
                              <td>4.07%</td>
                              <td className="table-danger">8.75%</td>
                            </tr>
                            <tr>
                              <td>Fund 3</td>
                              <td>4.32%</td>
                              <td>4.30%</td>
                              <td className="table-danger">8.62%</td>
                            </tr>
                            <tr>
                              <td>Fund 4</td>
                              <td>3.91%</td>
                              <td>4.26%</td>
                              <td className="table-danger">8.17%</td>
                            </tr>
                            <tr>
                              <td>Fund 5</td>
                              <td>3.94%</td>
                              <td>0.83%</td>
                              <td className="table-success">4.77%</td>
                            </tr>
                            <tr>
                              <td>Fund 6</td>
                              <td>2.66%</td>
                              <td>1.11%</td>
                              <td className="table-success">3.77%</td>
                            </tr>
                            <tr>
                              <td>Fund 7</td>
                              <td>2.90%</td>
                              <td>0.50%</td>
                              <td className="table-success">3.40%</td>
                            </tr>
                            <tr>
                              <td>Fund 8</td>
                              <td>1.98%</td>
                              <td>0.94%</td>
                              <td className="table-success">2.92%</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td>Industry Average</td>
                              <td>2.92%</td>
                              <td>2.74%</td>
                              <td>5.66%</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <p className="card-source">Source: Health.gov.au</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-widget">
                    <div className="card-body">
                      <h5 className="card-title text-center mb-10px">
                        Average Savings with Count Every Penny and Health Insurance Comparison by Life Stage
                      </h5>
                      <p className="mb-30px text-center">
                        See the average savings our customers made by life stage in 2020
                      </p>
                      <div className="card-table">
                        <table className="table table-borderless table-fund">
                          <thead>
                            <tr className="table-orange text-left">
                              <th>Life Stage</th>
                              <th>Average Annual Saving</th>
                            </tr>
                          </thead>
                          <tbody className="text-left">
                            <tr>
                              <td>Couple</td>
                              <td>$300.08</td>
                            </tr>
                            <tr>
                              <td>Extended Family</td>
                              <td>$645.80</td>
                            </tr>
                            <tr>
                              <td>Family</td>
                              <td>$594.26</td>
                            </tr>
                            <tr>
                              <td>Single</td>
                              <td>$296.28</td>
                            </tr>
                            <tr>
                              <td>Single Parent</td>
                              <td>$540.61</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <ThanksSwiper />

          {/* Features */}
          <ThanksBenefit />

          {/* Award */}
          <ThanksAward />
        </div>
      </div>

      <FooterMisc style={{ marginTop: 0 }} />
      <style jsx global>{`
        $primary: #f09020;
        $secondary: #0b3053;
        $white: #fff;
        $black: #000;
        .card {
          position: relative;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          box-shadow: 0px 6px 10px rgba($black, 0.1);
          margin-bottom: 20px;

          &-shadow {
            position: relative;
            border-radius: 5px;
            border: 1px solid #e3e3e3;
            box-shadow: 0px 6px 10px rgba($black, 0.1);
            margin-bottom: 20px;
          }

          &-body {
            padding: 20px;
          }

          &-img {
            img {
              width: 100%;
              height: auto;
            }
          }

          &-footer {
            background-color: #f8f8f8;
            border-color: #e3e3e3;
          }

          &-widget {
            margin-bottom: 40px;
            h5 {
              &.card-title {
                font-size: 24px;
                line-height: 34px;
                margin-bottom: 20px;
                font-weight: 700;

                @media screen and (max-width: 768px - 1) {
                  font-size: 22px;
                  line-height: 30px;
                }
              }

              + p {
                font-size: 16px;
                line-height: 24px;
              }
            }
            .card {
              &-body {
                padding: 20px;
              }

              &-img {
                img {
                  width: 100%;
                  height: auto;
                }
              }

              &-source {
                font-style: italic;
                font-size: 16px;
                line-height: 20px;
                text-align: center;
                color: #707070;
                margin-bottom: 0;

                @media screen and (max-width: 768px - 1) {
                  font-size: 14px;
                  line-height: 22px;
                }

                &.small {
                  font-size: 12px;
                  line-height: 15px;
                  font-style: normal;
                }
              }

              &-footer {
                padding: 25px;
                p {
                  margin-bottom: 0;
                  font-size: 15px;
                  line-height: 22px;
                }
              }
            }
          }

          &-table {
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 20px;
          }
        }
        .page {
          padding-bottom: 40px;
          &--thanks {
            color: #333;
            background-color: #f9f9f9;
            padding-top: 20px;

            .page-content {
              background-color: #f9f9f9;
              padding: 0;
            }
          }

          &-content {
            padding: 20px;
            background-color: $white;
            border-radius: 4px;
            &__item {
              margin-bottom: 60px;

              &:last-of-type {
                margin-bottom: 0;
              }
            }
            h4 {
              font-size: 24px;
              margin-bottom: 20px;
              font-weight: 700;
              margin-top: 0;
              &:focus,
              &:active {
                outline: none;
                box-shadow: none;
              }

              &.section-title {
                margin-bottom: 35px;
              }
            }

            &.js-toc-content {
              h1::before,
              h2::before,
              h3::before,
              h4::before,
              h5::before,
              h6::before {
                display: block;
                content: ' ';
                height: 60px;
                margin-top: -60px;
                visibility: hidden;
              }
            }

            p {
              font-size: 18px;
              line-height: 28px;
              margin-top: 0;
              margin-bottom: 20px;
            }

            a {
              color: $primary;

              &:hover {
                color: lighten($primary, 10%);
              }
            }

            &-table {
              margin-bottom: 20px;
              border-radius: 4px;
              overflow: hidden;
              .table {
                border: 1px solid #efefef;
                border-spacing: 0;
                tr {
                  th,
                  td {
                    font-size: 18px;
                    line-height: 30px;
                    padding: 15px 20px;
                    color: #333;
                    vertical-align: middle;
                    border: none;

                    @media screen and (max-width: 768px - 1) {
                      font-size: 15px;
                      line-height: 18px;
                      padding: 15px 10px;
                    }
                  }

                  td {
                    background-color: #fdfdfd;
                  }

                  th {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 27px;
                  }
                }

                &-orange {
                  th {
                    background-color: $primary;
                    color: $white !important;
                    &:nth-child(2) {
                      background-color: #e98a1a;
                    }
                    &:nth-child(3) {
                      background-color: #d3801f;
                    }
                  }
                }

                &-danger {
                  background-color: #e8b9b9 !important;
                  color: #b41818 !important;
                }

                &-success {
                  background-color: #dee8b9 !important;
                  color: #85a412 !important;
                }

                &-fund {
                  margin-bottom: 0;
                  text-align: center;
                  border: 1px solid #efefef;
                  .table-orange {
                    th {
                      background-color: #f09020;
                      color: $white;
                      &:nth-child(2) {
                        background-color: #e98a1a;
                      }
                      &:nth-child(3) {
                        background-color: #e1871e;
                      }
                      &:last-child {
                        background-color: #d3801f;
                      }
                    }
                  }
                  tbody {
                    tr {
                      td {
                        font-weight: 700;

                        &:first-child {
                          font-weight: 600;
                          text-align: left;
                        }

                        &:nth-child(2) {
                          background-color: #fdfdfd;
                        }
                        &:last-child {
                          background-color: #f9f9f9;
                        }
                      }
                    }
                  }
                  tfoot {
                    tr {
                      td {
                        background-color: #fee9cf;
                        color: #7c4e18;
                        font-weight: 700;

                        &:first-child {
                          font-weight: 600;
                          text-align: left;
                        }
                      }
                    }
                  }
                }
              }
            }

            ul {
              padding: 0;
              margin-bottom: 0;
              padding-left: 10px;
              li {
                font-size: 18px;
                line-height: 28px;
                margin-top: 0;
                margin-bottom: 20px;
                position: relative;
              }

              &.check {
                list-style: none;

                li {
                  padding-left: 40px;
                  &:before {
                    position: absolute;
                    content: '';
                    width: 26px;
                    height: 26px;
                    left: 0;
                    background-image: url('/static/img/misc-pages/check.png');
                    background-size: cover;
                    top: 2px;
                  }
                }
              }
            }
          }

          .thanks {
            &-title {
              text-align: center;
              margin-bottom: 40px;
              h1 {
                font-weight: 800;
                font-size: 55px;
                line-height: 1;
                letter-spacing: 0.07em;
                color: $primary;
                text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
                margin-bottom: 10px;

                @media screen and (max-width: 768px - 1) {
                  font-size: 45px;
                }
              }

              h4 {
                font-weight: 700;
                font-size: 24px;
                line-height: 40px;
                margin-bottom: 0;
              }
            }

            &-table {
              @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                display: none;
              }
              @media screen and (max-width: 768px - 1) {
                display: none;
              }
            }
          }
        }
      `}</style>
    </>
  )
}
