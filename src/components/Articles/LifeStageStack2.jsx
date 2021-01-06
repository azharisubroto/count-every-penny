import * as React from 'react'
import LifeStageCard from './LifeStageCard'

// Stages
const stages = [
  {
    text: 'Just Myself',
    img: '/static/img/articles/me-2.svg'
  },
  {
    text: 'My Partner and Myself',
    img: '/static/img/articles/me-and-partner-2.svg'
  },
  {
    text: 'My Kids and Myself',
    img: '/static/img/articles/me-and-kids-2.svg'
  },
  {
    text: 'My Family',
    img: '/static/img/articles/me-and-family-2.svg'
  }
]

const LifeStageStack2 = ({ className, href, intro, headline, ...props }) => {
  return (
    <>
      <div className={`${className} lifestage text-center px-4 pt-4 pb-5`} {...props}>
        <div className="text-20 text-md-24 lh-30 lh-md-34 family-1">{headline}</div>

        <p className="text-18">{intro}</p>

        <div className="row">
          {stages.map((item) => (
            <div key={item.text} className="col-6 col-md-3 px-2 mb-4 mb-md-0">
              <LifeStageCard href={href} target="_blank" bevel>
                <img src={item.img} height="121" loading="lazy" alt={item.text} />

                <div className="mt-2 text-16 fw-600 color-black">{item.text}</div>
              </LifeStageCard>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .lifestage {
          background: #0c345a;
          color: #fff;
        }
        .color-black {
          color: #000;
        }
      `}</style>
    </>
  )
}

export default LifeStageStack2
