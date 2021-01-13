/**
 * Age Card
 * @param {color} param determine color
 */
const AgeCardBlueYellow = ({ color, link }) => {
  const clr = color ? color : '#0C345A'
  return (
    <>
      <div className="age-card-2">
        <div className="age-card-2--head">Select your age and compare health insurance now</div>

        <div className="age-card-2--content">
          <div className="age-card-2--subheadline">
            <strong>Australia:</strong> We saved our average customer <strong>$357.95</strong> on their annual premium!
          </div>

          <div className="mt-3 row row-cols-3 row-cols-sm-6 row-cols-md-6 row-cols-lg-4 g-2">
            {Array.apply(null, {
              length: 28
            }).map((e, i) => (
              <div className="col" key={`side-cta-${i}`}>
                <a className="btn btn-primary btn-block" href={link} key={'age-' + i}>
                  <strong>
                    {i == 0 && <>&lt; </>}
                    {i == 27 && <>&gt; </>}
                    {i + 50}
                  </strong>
                </a>
              </div>
            ))}
          </div>

          <div className="age-card-2--subheadline" style={{ marginTop: 20 }}>
            *Average savings based on the data from 13,136 customers during 2020
          </div>
        </div>
      </div>

      <style jsx>{`
        .age-card-2 {
          background-color: ${clr};
          color: #fff;

          .age-card-2--head {
            font-size: 20px;
            line-height: 30px;
            font-weight: 700;
            background: rgba(0, 0, 0, 0.2);
            color: #fff;
            padding: 10px 20px;
            text-align: center;
          }

          .age-card-2--content {
            padding: 10px 20px 15px;
            font-size: 18px;
          }

          .age-card-2--subheadline {
            background: rgba(0, 0, 0, 0.2);
            padding: 8px;
            font-size: 14px;
          }
        }

        .age-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }
      `}</style>
    </>
  )
}

export default AgeCardBlueYellow
