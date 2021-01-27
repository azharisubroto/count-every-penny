const Partners = (props) => {
  const { type } = props
  const partners = [
    '/static/img/partners/partner-ahm.webp',
    '/static/img/partners/partner-nib.webp',
    '/static/img/partners/partner-australianUnity.webp',
    '/static/img/partners/partner-hcf.webp',
    '/static/img/partners/partner-peoplecare.webp',
    '/static/img/partners/partner-bupa.webp',
    '/static/img/partners/partner-gmhba.webp'
  ]

  const partnersWhite = [
    '/static/img/partners/white/partner-ahm.svg',
    '/static/img/partners/white/partner-nib.svg',
    '/static/img/partners/white/partner-australianUnity.svg',
    '/static/img/partners/white/partner-hcf.svg',
    '/static/img/partners/white/partner-peoplecare.svg',
    '/static/img/partners/white/partner-bupa.svg',
    '/static/img/partners/white/partner-gmhba.svg'
  ]

  return (
    <>
      <div className="partners">
        {type == 'white' ? (
          <>
            {partnersWhite.map((item) => (
              <div key={item}>
                <img src={item} alt="" loading="lazy" height="50" width="110" />
              </div>
            ))}
          </>
        ) : (
          <>
            {partners.map((item) => (
              <div key={item}>
                <img src={item} alt="" loading="lazy" height="40" width="90" />
              </div>
            ))}
          </>
        )}
      </div>
      <style jsx>{`
        .partners {
          width: 100%;
          margin: 5px auto;
          max-width: 1000px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default Partners
