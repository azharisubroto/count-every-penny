import { isBrowser } from '@unly/utils'
import TagManager from 'react-gtm-module'

let amplitude
const gtm_id = 'GTM-W44WBJZ'
const tagManagerArgs = {
  gtmId: gtm_id
}
export const init = () => {
  //if (process.env.NODE_ENV !== 'production') return false

  if (isBrowser()) {
    amplitude = require('amplitude-js')
    amplitude.getInstance().init('3128673ea132dc53eced675cc1b18026')
    TagManager.initialize(tagManagerArgs)
  }
}

export const logPageView = () => {
  //if (process.env.NODE_ENV !== 'production') return false

  if (isBrowser()) {
    const track_text = `Pageview for ${window.location.pathname}`
    amplitude.getInstance().logEvent(track_text)
  }
}

export const logEvent = (eventName) => {
  //if (process.env.NODE_ENV !== 'production') return false

  if (isBrowser()) {
    // Amplitude Track
    amplitude.getInstance().logEvent(eventName)

    // Fb Pixel track
    window.fbq('track', eventName)

    // GTM Track
    TagManager.initialize({
      gtmId: gtm_id,
      dataLayer: {
        event_name: eventName
      }
    })
  }
}
