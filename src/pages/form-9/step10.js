import React, { useEffect } from 'react'
import { init, logEvent } from '@/utils/analytics'
import FormNine from '@/components/FormNine'
import FormStep from '@/layout/FormStep'
export default function Step1() {
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened Form Step 10')
    }
  }, [])
  return (
    <>
      <FormNine step={10} />
    </>
  )
}

Step1.Layout = FormStep
