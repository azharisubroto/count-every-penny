const awards = [
  {
    name: 'Awards 2012',
    img: '/static/img/articles/type-2/awards/2012.png'
  },
  {
    name: 'Awards 2013',
    img: '/static/img/articles/type-2/awards/2013.png'
  },
  {
    name: 'Awards 2014',
    img: '/static/img/articles/type-2/awards/2014.png'
  },
  {
    name: 'Awards 2015',
    img: '/static/img/articles/type-2/awards/2015.png'
  },
  {
    name: 'Awards 2016',
    img: '/static/img/articles/type-2/awards/2016.png'
  },
  {
    name: 'Awards 2017',
    img: '/static/img/articles/type-2/awards/2017.png'
  },
  {
    name: 'Awards 2018',
    img: '/static/img/articles/type-2/awards/2018.png'
  }
]
export default function FooterWithAwards() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-awards">
              {awards.map((item, index) => (
                <div className="footer-awards-item" key={index}>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <ul className="footer-nav">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms of Use</a>
              </li>
              <li>
                <a href="mailto:contact@counteverypenny.com.au">Contact Us</a>
              </li>
            </ul>
            <p className="footer-copyright">
              &copy; Copyright Count Every Penny 2021. All rights reserved. Counteverypenny.com.au or the companies it
              works with do not compare all products in the market. The availability of products compared may change
              from time to time. Not all products available from our partners are compared and not all products are
              available to all customers. This is a sponsored article and is intended as an advertisement, not editorial
              content. Asymmetric Information ATF Sideprojects Unit Trust.
            </p>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{``}</style>
    </>
  )
}
