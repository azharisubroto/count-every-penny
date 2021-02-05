import { useNode } from '@craftjs/core'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import WomTestimonial from '@/components/Articles/WomTestimonial'
import React from 'react'

export const WomTestimonialEditor = ({ text, username }) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <WomTestimonial text={text} username={username} />
    </div>
  )
}

export const WomTestimonialSettings = () => {
  const {
    actions: { setProp },
    text,
    username
  } = useNode((node) => ({
    text: node.data.props.text,
    username: node.data.props.username
  }))

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Testimonial text</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={text}
          multiline
          rows={5}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">User's Name</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={username}
          onChange={(e) => setProp((props) => (props.username = e.target.value))}
        />
      </FormControl>
    </div>
  )
}

export const WomTestimonialDefaultProps = {
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur',
  username: 'Steven William'
}

WomTestimonialEditor.craft = {
  props: WomTestimonialDefaultProps,
  related: {
    settings: WomTestimonialSettings
  }
}
