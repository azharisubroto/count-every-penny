/* eslint-disable jsx-a11y/iframe-has-title */
function LifeStage(props) {
  const mainlink = props.link
  // Stages
  const stages = [
    {
      text: 'Just Me',
      img: '/static/img/articles/type-2/life-stage/1.svg'
    },
    {
      text: 'Me and My partner',
      img: '/static/img/articles/type-2/life-stage/2.svg'
    },
    {
      text: 'My family',
      img: '/static/img/articles/type-2/life-stage/3.svg'
    },
    {
      text: 'Me and My kid(s)',
      img: '/static/img/articles/type-2/life-stage/4.svg'
    }
  ]
  return (
    <div className="article-widget-stage">
      {stages.map((item) => (
        <a key={item.text} href={mainlink} className="article-widget-stage__item">
          <div className="card">
            <div className="card-body">
              <div className="card-img">
                <img src={item.img} alt="{item.text}" />
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default LifeStage
