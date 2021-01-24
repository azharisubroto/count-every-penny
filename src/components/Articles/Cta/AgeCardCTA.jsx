import theme from '@/theme'

export default function AgeCardCTA(props) {
  const { link, subheading, footertext } = props

  return (
    <>
      <aside {...props}>
        <div className="age-card">
          <div className="alert text-primary">
            <strong>Australia:</strong> We saved our average customer <strong>$357.95*</strong> on their average annual
            premium.
            <br />
            Policies start from just <strong>$2.93</strong> per day!
          </div>

          <div className="headline">
            Select your age and
            <br />
            compare now!
          </div>
          <p>{subheading ? subheading : 'We’ll show best quotes for you'}</p>

          <div className="mt-3 row row-cols-3 row-cols-sm-6 row-cols-md-6 row-cols-lg-4 g-2">
            {Array.apply(null, {
              length: 28
            }).map((e, i) => (
              <div className="col" key={`side-cta-${i}`}>
                <a className="btn btn-primary btn-block" href={link} key={'age-' + i}>
                  <strong>
                    {i == 0 && <>&lt; </>}
                    {i == 27 && <>&gt; </>}
                    {i + 43}
                  </strong>
                </a>
              </div>
            ))}
          </div>

          <div className="age-card-footer">{footertext !== false && footertext}</div>
        </div>

        <style jsx>
          {`
            .age-card {
              background: ${theme.palette.primary.darken1};
              border-radius: 3px;
              padding: 20px;
              color: #fff;

              .btn-primary {
                border-bottom: 2px solid #0470d4;
              }
            }
            .alert {
              padding: 10px;
              border-radius: 5px;
              background: #fff;
              color: ${theme.palette.primary.main}!important;
            }
            .headline {
              font-weight: 800;
              font-size: 20px;
              line-height: 22px;
              text-align: center;
              color: #fff;
              margin-top: 10px;
            }
            p {
              text-align: center;
              margin: 5px 0;
            }
            .age-buttons {
              display: flex;
              flex-wrap: wrap;
            }
            .age-card-footer {
              text-align: center;
              font-size: 14px;
              padding-top: 5px;
            }
          `}
        </style>
      </aside>
    </>
  )
}
