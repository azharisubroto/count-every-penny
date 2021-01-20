import { useEditor, Element } from '@craftjs/core'
import { Box, Typography, Grid, Button as MaterialButton } from '@material-ui/core'
import React from 'react'

import { Button } from '@/components/editor/Button'
//import { Card } from '@/components/editor/Card'
import { Container } from '@/components/editor/Container'
import { Text } from '@/components/editor/Text'
import { Author } from '@/components/editor/ArticleAuthor'
import { LifeStageCta1 } from '@/components/editor/LifeStageCta1'

export const Toolbox = () => {
  const { connectors } = useEditor()

  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Button text="Click me" size="small" />)}
            disableElevation
            variant="contained">
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            disableElevation
            variant="contained">
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Element canvas is={Container} background="#f1f1f1" padding={20} />)}
            disableElevation
            variant="contained">
            Card
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Author avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />
              )
            }
            disableElevation
            variant="contained">
            Article Author
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <LifeStageCta1 link="http://google.com" />)}
            disableElevation
            variant="contained">
            Life Stage Cards CTA
          </MaterialButton>
        </Grid>
        {/* <Grid container direction="column" item>
          <MaterialButton ref={(ref) => connectors.create(ref, <Card />)} disableElevation variant="contained">
            Card
          </MaterialButton>
        </Grid> */}
      </Grid>
    </Box>
  )
}
