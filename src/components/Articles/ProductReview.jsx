function ProductReview({
  headline = 'Friendly & Helpful Service',
  content = 'The whole experience was very friendly and helpful. We love being able to tailor the insurance cover to what our needs are, and we are saving $70 a fortnight with no decrease in cover. Thank you very much.',
  username = '<strong>Sandy</strong> <span>|</span> Darling Downs, QLD'
}) {
  return (
    <div className="article-widget-rating article-widget-rating--type-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{headline}</h5>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
          <h6 className="card-author">
            <div dangerouslySetInnerHTML={{ __html: username }}></div>
          </h6>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="card-stars">
                <h6>Customer Rating</h6>
                <img src="/static/img/icons/stars.svg" alt="Five Stars" width="120" height="19" loading="lazy" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-stars">
                <h6>Transparency</h6>
                <img src="/static/img/icons/stars.svg" alt="Five Stars" width="120" height="19" loading="lazy" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-brand">
                <img src="/static/img/rating/logo-3.png" alt="product review au" loading="lazy" />
              </div>
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

          &.card-widget {
            margin-bottom: 45px;
          }
        }

        p {
          font-size: inherit;
          line-height: inherit;
        }
      `}</style>
    </div>
  )
}

ProductReview.displayName = 'ProductReview'

export default ProductReview
