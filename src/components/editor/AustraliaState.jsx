import { useNode } from '@craftjs/core'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import AustraliaState from '@/components/Articles/Cta/AustraliaState'
import React from 'react'

export const AustraliaStateEditor = ({ colors, ...other }) => {
  const customcolors = colors ? JSON.parse(colors) : false
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <AustraliaState colors={customcolors} {...other} />
    </div>
  )
}

export const AustraliaStateSettings = () => {
  const {
    actions: { setProp },
    link,
    colors,
    background,
    disableElevation,
    dark,
    ctaColor,
    ctaProps,
    price,
    infoText
  } = useNode((node) => ({
    link: node.data.props.link,
    colors: node.data.props.colors,
    background: node.data.props.background,
    disableElevation: node.data.props.disableElevation,
    dark: node.data.props.dark,
    ctaColor: node.data.props.ctaColor,
    ctaProps: node.data.props.ctaProps,
    price: node.data.props.price,
    infoText: node.data.props.infoText
  }))

  const options = [
    {
      key: 'link',
      value: link,
      name: 'link'
    },
    {
      key: 'colors',
      value: colors,
      name: 'State Colors',
      multi: true
    },
    {
      key: 'background',
      value: background,
      name: 'Background'
    },
    {
      key: 'disableElevation',
      value: disableElevation,
      name: 'Disable Shadow'
    },
    {
      key: 'dark',
      value: dark,
      name: 'Dark Mode'
    },
    {
      key: 'ctaColor',
      value: ctaColor,
      name: 'Button Color'
    },
    {
      key: 'ctaProps',
      value: ctaProps,
      name: 'ctaProps',
      multi: true
    },
    {
      key: 'price',
      value: price,
      name: 'Price'
    },
    {
      key: 'infoText',
      value: infoText,
      name: 'Info Text',
      multi: true
    }
  ]

  return (
    <div>
      {options.map((field, i) => (
        <FormControl key={`option-${i}`} fullWidth={true} margin="normal" component="fieldset">
          <FormLabel component="legend">
            <span className="text-capitalize">{field.name}</span>
          </FormLabel>
          <TextField
            variant="outlined"
            size="small"
            style={{ background: '#fff' }}
            value={field.value}
            multiline={field.multi}
            rows={field.multi ? 5 : 1}
            onChange={(e) => setProp((props) => (props[field.key] = e.target.value))}
          />
        </FormControl>
      ))}
    </div>
  )
}

export const AustraliaStateDefaultProps = {
  link: 'https://counteverypenny.com.au/form/step1',
  colors: JSON.stringify(
    {
      NSW: '#77B5EE',
      NT: '#23ABD1',
      QLD: '#E0960B',
      SA: '#07AF43',
      TAS: '#07AF43',
      VIC: '#23ABD1',
      WA: '#E94A73'
    },
    null,
    2
  ),
  background: '#fff',
  disableElevation: false,
  dark: false,
  ctaColor: '#F7CD5C',
  infoText: 'Australia: We saved our average customer $357.95 on their annual premium!'
}

AustraliaStateEditor.craft = {
  props: AustraliaStateDefaultProps,
  related: {
    settings: AustraliaStateSettings
  }
}
