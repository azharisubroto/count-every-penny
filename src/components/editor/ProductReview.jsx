import { useNode } from '@craftjs/core'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import ProductReview from '@/components/Articles/ProductReview'
import React from 'react'

export const ProductReviewEditor = (props) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <ProductReview {...props} />
    </div>
  )
}

export const ProductReviewSettings = () => {
  const {
    actions: { setProp },
    headline,
    content,
    username
  } = useNode((node) => ({
    headline: node.data.props.headline,
    content: node.data.props.content,
    username: node.data.props.username
  }))

  const textFieldStyle = {
    style: {
      background: '#fff'
    }
  }

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Headline</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={headline}
          {...textFieldStyle}
          onChange={(e) => setProp((props) => (props.headline = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Content Text</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={content}
          multiline
          rows={5}
          {...textFieldStyle}
          onChange={(e) => setProp((props) => (props.content = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">User Info</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={username}
          {...textFieldStyle}
          onChange={(e) => setProp((props) => (props.username = e.target.value))}
        />
      </FormControl>
    </div>
  )
}

ProductReviewEditor.craft = {
  related: {
    settings: ProductReviewSettings
  }
}
