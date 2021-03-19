import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '@/components/Lottie/file-search.json'

function findAnimation() {
  const statically = 'https://cdn.statically.io/img'
  const hichost = 'counteverypenny.com.au/static/img/partners'
  const imgopt = '?h=75&q=70&f=webp'
  const partners = [
    '/partner-bupa.webp',
    '/partner-ahm.webp',
    '/partner-nib.webp',
    '/partner-australianUnity.webp',
    '/partner-hcf.webp',
    '/partner-peoplecare.webp',
    '/partner-gmhba.webp'
  ]

  // Lottie setup
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    path: 'https://assets3.lottiefiles.com/packages/lf20_gfl00zkx.json',
    renderer: 'canvas',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    path: 'https://assets9.lottiefiles.com/packages/lf20_jfmjd0wo.json',
    renderer: 'canvas',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <section className="partners-section">
        <div className="container">
          <Lottie options={defaultOptions1} height={300} width={300} />
          <Lottie options={defaultOptions2} height={300} width={300} />

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
