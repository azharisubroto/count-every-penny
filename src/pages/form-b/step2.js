import FormHeroB from '@/components/FormHeroB'
import Form from '@/layout/Form'
import React, { useEffect } from 'react'
import { init, logEvent } from '@/utils/analytics'
export default function Step2() {
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened form B Step 2')
    }
  }, [])
  return (
    <>
      <FormHeroB
        headline={
          <>
            Let’s add your age and <br /> current health fund.
          </>
        }
        step={2}
      />
    </>
  )
}

Step2.Layout = Form
