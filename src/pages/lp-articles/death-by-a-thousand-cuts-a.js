import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import AgeCardCTA from '@/components/AgeCardCTA'
import FooterSimple from '@/components/FooterSimple'
import theme from '@/theme'
import DeathByThousandcuts from '@/components/ArticleContent/DeathByThousandcuts'
import { useRouter } from 'next/router'

export default function Article() {
  const isAmp = false
  const router = useRouter()
  const [mainlink, setMainlink] = React.useState('')

  React.useEffect(() => {
    const utms = {
      ...(router.query.utm_source && { utm_source: router.query.utm_source }),
      ...(router.query.utm_medium && { utm_medium: router.query.utm_medium }),
      ...(router.query.utm_campaign && { utm_campaign: router.query.utm_campaign }),
      ...(router.query.utm_content && { utm_content: router.query.utm_content }),
      ...(router.query.utm_term && { utm_term: router.query.utm_term })
    }

    const urlparam = Object.entries(utms)
      .map(([key, val]) => `${key}=${val}`)
      .join('&')

    setMainlink(`/form/step1${Object.keys(urlparam).length > 0 ? '?' + urlparam : ''}`)
  })

  return (
    <>
      <Head>
        <title>
          Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second
          rate rise in 6 months
        </title>
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
      <NavBar isamp={isAmp ? 1 : 0} link={mainlink} />

      {/* Container */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-wrapper">
                <DeathByThousandcuts link={mainlink} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sticky">
                <AgeCardCTA
                  link={mainlink}
                  subheading="100% Australian owned &amp; operated"
                  footertext="*Average savings based on data from 13,136 customers during 2020"
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
