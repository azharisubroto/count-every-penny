const Partners = () => {
  const partners = [
    '/static/img/partners/partner-ahm.webp',
    '/static/img/partners/partner-nib.webp',
    '/static/img/partners/partner-australianUnity.webp',
    '/static/img/partners/partner-hcf.webp',
    '/static/img/partners/partner-peoplecare.webp',
    '/static/img/partners/partner-bupa.webp',
    '/static/img/partners/partner-gmhba.webp'
  ]

  return (
    <>
      <div className="partners">
        {partners.map((item) => (
          <div key={item}>
            <img src={item} alt="" loading="lazy" height="40" width="90" />
          </div>
        ))}
      </div>
      <style jsx>{`
        .partners {
          width: 100%;
          margin: 0 auto;
          max-width: 1000px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default Partners
