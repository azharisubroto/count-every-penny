import React, { useEffect } from 'react'
import { init, logEvent } from '@/utils/analytics'
import FormHero from '@/components/FormHero'
import Form from '@/layout/Form'
export default function Step1() {
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened Form Step 1')
    }
  }, [])
  return (
    <>
      <FormHero headline="Get health insurance quotes in under two minutes, for free." step={1} />
    </>
  )
}

Step1.Layout = Form
