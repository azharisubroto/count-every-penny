export default function FeefoTestimonial() {
  return (
    <div className="article-widget-rating article-widget-rating--type-1">
      <div className="card">
        <div className="card-body">
          <div className="card-stars mb-3">
            <img src="/static/img/icons/stars.svg" width="120" alt="Five Stars" loading="lazy" />
          </div>
          <h5 className="card-title">Great customer service</h5>
          <p className="text-16">
            Tom Carroll was very professional, friendly and helpful. He took the time to explain everything to me and
            found me a better coverage for less $$ monthly! Thanks Tom = legend!
          </p>
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <h6 className="card-author text-18">Tracey</h6>
            </div>
            <div className="col-auto">
              <div className="card-brand">
                <img src="/static/img/feefo.png" width="90" height="20" alt="feefo logo" />
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
        }
      `}</style>
    </div>
  )
}
