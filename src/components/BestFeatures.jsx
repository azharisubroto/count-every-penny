import dynamic from 'next/dynamic'
const FeatureBox = dynamic(() => import('@/components/FeatureBox'))

export default function BestFeatures() {
  const benefits = [
    {
      id: 1,
      title: "We're independently owned",
      link: '/form/',
      text: "Unlike many of our competitors, we aren't owned by any insurers (or vice versa)."
    },
    {
      id: 2,
      title: 'We make switching easy',
      link: '/form/',
      text: "We've been helping Aussies save on their health insurance for over 10 years."
    },
    {
      id: 3,
      title: "We're 100% Australian owned",
      link: '/form/',
      text: 'Our entire health insurance team is based in Australia and comprehensively trained.'
    }
  ]

  return (
    <section className="best-features pt-3 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>Here’s why you should compare health insurance with us</h2>
          </div>
          {benefits.map((item) => (
            <div className="col-xs-12 col-sm-4 col-lg-4" key={item.id}>
              <FeatureBox
                image={'/static/img/form/benefit-' + item.id + '.svg'}
                title={item.title}
                link={item.link}
                text={item.text}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-weight: 800;
          font-size: 28px;
          line-height: 38px;
          text-align: center;
          color: #373737;
          margin-bottom: 50px;
          margin-top: 0;
          @media screen and (min-width: 900px) {
            margin-top: 80px;
          }
        }
      `}</style>
    </section>
  )
}
