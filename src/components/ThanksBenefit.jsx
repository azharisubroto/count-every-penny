export default function ThanksBenefit() {
  return (
    <>
      <section className="thanks-benefit">
        <div className="container">
          <h4 className="section-title">What can you expect next? </h4>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <figure className="feature">
                <div className="feature-img">
                  <img src="/static/img/thankyou/features/1.svg" alt="Phone Call" />
                </div>
                <figcaption>
                  <h5>A phone call from one of our experts</h5>
                  <p>
                    They will talk you through your health insurance quotes. Our experts save the average Australian
                    $357.95* on their health cover.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6">
              <figure className="feature">
                <div className="feature-img">
                  <img src="/static/img/thankyou/features/2.svg" alt="Zero paperwork" />
                </div>
                <figcaption>
                  <h5>Zero paperwork</h5>
                  <p>
                    Our experts handle the switching process from your old fund to your new one, if you do choose to
                    switch.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6">
              <figure className="feature">
                <div className="feature-img">
                  <img src="/static/img/thankyou/features/3.svg" alt="Zero paperwork" />
                </div>
                <figcaption>
                  <h5>Charge Free</h5>
                  <p>
                    If you do switch your health cover, there are no fees or markups. All prices are direct from
                    insurers and are guaranteed.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6">
              <figure className="feature">
                <div className="feature-img">
                  <img src="/static/img/thankyou/features/4.svg" alt="Zero paperwork" />
                </div>
                <figcaption>
                  <h5>Transparent Contract</h5>
                  <p>
                    You should get a policy that has your back, and won’t let you down when you need it, and if it does,
                    all policies we compare have no lock-in contracts.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Style */}
      <style jsx>
        {`
          .feature {
            margin-bottom: 80px;
            text-align: center;

            &-img {
              width: 120px;
              height: 120px;
              background-color: rgba(#564e66, 0.05);
              border-radius: 50%;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
              margin-bottom: 20px;

              img {
                max-height: 45px;
                width: auto;
                position: relative;
                z-index: 2;
              }

              &:before {
                width: 80px;
                height: 80px;
                background-color: rgba(#564e66, 0.05);
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s ease-in-out;
                content: '';
              }
              &:hover {
                &:before {
                  transform: translate(-50%, -50%) scale(1.1);
                }
              }
            }
            figcaption {
              padding: 0 20px;
              h5 {
                font-weight: 700;
                font-size: 18px;
                line-height: 25px;
                margin-bottom: 5px;
              }

              p {
                font-size: 16px;
                line-height: 22px;
                margin-bottom: 0;
              }
            }
          }
        `}
      </style>
    </>
  )
}
