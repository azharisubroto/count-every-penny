import React, { useEffect } from 'react'
import { init, logEvent } from '@/utils/analytics'
import FormHeroB from '@/components/FormHeroB'
import Form from '@/layout/Form'
export default function Step1() {
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      logEvent('Opened form B Step 1')
    }
  }, [])
  return (
    <>
      <FormHeroB
        headline={
          <>
            Get health insurance quotes from just <span className="price-tag">$2.93 per day</span>
          </>
        }
        step={1}
      />
    </>
  )
}

Step1.Layout = Form
