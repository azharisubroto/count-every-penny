export default function ThanksAward() {
  return (
    <>
      <section className="thanks-award">
        <div className="container">
          <div className="card card-award">
            <div className="card-award-gold">
              <img src="/static/img/form/gold-award.png" alt="Gold Award" />
            </div>
            <div className="card-award-year">
              {Array.apply(null, {
                length: 7
              }).map((e, i) => (
                // eslint-disable-next-line react/jsx-key
                <div key={`award-${i}`} className="card-award-year__item">
                  <img src={'/static/img/form/award-' + parseInt(i + 1) + '-1.png'} alt="Yearly Award" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .card {
          &-award {
            display: flex;
            align-items: center;
            flex-direction: row;
            padding: 20px 55px;
            box-shadow: 0px 18px 24px rgba(0, 0, 0, 0.05);
            border-radius: 4px;
            border: none;

            @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
              align-items: flex-start;
            }

            @media screen and (max-width: 768px - 1) {
              align-items: center;
              flex-direction: column;
            }

            &-gold {
              width: 180px;
              flex: 0 0 180px;
              padding-right: 10px;
              @media screen and (max-width: 768px - 1) {
                padding-right: 0;
                margin-bottom: 40px;
              }
              img {
                width: 100%;
                height: auto;
              }
            }

            &-year {
              display: flex;
              flex-wrap: wrap;

              &__item {
                width: calc(100% / 7);
                padding: 0 10px;

                @media only screen and (min-width: 768px) and (max-width: 992px - 1) {
                  width: calc(100% / 4);
                  margin-bottom: 10px;
                }

                @media screen and (max-width: 768px - 1) {
                  width: calc(100% / 2);
                  margin-bottom: 10px;
                }

                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}
