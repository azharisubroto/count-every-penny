function AdrewVideo(props) {
  const { videoID, headline, description } = props

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
        <div className="col-lg-4 card mb-0">
          <div className="card-body pt-md-4">
            <h5 className="text-14 lh-20">
              {headline ? headline : 'Why you need to review your private health insurance'}
            </h5>
            <p>
              {description
                ? description
                : 'If you haven’t reviewed your policy lately, you could be leaving thousands of dollars on the table.'}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-video__thumb {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0;
          background-color: #f09020;
          height: 0;
          padding-bottom: 56.5%;

          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
          }

          &:before {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            content: '';
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 1;
          }

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
            object-position: center;
            transition: all 0.3s ease-in-out;
          }
        }

        .article-video__play {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          border-radius: 50%;
          background-color: #f09020;
          box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease-in-out;

          &:hover {
            box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.5);

            img {
              transform: scale(1.1);
            }
          }

          img {
            width: 24px;
            height: 24px;
            position: unset;
            transition: all 0.3s ease-in-out;
            object-fit: unset;
            object-position: unset;
          }
        }

        .card {
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </figure>
  )
}

export default AdrewVideo
