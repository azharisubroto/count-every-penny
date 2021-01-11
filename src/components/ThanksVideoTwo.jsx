import React from 'react'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function AdrewVideo() {
  const [open, setOpen] = React.useState(false)
  const yt_link = 'https://www.youtube.com/embed/7QltMeIbkaM'

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <figure className="article-video mx-0">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="article-video__thumb">
            <img src="/static/img/thankyou/thumb.png" alt="Health" />
            <button onClick={handleClickOpen} className="article-video__play">
              <img src="/static/img/thankyou/play.png" alt="Play" />
            </button>
          </div>
        </div>
        <div className="col-md-4 card mb-0">
          <div className="card-body">
            <h5 className="card-title">
              Unsure about answering our call?
              <br />
              Here’s why it’s so important to answer
            </h5>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <iframe
          title="video"
          src={yt_link}
          frameBorder="0"
          autoPlay="1"
          width="600"
          height="400"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </Dialog>
    </figure>
  )
}

export default AdrewVideo
