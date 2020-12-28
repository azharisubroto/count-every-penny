const Partners = () => {
  const statically = 'https://cdn.statically.io/img'
  const hichost = 'asset.healthinsurancecomparison.com.au/wp-content/uploads/2020/04'
  const imgopt = '?h=75&q=70&f=webp'
  const partners = [
    '/28014653/partner-ahm.png',
    '/28014719/partner-nib.png',
    '/28014701/partner-australianUnity.png',
    '/28014705/partner-hcf.png',
    '/28014720/partner-peoplecare.png',
    '/28014714/partner-gmhba.png'
  ]

  return (
    <>
      <div className="partners">
        {partners.map((item) => (
          <div key={item}>
            <img src={`${statically}/${hichost}${item}${imgopt}`} alt="" loading="lazy" height="40" width="90" />
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
