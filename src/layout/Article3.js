import React from 'react'
import Head from 'next/head'
import FooterSimple from '@/components/FooterSimple'
import Navbar from '@/components/Articles/Header/Navbar2'
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
    document.querySelector('body').classList.add('article-wrapper')
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Faustina:wght@700&family=Montserrat:wght@400;500;600;700&family=Vollkorn:wght@700&family=Nunito+Sans:wght@400;700&family=Arimo:wght@400;700&display=swap"
          rel="stylesheet"
        />
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
    </>
  )
}
