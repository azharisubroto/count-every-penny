export default function ThanksFreebie() {
  return (
    <>
      <div className="card mb-40px">
        <div className="card-body">
          <figure className="freebie mb-0">
            <div className="freebie-img">
              <img src="/static/img/thankyou/first-aid-kit.png" alt="First Aid Kit" />
            </div>
            <figcaption>
              <h3>
                <span>You will get a free</span> first aid kit when you switch &amp; save in <span>February</span>
              </h3>
            </figcaption>
          </figure>
        </div>
      </div>
      <style jsx>{`
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
        }
        .freebie {
          display: flex;
          align-items: center;
          margin-bottom: 40px;

          &-img {
            width: 200px;
            flex: 0 0 200px;
            margin-right: 40px;
            @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
              width: 80px;
              flex: 0 0 80px;
              margin-right: 15px;
            }
            @media screen and (max-width: 768px - 1) {
              width: 80px;
              flex: 0 0 80px;
              margin-right: 15px;
            }
            img {
              width: 100%;
              height: auto;
            }
          }

          figcaption {
            h3 {
              font-weight: bold;
              font-size: 42px;
              line-height: 45px;
              margin-bottom: 0;
              @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                font-size: 20px;
                line-height: 27px;
              }

              @media screen and (max-width: 768px - 1) {
                font-size: 20px;
                line-height: 27px;
              }

              span {
                color: $primary;
              }
            }
          }
        }
      `}</style>
    </>
  )
}
