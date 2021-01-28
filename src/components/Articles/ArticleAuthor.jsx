export default function ArticleAuthor({ avatar, name, date, isamp, variant }) {
  const InlineAuthorInfo = () => {
    return (
      <>
        <div className="byline">
          <div>
            By <strong>{name}</strong>
          </div>
          <div>{date}</div>
          <div>5 mins read</div>
        </div>
        <style jsx>{`
          .byline {
            display: flex;
            flex-wrap: wrap;
            & > div {
              padding-right: 10px;
              margin-right: 10px;
              border-right: 1px solid #333;
              &:last-of-type {
                border: 0;
              }
            }
          }
          @media screen and (max-width: 576px) {
            .byline > div {
              padding-right: 10px;
              margin-right: 10px;
              &:first-of-type {
                width: 100%;
                margin-right: 0;
                border-right: 0;
              }
            }
          }
        `}</style>
      </>
    )
  }
  return (
    <>
      <div className="author">
        <div className="avatar">
          {!isamp ? (
            <img src={avatar} loading="lazy" alt={name} width="42" height="42" />
          ) : (
            <amp-img alt={name} src={avatar} width="42" height="42" layout="responsive"></amp-img>
          )}
        </div>

        <div className="author-info">
          {variant == 'inline' ? (
            <>
              <InlineAuthorInfo />
            </>
          ) : (
            <>
              <div>
                By <strong>{name}</strong>
              </div>
              {!isamp ? (
                <div>Last Updated {date}</div>
              ) : (
                <amp-timeago layout="fixed" width="160" height="20" datetime="2020-07-31T00:37:33.809Z" locale="en">
                  {date}
                </amp-timeago>
              )}
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .author {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin: 20px 0;
          align-items: center;
          .avatar {
            width: 42px;
            height: 42px;
            border-radius: 90px;
            overflow: hidden;
            margin-right: 10px;
          }
          .author-info {
            margin-right: auto;
            margin-left: 0;
            width: 80%;
          }
        }
      `}</style>
    </>
  )
}
