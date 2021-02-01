import LineSeparator from '@/components/LineSeparator'
export default function ThanksRating() {
  return (
    <>
      <section className="thanks-rating">
        <div className="container">
          <h4 className="section-title">Count Every Penny and Health Insurance Comparison Reviews</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-rating">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                      <div className="card-stars">
                        <img src="/static/img/thankyou/rating/stars-1.svg" alt="Five Stars" />
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="card-brand">
                        <img src="/static/img/thankyou/rating/feefo.png" alt="Feefo" />
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    <h6 className="card-title">Great customer service</h6>
                    <p>
                      Tom Carroll was very professional, friendly and helpful. He took the time to explain everything to
                      me and found me a better coverage for less $$ monthly! Thanks Tom = legend!
                    </p>
                  </div>
                  <h6 className="card-author">— Caroline</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-rating">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                      <div className="card-stars">
                        <picture>
                          <source
                            srcSet="/static/img/thankyou/rating/stars-2-m.svg"
                            media="(max-width: 768px)"
                            type="image/png"
                          />
                          <source
                            srcSet="/static/img/thankyou/rating/stars-2.svg"
                            media="(min-width: 769px)"
                            type="image/png"
                          />
                          <img src="/static/img/thankyou/rating/stars-2.svg" alt="Five Stars" />
                        </picture>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="card-brand">
                        <img src="/static/img/thankyou/rating/word-of-mouth.png" alt="Word of Mouth" />
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>
                      Brittany gave exceptional service - thank you so much. I am saving over $700 a year. Wish I had
                      done it before.
                    </p>
                  </div>
                  <h6 className="card-author">— Caroline</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineSeparator />
      </section>
      <style jsx>{`
        .card {
          position: relative;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          &-rating {
            .card {
              &-title {
                font-size: 24px;
                line-height: 33px;
                margin-bottom: 15px;
                font-weight: 700;
              }
              &-body {
                p {
                  margin-bottom: 15px;
                }
              }

              &-stars {
                margin-bottom: 15px;
                img {
                  height: 30px;
                  width: auto;
                }
              }

              &-brand {
                margin-bottom: 15px;
                img {
                  height: 30px;
                  width: auto;

                  @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                    height: 22px;
                  }
                  @media screen and (max-width: 768px - 1) {
                    height: 22px;
                  }
                }
              }

              &-text {
                min-height: 147px;

                @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                  min-height: 213px;
                }

                @media screen and (max-width: 768px - 1) {
                  min-height: unset;
                }
              }

              &-author {
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 0;
              }
            }
          }
        }
      `}</style>
    </>
  )
}
