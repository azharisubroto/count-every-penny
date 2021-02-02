/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNode } from '@craftjs/core'
import { Slider, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import ColorPicker from 'material-ui-color-picker'
import React, { useState, useEffect } from 'react'
import Editor from 'react-medium-editor'
// load theme styles with webpack
require('medium-editor/dist/css/medium-editor.css')
require('medium-editor/dist/css/themes/default.css')

export const Text = ({ text, fontSize, textAlign, textColor, fontWeight }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp }
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged
  }))

  const [editable, setEditable] = useState(false)

  useEffect(() => {
    if (selected) {
      return
    }

    setEditable(false)
  }, [selected])

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div ref={(ref) => connect(drag(ref))} onClick={() => selected && setEditable(true)}>
      <Editor
        disabled={!editable}
        text={text}
        onChange={(e) => setProp((props) => (props.text = e), 500)}
        options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'] } }}
        style={{
          fontFamily: '',
          fontSize: `${fontSize}px`,
          lineHeight: `${parseInt(fontSize * 1.5)}px`,
          textAlign,
          color: textColor,
          fontWeight: fontWeight
        }}
      />
    </div>
  )
}

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    textColor,
    fontWeight
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    textColor: node.data.props.textColor
  }))

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={2}
          min={12}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value), 1000)
          }}
        />
      </FormControl>
      <FormControl className="mt-3" size="small" component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <ColorPicker
          internalValue={textColor || '#000'}
          setShowPicker
          value={textColor || '#000'}
          onChange={(color) => {
            setProp((props) => (props.textColor = color), 1000)
          }}
        />
      </FormControl>
      <FormControl className="mt-3" size="small" component="fieldset">
        <FormLabel component="legend">Font Weight</FormLabel>
        <RadioGroup defaultValue={fontWeight} onChange={(e) => setProp((props) => (props.fontWeight = e.target.value))}>
          <FormControlLabel label="Normal" value="normal" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Bold" value="700" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export const TextDefaultProps = {
  text: 'Hi',
  fontSize: 18,
  fontWeight: 'normal',
  textColor: '#000'
}

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings
  }
}
