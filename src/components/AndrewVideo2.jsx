function AdrewVideo(props) {
  const { videoID } = props

  return (
    <figure className="article-video mx-0">
      <div className="row g-0">
        <div className="col-lg-8">
          <div className="article-video__thumb">
            <iframe
              title="video"
              src={`https://www.youtube.com/embed/${videoID ? videoID : '7QltMeIbkaM'}`}
              frameBorder="0"
              autoPlay="1"
              width="600"
              height="400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-lg-4 card">
          <div className="card-body">
            <h5>Why you need to review your private health insurance</h5>
            <p>If you haven’t reviewed your policy lately, you could be leaving thousands of dollars on the table.</p>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default AdrewVideo
