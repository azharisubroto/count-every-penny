import { useEffect } from 'react'
import FormHero from '../../components/FormHero'
import Form from '../../layout/Form'
import { logEvent } from '../../utils/tracker'
export default function Step1() {
  useEffect(() => {
    setTimeout(() => {
      logEvent({
        event_type: `Opened Form Step 1`
      })
    }, 5000)
  }, [])

  return (
    <>
      <FormHero headline="Get health insurance quotes in under two minutes, for free." step={1} />
    </>
  )
}

Step1.Layout = Form
