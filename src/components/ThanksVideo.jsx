/* eslint-disable jsx-a11y/iframe-has-title */
function ThanksVideo() {
  return (
    <figure className="article-video mx-0">
      <div className="row g-0">
        <div className="col-lg-8">
          <div className="article-video__thumb">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_GQrF2FCArY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-lg-4 card mb-0">
          <div className="card-body">
            <h5 className="card-title">
              Unsure about answering our call?
              <br />
              Here’s why it’s so important to answer
            </h5>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default ThanksVideo
