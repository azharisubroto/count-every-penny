import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import FooterSimple from '@/components/FooterSimple'
import theme from '@/theme'
import AgeCardCTA from '@/components/AgeCardCTA'
import { useRouter } from 'next/router'

export default function Article(props) {
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

  const { title, content, sidebar, className, ...rest } = props

  // Clone Content Component from content prop
  const Content = content ? React.cloneElement(content, { link: mainlink }) : null

  // Clone Sidebar Component from sidebar prop
  const Sidebar = sidebar ? React.cloneElement(sidebar, { link: mainlink }) : null

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
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
      <section className={`${className} main-content`} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-wrapper">{content && Content}</div>
            </div>
            <div className="col-lg-4">
              <div className="sticky">
                {sidebar ? (
                  <>{Sidebar}</>
                ) : (
                  <AgeCardCTA
                    link={mainlink}
                    subheading="100% Australian owned &amp; operated"
                    footertext="*Average savings based on data from 13,136 customers during 2020"
                  />
                )}
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
            transition: all 0.2s ease;

            &:hover,
            &:focus,
            &:active {
              background: ${theme.palette.primary.main};
              border-color: ${theme.palette.primary.darken1};
              opacity: 0.7;
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
