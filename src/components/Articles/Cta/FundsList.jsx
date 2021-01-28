export default function FundsList() {
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
    <div className="row row-cols-2 row-cols-lg-5">
      {funds.map((item) => (
        <div key={item} className="col">
          <div className="brand-card">
            <img src={`/static/img/partners/CTA/${item}`} alt="" loading="lazy" />
          </div>
        </div>
      ))}

      <div className="col-lg-40">
        <div className="brand-card">Other Fund</div>
      </div>

      <div className="col-12 col-lg-40">
        <div className="brand-card">I'm not currently insured</div>
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
          background: #ffffff;
          border: 1px solid #e6e6e6;
          border-radius: 4px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s ease;
          will-change: border;

          &:hover {
            border-color: #000;
          }
        }
      `}</style>
    </div>
  )
}
