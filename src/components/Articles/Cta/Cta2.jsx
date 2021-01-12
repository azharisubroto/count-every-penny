function Cta2() {
  const mainlink = '/form/step1'
  return (
    <>
      {/* Freebies */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="article-widget-freebies py-3">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src="/static/img/articles/firs-aid-kit.png" alt="First Aid Kit Free" loading="lazy" />
                    </div>
                  </div>
                  <div className="card-ribbon">
                    <h6>
                      Get
                      <br />
                      This for
                      <br />
                      FREE!
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="article-widget-freebies__title">
                  <img src="/static/img/icons/free.svg" alt="Free" loading="lazy" />
                  <h5>210 PCS Emergency First Aid Kit - Home, Car &amp; Travel</h5>
                </div>
                <p className="mb-3">
                  Get this deluxe 210 piece first aid kit FREE when you switch and save with Health Insurance
                  Comparison. While stocks last only.
                </p>
                <a href={mainlink} className="btn btn-primary btn-lg">
                  Compare Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-widget-freebies {
          .card {
            &-body {
              padding: 35px;
              padding-top: 70px;
            }

            &-img {
              text-align: center;
              img {
                max-width: 100%;
                height: auto;
              }
            }

            &-ribbon {
              width: 119px;
              height: 117px;
              background-image: url('/static/img/icons/ribbon.png');
              background-size: cover;
              position: absolute;
              left: 20px;
              top: -12px;

              h6 {
                width: 100px;
                padding: 10px;
                font-weight: 700;
                font-size: 20px;
                line-height: 24px;
                text-align: center;
                color: #fff;
              }
            }
          }

          &__title {
            display: flex;
            align-items: center;

            img {
              height: 37px;
              width: auto;
              margin-bottom: 22px;
              margin-right: 25px;
            }

            h5 {
              font-weight: 700;
              font-size: 20px;
              line-height: 24px;
              color: #000;
              margin-bottom: 22px;
            }
          }
          p {
            font-size: 18px;
            line-height: 34px;
            margin-bottom: 28px;
          }
        }
      `}</style>
    </>
  )
}

export default Cta2
