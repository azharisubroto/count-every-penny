import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { formCounter } from '@/store/counter/action'
import { wrapper } from '@/store/store'
import NavBarForm from '@/components/NavBarForm'
import { useRouter } from 'next/router'
import { logEvent } from '@/utils/analytics'
import FindAnimation from '@/components/FindAnimation'

function Step4() {
  const router = useRouter()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.counter.form)

  useEffect(() => {
    setTimeout(() => {
      logEvent({
        event_type: `Submitted Form Step 4`
      })

      dispatch(
        formCounter({
          ...state,
          step_passed: 4
        })
      )

      router.push(`/form/step5`).then(() => {
        window.scrollTo(0, 0)
      })
    }, 5000)
  }, [])

  return (
    <>
      <Head>
        <title>Finding Policies Now - Count Every Penny</title>
      </Head>

      <NavBarForm />

      <section className="hero">
        <div className="container">
          <h1>Finding Policies Now</h1>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <FindAnimation />
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

export default wrapper.withRedux(Step4)
