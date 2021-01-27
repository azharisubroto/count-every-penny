import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NavBarForm from '@/components/NavBarForm'
import LazyLoad from 'react-lazyload'
const FeefoSlide = dynamic(() => import('@/components/Articles/FeefoSlide'))
const FooterSimple = dynamic(() => import('@/components/FooterSimple'))
import { wrapper } from '@/store/store'
import theme from '@/theme'
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
        {/* NavBarForm */}
        <NavBarForm type="white" className="header-white" />

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
            maxWidth={1160}
            slideTheme="dark"
          />
        </LazyLoad>

        {/* FooterSimple */}
        <LazyLoad offset={[-100, 100]} height={250}>
          <FooterSimple className="footer footer-dark" />
        </LazyLoad>
      </div>

      <style jsx>
        {`
          .page {
            &--form-9 {
              background-color: ${theme.palette.cep.primary};
            }
          }
          .content-wrapper {
            padding-top: 35px;
          }
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
          .sticky {
            @media screen and (min-width: 1024px) {
              position: sticky;
              top: 0;
              bottom: 0;
              max-height: 100vh;
              overflow-y: auto;
              padding: 35px 0 0;
            }
          }
          @media screen and (max-width: 500px) {
            .d-xs-none {
              display: none;
            }
          }
        `}
      </style>
      <style jsx global>{`
        .price-tag {
          display: inline-block;
          background: rgba(0, 0, 0, 0.15);
          border-radius: 10px;
          padding-left: 5px;
          padding-right: 5px;
        }
      `}</style>
    </>
  )
}

export default wrapper.withRedux(Form)
