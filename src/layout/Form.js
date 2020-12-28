import dynamic from 'next/dynamic'
import Head from 'next/head'
import NavBarForm from '../components/NavBarForm'
import LazyLoad from 'react-lazyload'
const AwardBox = dynamic(() => import('../components/AwardBox'))
const FeefoSlide = dynamic(() => import('../components/FeefoSlide'))
const FooterSimple = dynamic(() => import('../components/FooterSimple'))
const BestFeatures = dynamic(() => import('../components/BestFeatures'))
import { wrapper } from '../../store/store'

function Form({ children }) {
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

      {/* NavBarForm */}
      <NavBarForm />

      {/* Children */}
      {children}

      {/* Not for Mobile */}
      {/* Key Features */}
      <div className="d-xs-none">
        <LazyLoad offset={[-100, 100]} height={290}>
          <BestFeatures />
        </LazyLoad>

        {/* Award Box */}
        <LazyLoad offset={[-100, 100]} height={290}>
          <AwardBox />
        </LazyLoad>
      </div>

      {/* Feefo Slideshow */}
      <LazyLoad offset={[-100, 100]} height={250}>
        <FeefoSlide />
      </LazyLoad>

      {/* FooterSimple */}
      <LazyLoad offset={[-100, 100]} height={250}>
        <FooterSimple />
      </LazyLoad>

      <style jsx>
        {`
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
    </>
  )
}

export default wrapper.withRedux(Form)
