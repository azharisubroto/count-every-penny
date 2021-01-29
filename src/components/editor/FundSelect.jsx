import { useNode } from '@craftjs/core'
import FundSelect from '@/components/Articles/Cta/FundSelect'
import React from 'react'

export const FundSelectEditor = (props) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))} className="card px-4 py-4">
      <strong className="text-22 lh-30 mb-3 text-center fw-600">Select your fund</strong>
      <FundSelect {...props} />
    </div>
  )
}

export const FundSelectSettings = () => {
  return <div>There is no settings for this block</div>
}

FundSelectEditor.craft = {
  related: {
    settings: FundSelectSettings
  }
}
