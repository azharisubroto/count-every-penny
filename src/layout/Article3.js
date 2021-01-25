import React from 'react'
import Head from 'next/head'
import FooterSimple from '@/components/FooterSimple'
import Navbar from '@/components/Articles/Header/Navbar2'
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
    document.querySelector('body').classList.add('article-wrapper')
  })

  const { title, content } = props

  // Clone Content Component from content prop
  const Content = content ? React.cloneElement(content, { link: mainlink }) : null

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Faustina:wght@700&family=Montserrat:wght@400;500;600;700&family=Vollkorn:wght@700&family=Nunito+Sans:wght@400;700&family=Arimo:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/static/css/theme.css" rel="stylesheet" />
      </Head>
      {/* NavBar */}
      <Navbar link={mainlink} />
      {/* Container */}
      <main className="main" id="main">
        <section className="page--article py-0">
          <div className="container">{content && Content}</div>
        </section>
      </main>

      {/* Footer */}
      <FooterSimple isamp={isAmp ? 1 : 0} />

      <style jsx global>{`
        body {
          font-size: 18px !important;
          line-height: 26px !important;
          color: #323232;
        }
        @media (min-width: 1200px) {
          .container,
          .container-lg,
          .container-md,
          .container-sm,
          .container-xl {
            max-width: 1140px;
          }
        }
        .article-meta__author {
          display: flex !important;
        }
        .card-body {
          overflow: hidden;
        }
        .btn-primary {
          background-color: #f09020 !important;
          border-color: #f09020 !important;
          border: 1px solid rgba(0, 0, 0, 0.5) !important;
          color: #fff !important;
          border-width: 1px !important;
          box-shadow: inset 3px 3px 4px 2px hsla(0, 0%, 100%, 0.34), inset -3px -3px 3px 2px rgba(0, 0, 0, 0.2) !important;
        }
        .btn-circle {
          border-radius: 30px;
        }
      `}</style>
    </>
  )
}
