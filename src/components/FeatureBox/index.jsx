/**
 * Feature Box
 */
export default function FeatureBox({ image, link, title, text }) {
  return (
    <>
      <div className="benefit-box">
        <div className="thumbnail">
          <div>
            <img src={image} loading="lazy" width="45" height="45" alt={title} />
          </div>
        </div>
        <h4>
          <a href={link}>{title}</a>
        </h4>
        <p>{text}</p>
      </div>
      <style jsx>{`
        .benefit-box {
          position: relative;
          text-align: center;
          padding: 0 30px;
        }
        .thumbnail {
          margin: 0 auto 20px;
          width: 120px;
          height: 120px;
          border-radius: 120px;
          line-height: 80px;
          text-align: center;
          background: rgba(86, 78, 102, 0.05);
          position: relative;
          div {
            position: absolute;
            top: 50%;
            margin: 0 auto;
            width: 80px;
            height: 80px;
            right: 0;
            left: 0;
            background: rgba(86, 78, 102, 0.05);
            transform: translateY(-50%);
            border-radius: 80px;
            img {
              width: auto !important;
              height: auto !important;
            }
          }
        }
        h4 {
          margin-top: 20px;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 27px;
          text-align: center;
          color: #115d74;
          margin-bottom: 10px;
        }
        p {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          color: #303030;
          margin: 10px 0 0;
        }
      `}</style>
    </>
  )
}
