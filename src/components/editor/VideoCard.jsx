import { useNode } from '@craftjs/core'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import VideoCard from '@/components/Articles/VideoCard'
import React from 'react'

export const VideoCardEditor = ({ videoID, headline, description }) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <VideoCard videoId={videoID} headline={headline} description={description} />
    </div>
  )
}

export const VideoCardSettings = () => {
  const {
    actions: { setProp },
    videoID,
    headline,
    description
  } = useNode((node) => ({
    videoID: node.data.props.videoID,
    headline: node.data.props.headline,
    description: node.data.props.description
  }))

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Youtube Video ID</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={videoID}
          onChange={(e) => setProp((props) => (props.videoID = e.target.value))}
        />
      </FormControl>
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
        <FormLabel component="legend">Description</FormLabel>
        <TextField
          variant="outlined"
          size="small"
          value={description}
          onChange={(e) => setProp((props) => (props.description = e.target.value))}
        />
      </FormControl>
    </div>
  )
}

export const VideoCardDefaultProps = {
  videoID: '7QltMeIbkaM',
  headline: 'Video Headline lorem ipsum',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod harum placeat in repudiandae, eligendi libero corrupti repellendus'
}

VideoCardEditor.craft = {
  props: VideoCardDefaultProps,
  related: {
    settings: VideoCardSettings
  }
}
