import * as React from 'react'
import LifeStageCard from './LifeStageCard'

// Stages
const stages = [
  {
    text: 'Just me',
    img: '/static/img/articles/just-me.svg'
  },
  {
    text: 'Me and My partner',
    img: '/static/img/articles/me-and-partner.svg'
  },
  {
    text: 'My Family',
    img: '/static/img/articles/family.svg'
  },
  {
    text: 'Me and My kid(s)',
    img: '/static/img/articles/me-and-kids.svg'
  }
]

const LifeStageStack = ({ className, href, ...props }) => {
  return (
    <>
      <div className={`life-stage-stack ${className}`} {...props}>
        <div className="row px-md-3">
          {stages.map((item) => (
            <div key={item.text} className="col-12 col-md-3 px-2">
              <LifeStageCard href={href} target="_blank">
                <img src={item.img} height="121" loading="lazy" alt={item.text} />

                <div className="mt-2 text-18 fw-600">{item.text}</div>
              </LifeStageCard>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LifeStageStack
