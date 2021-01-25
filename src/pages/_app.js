import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/styles.global.scss'
import theme from '@/theme'
import { init, logPageView } from '@/utils/analytics'
import { useRouter } from 'next/router'

function CountEveryPenny(props) {
  const router = useRouter()
  const { Component, pageProps } = props
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  React.useEffect(() => {
    init()
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    if (!router.asPath.includes('?')) {
      logPageView()
    }
  }, [])

  React.useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', logPageView)
    return () => {
      router.events.off('routeChangeComplete', logPageView)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default CountEveryPenny

CountEveryPenny.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
