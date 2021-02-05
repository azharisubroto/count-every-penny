import { useEditor, Element } from '@craftjs/core'
import { Box } from '@material-ui/core'
import React from 'react'

import { Button } from '@/components/editor/Button'
//import { Card } from '@/components/editor/Card'
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

export const Toolbox = () => {
  const { connectors } = useEditor()
  const btnclass = 'btn btn-block btn-secondary text-12 mt-2'

  return (
    <Box px={2} py={2}>
      <div className="row">
        <div className="col-12 mb-3">
          <strong>Drag to add</strong>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <Button text="Click me" size="small" />)}
            className={btnclass}
            variant="contained">
            Button
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            className={btnclass}
            variant="contained">
            Text
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <Element canvas is={Container} background="#f1f1f1" padding={20} />)}
            className={btnclass}
            variant="contained">
            Card
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) =>
              connectors.create(
                ref,
                <Author avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />
              )
            }
            className={btnclass}
            variant="contained">
            Article Author
          </button>
        </div>
        <div className="col-md-6">
          <button ref={(ref) => connectors.create(ref, <VideoCardEditor />)} className={btnclass} variant="contained">
            Video Card
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <WomTestimonialEditor />)}
            className={btnclass}
            variant="contained">
            Word of Mouth
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <ProductReviewEditor />)}
            className={btnclass}
            variant="contained">
            Product Review
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <LifeStageCta1 link="http://google.com" />)}
            className={btnclass}
            variant="contained">
            Life Stage Cards
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <PremiumIncreaseEditor />)}
            className={btnclass}
            variant="contained">
            Premium Increase
          </button>
        </div>
        <div className="col-md-6">
          <button
            ref={(ref) => connectors.create(ref, <AustraliaStateEditor />)}
            className={btnclass}
            variant="contained">
            Map
          </button>
        </div>
        <div className="col-md-6">
          <button ref={(ref) => connectors.create(ref, <FundSelectEditor />)} className={btnclass} variant="contained">
            Fund Selection
          </button>
        </div>
        <div className="col-md-6">
          <button ref={(ref) => connectors.create(ref, <FreebiesCTAEditor />)} className={btnclass} variant="contained">
            Freebies
          </button>
        </div>
      </div>
    </Box>
  )
}
