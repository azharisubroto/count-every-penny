function WomTestimonial(props) {
  const { text, username, className, ...other } = props

  return (
    <div {...other} className={`article-widget-rating article-widget-rating--type-2 ${className}`}>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 card-header">
            <div className="card-stars my-3">
              <img src="/static/img/icons/stars-2.svg" alt="Five Stars" loading="lazy" />
            </div>
            <div className="card-brand">
              <img src="/static/img/rating/logo-2.png" alt="feefo" loading="lazy" />
            </div>
          </div>
          <div className="col-md-8 card-body">
            <p>
              {text
                ? text
                : `Brittany gave exceptional service - thank you so much. <br />I am saving over $700 a year. Wish I had done
              it before.`}
            </p>
            <h6 className="card-author">{username ? username : `Karyl W.`}</h6>
            <div className="card-brand-bg">
              <img src="/static/img/rating/logo-2-bg.png" alt="feefo" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }
        .card-brand-bg {
          position: absolute;
          right: 0;
          bottom: 0;
        }

        p {
          font-size: inherit;
        }
      `}</style>
    </div>
  )
}

WomTestimonial.displayName = 'WomTestimonial'

export default WomTestimonial
