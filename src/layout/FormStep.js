import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NavBarForm from '@/components/NavBarForm'
import LazyLoad from 'react-lazyload'
const FeefoSlide = dynamic(() => import('@/components/Articles/FeefoSlide'))
const FooterSimple = dynamic(() => import('@/components/FooterSimple'))
import { wrapper } from '@/store/store'
import PartnersFieldset from '@/components/PartnersFieldset'
// import { useRouter } from 'next/router'
// import { useSelector } from 'react-redux'

function Form({ children }) {
  // const router = useRouter()
  // const state = useSelector((state) => state.counter.form)

  // useEffect(() => {
  //   const pathname = router.pathname
  //   const step_passed = state.step_passed
  //   const step = parseInt(pathname.substr(pathname.length - 1))

  //   if (step_passed < step) {
  //     router.push(step_passed).then(() => window.scrollTo(0, 0))
  //   }
  // }, [state, router.pathname])

  return (
    <>
      <Head>
        <title>Compare Health Insurance - Count Every Penny</title>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="page page--form-9">
        <div className="page-shape">
          <img src="/static/img/bg-shape.png" alt="bg-shape" />
        </div>

        {/* NavBarForm */}
        <NavBarForm type="white" className="header-white" />

        <main className="main">
          {/* Children */}
          {children}

          <PartnersFieldset />

          {/* Feefo Slideshow */}
          <LazyLoad offset={[-100, 100]} height={250}>
            <FeefoSlide
              slideBackground="rgba(0, 0, 0, 0.1)"
              slideDotsColor="#fff"
              slideDotsPosition="right"
              slideFontStyle="normal"
              slideFontWeight="400"
              slideQuoteIconColor="#fff"
              maxWidth={1200}
              slideTheme="dark"
            />
          </LazyLoad>

          {/* FooterSimple */}
          <LazyLoad offset={[-100, 100]} height={250}>
            <FooterSimple className="footer footer-dark" />
          </LazyLoad>
        </main>
      </div>

      <style jsx>
        {`
          .page {
            position: relative;
            &--form-9 {
              background-color: #f09020;
            }

            &-shape {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;

              img {
                width: 100%;
                height: auto;
              }
            }

            .main {
              position: relative;
              z-index: 2;
              padding-top: 30px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .footer {
            margin-top: 0 !important;
          }
        `}
      </style>
    </>
  )
}

export default wrapper.withRedux(Form)
