import { useNode } from '@craftjs/core'
import FreebiesCTA from '@/components/Articles/Cta/FreebiesCTA'
import React from 'react'

export const FreebiesCTAEditor = () => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <FreebiesCTA />
    </div>
  )
}

export const FreebiesCTASettings = () => {
  return (
    <div>
      There is no settings for this block <br />
    </div>
  )
}

FreebiesCTAEditor.craft = {
  related: {
    settings: FreebiesCTASettings
  }
}
