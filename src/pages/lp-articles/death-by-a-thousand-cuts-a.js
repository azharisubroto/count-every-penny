import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import AgeCardCTA from '@/components/AgeCardCTA'
import FooterSimple from '@/components/FooterSimple'
import theme from '@/theme'
import DeathByThousandcuts from '@/components/Articles/DeathByThousandcuts'

export default function Article() {
  const isAmp = false

  const cta_target = '/form/step1'

  return (
    <>
      <Head>
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
      {/* NavBar */}
      <NavBar isamp={isAmp ? 1 : 0} link={cta_target} />

      {/* Container */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-wrapper">
                <DeathByThousandcuts />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sticky">
                <AgeCardCTA
                  link={cta_target}
                  subheading="100% Australian owned &amp; operated"
                  footerText="*Average savings based on data from 13,136 customers during 2020"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSimple isamp={isAmp ? 1 : 0} />

      <style jsx global>
        {`
          body {
            background: #f3f3f3 !important;
          }
          .btn.btn-primary {
            background: ${theme.palette.primary.main};
            border-color: ${theme.palette.primary.main};
            border-bottom: 2px solid ${theme.palette.primary.darken1};
            font-weight: 700;

            &:hover,
            &:focus,
            &:active {
              background: ${theme.palette.primary.darken1};
              border-color: ${theme.palette.primary.darken1};
              opacity: 0.8;
            }
          }
          .container {
            max-width: 1080px;
          }
          .main-content {
            padding: 0 0;
          }
          .content-wrapper {
            padding-top: 35px;
          }
          .sticky {
            @media screen and (min-width: 1024px) {
              position: sticky;
              top: 0;
              padding: 35px 0 0;
            }
          }
        `}
      </style>
    </>
  )
}
