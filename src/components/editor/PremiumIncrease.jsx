import { useNode } from '@craftjs/core'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import PremiumIncrease from '@/components/Articles/PremiumIncrease'
import React from 'react'

export const PremiumIncreaseEditor = ({ headline, caption, link }) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <PremiumIncrease headline={headline} caption={caption} link={link} />
    </div>
  )
}

export const PremiumIncreaseSettings = () => {
  const {
    actions: { setProp },
    headline,
    caption,
    link
  } = useNode((node) => ({
    headline: node.data.props.headline,
    caption: node.data.props.caption,
    link: node.data.props.link
  }))

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Headline</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={headline}
          onChange={(e) => setProp((props) => (props.headline = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Caption</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={caption}
          onChange={(e) => setProp((props) => (props.caption = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">CTA Link</FormLabel>
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

export const PremiumIncreaseDefaultProps = {
  headline: 'Health Insurance Premium Increases in 2020 and 2021',
  caption:
    'The table below shows that some funds (which we cannot name here) are increasing their premiums by 4 times as much as other funds. You can talk to one of our advisors for the full details',
  link: 'https://counteverypenny.com.au'
}

PremiumIncreaseEditor.craft = {
  props: PremiumIncreaseDefaultProps,
  related: {
    settings: PremiumIncreaseSettings
  }
}
