import React, { useEffect } from 'react'
import { init, logEvent } from '@/utils/analytics'
import FormNine from '@/components/FormNine'
import FormStep from '@/layout/FormStep'
export default function Step1() {
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened Form Step 11')
    }
  }, [])
  return (
    <>
      <FormNine step={11} />
    </>
  )
}

Step1.Layout = FormStep
