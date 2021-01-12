import * as React from 'react'
import LifeStageCard from './LifeStageCard'

// Stages
const stages = [
  {
    text: 'Myself',
    img: '/static/img/articles/just-me.svg'
  },
  {
    text: 'Myself and my partner',
    img: '/static/img/articles/me-and-partner.svg'
  },
  {
    text: 'My family',
    img: '/static/img/articles/family.svg'
  },
  {
    text: 'Myself and my kid(s)',
    img: '/static/img/articles/me-and-kids.svg'
  }
]

const LifeStageStack = ({ className, link, ...props }) => {
  return (
    <>
      <div className={`life-stage-stack ${className}`} {...props}>
        <div className="row px-md-3">
          {stages.map((item) => (
            <div key={item.text} className="col-6 col-md-3 px-2 mb-4 mb-md-0">
              <LifeStageCard href={link} target="_blank">
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
