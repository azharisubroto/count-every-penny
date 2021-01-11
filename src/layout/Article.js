import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'
import FooterSimple from '@/components/FooterSimple'

export default function Article({ children }) {
  const isAmp = false
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
      <NavBar isamp={isAmp ? 1 : 0} />

      {/* Container */}
      <section className="main-content">
        <Container style={{ maxWidth: 1100 }}>
          <Grid container spacing={4}>
            {/* Left Content */}
            <Grid item xs={12} md={8}>
              <div className="content-wrapper">{children}</div>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <div className="sticky">
                <Sidebar />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Footer */}
      <FooterSimple isamp={isAmp ? 1 : 0} />

      <style jsx>
        {`
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
