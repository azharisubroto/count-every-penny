/* eslint-disable jsx-a11y/iframe-has-title */
function Navbar2(props) {
  const mainlink = props.link
  return (
    <header className="header" id="header">
      <nav className="navbar border-bottom">
        <div className="container">
          <div className="navbar-brand">
            <a href="index.html">
              <img src="/static/logo-cep.svg" alt="Count Every Penny" />
            </a>
          </div>
          <div className="navbar-action">
            <a href={mainlink} className="btn btn-primary btn-emboss btn-circle">
              Get My Quotes
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar2
