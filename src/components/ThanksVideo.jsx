/* eslint-disable jsx-a11y/iframe-has-title */
function ThanksVideo() {
  return (
    <>
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
      <style jsx>
        {`
          $primary: #f09020;
          $secondary: #0b3053;
          $white: #fff;
          $black: #000;
          @mixin img-cover {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
            object-position: center;
            transition: all 0.3s ease-in-out;
          }

          @mixin avatar($size, $radius, $background) {
            position: relative;
            width: $size;
            height: $size;
            overflow: hidden;
            border-radius: $radius;
            background-color: $background;

            img,
            iframe,
            object {
              @include img-cover;
            }
          }
          .article {
            &-video {
              margin-bottom: 40px;
              &__thumb {
                @include avatar(100%, 0, $primary);
                height: 0;
                padding-bottom: 56.5%;

                &:before {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                  content: '';
                  background-color: rgba($black, 0.3);
                  z-index: 1;
                  display: none;
                }
              }

              &__play {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2;
                border: none;
                background-color: transparent;
                padding: 0;
                outline: none !important;

                img {
                  width: 64px;
                  height: 46px;
                  position: unset;
                  transition: all 0.3s ease-in-out;
                  object-fit: unset;
                  object-position: unset;
                }

                &:hover {
                  img {
                    transform: scale(1.1);
                  }
                }
              }

              .card {
                margin-bottom: 0;
                border-radius: 0px 4px 4px 0px;

                &-body {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  padding: 20px;
                }

                h5 {
                  font-size: 24px;
                  line-height: 35px;
                  margin-bottom: 0;
                  font-weight: 700;
                }
              }
            }
          }
        `}
      </style>
    </>
  )
}

export default ThanksVideo
