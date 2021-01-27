import React, { useEffect } from 'react'
import { init, logEvent } from '@/utils/analytics'
import FormHero from '@/components/FormHero'
import FormStep from '@/layout/FormStep'
export default function Step1() {
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened Form Step 1')
    }
  }, [])
  return <></>
}

Step1.Layout = FormStep
