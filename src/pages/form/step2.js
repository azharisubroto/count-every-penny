import FormHero from '@/components/FormHero'
import Form from '@/layout/Form'
import React, { useEffect } from 'react'
import { init, logEvent } from '@/utils/analytics'
export default function Step2() {
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened Form Step 2')
    }
  }, [])
  return (
    <>
      <FormHero headline="Let’s add your age and current health fund." step={2} />
    </>
  )
}

Step2.Layout = Form
