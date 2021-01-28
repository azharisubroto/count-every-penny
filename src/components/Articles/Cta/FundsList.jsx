function FundsList(props) {
  const { link, ...other } = props

  const funds = [
    'AHM.svg',
    'Australia-Unity.svg',
    'BUPA.svg',
    'CBHS.svg',
    'Defence-health.svg',
    'GMHBA.svg',
    'HBF.svg',
    'HCF.svg',
    'medibank.svg',
    'NIB.svg',
    'teachers-health.svg'
  ]

  return (
    <div {...other}>
      <div className="row row-cols-2 row-cols-lg-5">
        {funds.map((item) => (
          <div key={item} className="col">
            <a href={link} className="brand-card">
              <img src={`/static/img/partners/CTA/${item}`} alt="" loading="lazy" />
            </a>
          </div>
        ))}

        <div className="col-lg-40">
          <a href={link} className="brand-card">
            Other Fund
          </a>
        </div>

        <div className="col-12 col-lg-40">
          <a href={link} className="brand-card">
            I'm not currently insured
          </a>
        </div>

        <style jsx>{`
          .row {
            & > div {
              padding-top: 10px;
              padding-bottom: 10px;

              &.col-lg-40 {
                @media screen and (min-width: 992px) {
                  width: 40%;
                }
              }
            }
          }
          .brand-card {
            display: block;
            background: #ffffff;
            border: 2px solid #e6e6e6;
            border-radius: 4px;
            height: 50px;
            line-height: 45px;
            text-align: center;
            cursor: pointer;
            transition: border-color 0.2s ease;
            will-change: border;

            &:hover {
              border: 2px solid #f09020;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

FundsList.displayName = 'FundsList'

export default FundsList
