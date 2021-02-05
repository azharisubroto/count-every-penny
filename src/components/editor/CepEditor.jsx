import { Editor, Frame, Element } from '@craftjs/core'
import { Paper, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

import { SettingsPanel } from '@/components/SettingsPanel'
import { Toolbox } from '@/components/editor/Toolbox'
import { Topbar } from '@/components/editor/Topbar'
import { Button } from '@/components/editor/Button'
import { Card, CardBottom, CardTop } from '@/components/editor/Card'
import { Container } from '@/components/editor/Container'
import { Text } from '@/components/editor/Text'
import { Author } from '@/components/editor/ArticleAuthor'
import { LifeStageCta1 } from '@/components/editor/LifeStageCta1'
import { VideoCardEditor } from '@/components/editor/VideoCard'
import { PremiumIncreaseEditor } from '@/components/editor/PremiumIncrease'
import { WomTestimonialEditor } from '@/components/editor/WomTestimonial'
import { AustraliaStateEditor } from '@/components/editor/AustraliaState'
import { ProductReviewEditor } from '@/components/editor/ProductReview'
import { FundSelectEditor } from '@/components/editor/FundSelect'
import { FreebiesCTAEditor } from '@/components/editor/FreebiesCTA'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)'
  }
}))
export default function CepEditor(props) {
  const classes = useStyles()
  const { sidebarSlot, articleid } = props

  return (
    <>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          Author,
          LifeStageCta1,
          VideoCardEditor,
          PremiumIncreaseEditor,
          WomTestimonialEditor,
          AustraliaStateEditor,
          ProductReviewEditor,
          FundSelectEditor,
          FreebiesCTAEditor
        }}>
        <Grid container spacing={3} style={{ paddingTop: '10px' }}>
          <Grid item xs md={9}>
            <Topbar articleID={articleid} />

            <div className="editor-container">
              <Frame>
                <Element canvas is={Container} padding={40} background="#fff" style={{ minHeight: 300 }}>
                  <Text
                    fontSize={14}
                    text="Two rate rises in 6 months leaves Aussies with $230.36 bigger bills"
                    textColor="#757575"
                  />
                  <Text
                    fontSize={30}
                    text="Article headline, lorem ipsum dolor sit ametlorem ipsum dolor sit amet"
                    fontWeight="700"
                  />
                  <Text
                    fontSize={18}
                    text="Subheadline lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
                    fontWeight="700"
                  />

                  <Author avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />

                  {/* <Card /> */}
                  {/* <Button text="Click me" size="small" /> */}
                  {/* <Element canvas is={Container} padding={6} background="#999999">
                  <Text size="small" text="It's me again!" />
                </Element> */}
                </Element>
              </Frame>
            </div>
          </Grid>
          <Grid item xs={4} md={3}>
            <div className="sticky">
              {sidebarSlot}

              <Paper className={classes.root}>
                <Toolbox />
                <SettingsPanel />
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Editor>

      <style jsx global>{`
        body {
          font-size: 16px;
          line-height: 27px;
        }

        .sticky {
          position: sticky;
          top: 90px;
        }
        .editor-container {
          div[draggable] {
            border: 1px dashed transparent;
          }
          div[draggable='true'] {
            &:hover {
              border-color: #d1d1d1;
            }
          }
        }
      `}</style>
    </>
  )
}
