import React from 'react'
import Head from 'next/head'
import { init, logPageView } from '@/utils/analytics'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import fetch from '@/utils/fetchJson'
import '@/styles/styles.global.scss'

// Start Application
function CountEveryPenny(props) {
  const router = useRouter()
  const { Component, pageProps } = props
  const [loaded, setLoaded] = React.useState(false)
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

    setTimeout(() => {
      setLoaded(true)
    }, 5000)
  }, [])

  React.useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', logPageView)
    return () => {
      router.events.off('routeChangeComplete', logPageView)
    }
  }, [router.events])

  const isProd = process.env.NODE_ENV === 'production'
  // const isProd = true

  return (
    <>
      <Head>
        {loaded && isProd == true && (
          <>
            {/* HotJar Script */}
            <script src="https://cdn.optimizely.com/js/19735997801.js" defer></script>

            <script
              dangerouslySetInnerHTML={{
                __html: `(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2189729,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
              }}></script>

            {/* OutBrain Script */}
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(_window, _document) {
      var OB_ADV_ID='009ec6427021b865056e75cfbcaa1f663b';
      if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}
      var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.1';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);
  obApi('track', 'PAGE_VIEW');`
              }}></script>

            <script
              dangerouslySetInnerHTML={{
                __html: ` !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '151048309955768');
              fbq('track', 'PageView');`
              }}></script>

            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-442105576"></script>

            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-442105576');`
              }}></script>
          </>
        )}
      </Head>
      <Layout>
        <SWRConfig
          value={{
            fetcher: fetch,
            onError: (err) => {
              console.error(err)
            }
          }}>
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  )
}

export default CountEveryPenny
