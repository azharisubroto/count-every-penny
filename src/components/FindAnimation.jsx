import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '@/components/Lottie/file-search.json'

function findAnimation() {
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

  // Lottie setup
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <section className="partners-section">
        <div className="container">
          <Lottie options={defaultOptions} height={300} width={300} />

          <div className="partners">
            {partners.map((item) => (
              <div key={item}>
                <img src={`${statically}/${hichost}${item}${imgopt}`} alt="" loading="lazy" height="40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1170px;
          margin: 0 auto;
        }

        .hero {
          font-size: 25px;
          text-align: center;
          padding: 90px 0 0;
          font-weight: 800;

          h1 {
            margin: 0 auto;
            max-width: 1170px;
            font-size: 32px;
          }

          h2 {
            margin-top: 0;
          }

          p {
            max-width: 1000px;
            margin: 0 auto;
            font-size: 20px;
            font-weight: 400;
            line-height: 35px;
          }
        }

        .partners-section {
          padding: 30px 0;
          min-height: 50vh;
        }
        .partners {
          width: 100%;
          margin: 0 auto;
          max-width: 1000px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: center;
        }

        .loading {
          @extend .hero;
          position: relative;
          img {
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  )
}

export default findAnimation
