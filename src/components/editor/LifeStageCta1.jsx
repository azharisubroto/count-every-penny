import { useNode } from '@craftjs/core'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import LifeStageStack from '@/components/Articles/LifeStageStack'
import React from 'react'

export const LifeStageCta1 = ({ link }) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <LifeStageStack link={link} />
    </div>
  )
}

export const LifeStageCta1Settings = () => {
  const {
    actions: { setProp },
    link
  } = useNode((node) => ({
    link: node.data.props.link
  }))

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">CTA link</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={link}
          onChange={(e) => setProp((props) => (props.link = e.target.value))}
        />
      </FormControl>
    </div>
  )
}

export const LifeStageCta1DefaultProps = {
  link: ''
}

LifeStageCta1.craft = {
  props: LifeStageCta1DefaultProps,
  related: {
    settings: LifeStageCta1Settings
  }
}
