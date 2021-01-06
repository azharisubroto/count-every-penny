import { useEffect } from 'react'
import FormHero from '@/components/FormHero'
import Form from '@/layout/Form'
import { logEvent } from '@/utils/tracker'

export default function Step2() {
  useEffect(async () => {
    logEvent({
      event_type: `Opened Form Step 2`
    })
  }, [])
  return (
    <>
      <FormHero headline="Let’s add your age and current health fund." step={2} />
    </>
  )
}

Step2.Layout = Form
