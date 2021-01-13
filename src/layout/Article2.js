import React from 'react'
import Head from 'next/head'
import Button from '@/components/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NavBar from '@/components/NavBar'
import AgeCardBlueYellow from '@/components/Articles/Cta/AgeCardBlueYellow'
import AustraliaState from '@/components/AustraliaState'
import FooterSimple from '@/components/FooterSimple'
import theme from '@/theme'
import { useRouter } from 'next/router'

export default function Article2(props) {
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
  const Map = () => {
    return (
      <AustraliaState
        disableElevation
        infoText={
          <>
            <strong>Australia:</strong> We saved our average customer <strong>$357.95 on their annual premium!</strong>
          </>
        }
        colors={{
          WA: '#E94A73',
          NT: '#23ABD1',
          NSW: '#77B5EE',
          VIC: '#23ABD1',
          TAS: '#07AF43',
          QLD: '#E0960B',
          SA: '#07AF43'
        }}
        dark
        background="#0C345A"
        ctaColor="#F7CD5C"
        ctaProps={{
          style: {
            display: 'none'
          }
        }}
        link={mainlink}
        isamp={false}
      />
    )
  }

  const Content = content ? React.cloneElement(content, { link: mainlink, customMap: <Map /> }) : null

  // Clone Sidebar Component from sidebar prop
  const Sidebar = sidebar ? React.cloneElement(sidebar, { link: mainlink }) : null

  return (
    <>
      <Head>
        <title>{title}</title>
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
      <NavBar
        logo="/static/logo-cep.svg"
        isamp={isAmp ? 1 : 0}
        height="70"
        cta={<Button href={mainlink}>Get Quotes</Button>}
      />

      {/* Container */}
      <section className={`${className} main-content`} {...rest}>
        <Container style={{ maxWidth: 1100 }}>
          <Grid container spacing={4}>
            {/* Left Content */}
            <Grid item xs={12} md={8}>
              <div className="content-wrapper">{content && Content}</div>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <aside className="sticky">{sidebar ? <>{Sidebar}</> : <AgeCardBlueYellow link={mainlink} />}</aside>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Footer */}
      <FooterSimple isamp={isAmp ? 1 : 0} />

      <style jsx global>
        {`
          body {
            background: #f3f3f3 !important;
          }
          .btn-primary {
            background: ${theme.palette.cep.yellow};
            border-color: ${theme.palette.cep.yellow};
            color: #000;
            position: relative;
            font-weight: 700;
            z-index: 1;

            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 4px;
              width: 100%;
              margin: auto;
              z-index: -1;
              background: #fff;
              opacity: 0.2;
            }

            &:hover,
            &:focus,
            &:active {
              background: ${theme.palette.cep.yellow};
              border-color: ${theme.palette.cep.yellow};
              color: #000;
              opacity: 0.8;
            }
          }
          a:hover {
            color: initial !important;
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
              bottom: 0;
              padding: 35px 0 0;
            }
          }
          .d-sm-none {
            @media screen and (min-width: 576px) {
              display: none;
            }
          }
          .m-sidebar-drawer {
            position: fixed;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            z-index: 100;
            background: #fff;
            border: 1px solid #0c345a;
            border-radius: 5px 0 0 5px;
            height: 60px;
          }
        `}
      </style>
    </>
  )
}
