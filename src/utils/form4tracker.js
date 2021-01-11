import * as Amplitude from '@amplitude/node'
import browserSignature from 'browser-signature'
import TagManager from 'react-gtm-module'

const client = Amplitude.init('3128673ea132dc53eced675cc1b18026', {
  includeReferrer: true,
  debug: true,
  logLevel: 3,
  maxCachedEvents: 1
})

const tagManagerArgs = {
  gtmId: 'GTM-W44WBJZ'
}

const getDeviceID = () => {
  const signature = browserSignature()
  const clean_device_id = signature.replace('=', '')
  return clean_device_id
}

export const get_os = () => {
  var os = 'Unknown'

  if (typeof window !== 'undefined') {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod']

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS'
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS'
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows'
    } else if (/Android/.test(userAgent)) {
      os = 'Android'
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux'
    }
  }

  return os
}

export const logEvent = async (props) => {
  // Disable tracking when in dev mode
  if (process.env.NODE_ENV !== 'production') return false

  TagManager.initialize(tagManagerArgs)

  const deviceID = getDeviceID()

  let state = null
  state = localStorage.getItem('persist:nextjs')
  state = state && JSON.parse(state)
  state = state && JSON.parse(state.form4).form

  /**
   * Log Event
   * @see https://developers.amplitude.com/docs/http-api-v2
   */
  let params = {
    ...props,
    device_id: deviceID,
    //user_id: 'juarathemes@gmail.com',
    time: Date.now(),
    event_properties: {
      source: 'Landing Page',
      web_url: window.location.href,
      ...(state && { form_data: state })
    },
    language: 'English',
    groups: {
      company_id: '1',
      company_name: ['Count Every Penny']
    },
    os_name: get_os(),
    ...(navigator.platform && { platform: navigator.platform }),
    ...(navigator.platform && { device_model: navigator.platform }),
    ...(state?.email && { user_id: state.email })
  }

  client.logEvent(params)

  client.flush()
}
