import { isBrowser } from '@unly/utils'
import TagManager from 'react-gtm-module'

let amplitude
const gtm_id = 'GTM-W44WBJZ'
const tagManagerArgs = {
  gtmId: gtm_id
}
export const init = () => {
  if (process.env.NODE_ENV !== 'production') return false

  if (isBrowser()) {
    amplitude = require('amplitude-js')
    amplitude.getInstance().init('3128673ea132dc53eced675cc1b18026')
    TagManager.initialize(tagManagerArgs)
  }
}

export const logPageView = () => {
  if (process.env.NODE_ENV !== 'production') return false

  if (isBrowser()) {
    amplitude.getInstance().logEvent(`Pageview for ${window.location.pathname}`)
  }
}

export const logEvent = (eventName) => {
  if (process.env.NODE_ENV !== 'production') return false

  if (isBrowser()) {
    amplitude.getInstance().logEvent(eventName)

    const gtmArgs = {
      gtmId: gtm_id,
      dataLayer: {
        event_name: eventName
      }
    }

    TagManager.initialize(gtmArgs)
  }
}
