import { useEffect } from 'react'
import Head from 'next/head'
import Lottie from 'react-lottie'
import * as animationData from '../../components/Lottie/file-search.json'
import { useRouter } from 'next/router'
import { logEvent } from '../../utils/tracker'

export default function Step4() {
  const router = useRouter()
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

  useEffect(() => {
    logEvent({
      event_type: `Opened Form Step 4`
    })

    setTimeout(() => {
      logEvent({
        event_type: `Submitted Form Step 4`
      })
      router.push(`/form/step5`).then(() => window.scrollTo(0, 0))
    }, 5000)
  }, [])

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
      <Head>
        <title>Finding Policies Now - Count Every Penny</title>
      </Head>

      <section className="hero">
        <div className="container">
          <h1>Finding Policies Now</h1>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <Lottie options={defaultOptions} height={300} width={300} />

          <div className="partners">
            {partners.map((item) => (
              <div key={item}>
                <img src={`${statically}/${hichost}${item}${imgopt}`} alt="" loading="lazy" height="75" />
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
          background: #fff;
          font-size: 25px;
          text-align: center;
          padding: 90px 0 0;
          font-weight: 800;

          h1 {
            margin: 0 auto;
            max-width: 1170px;
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
          background: #fff;
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
          justify-content: space-between;
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
