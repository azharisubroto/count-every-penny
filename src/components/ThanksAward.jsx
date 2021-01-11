export default function ThanksAward() {
  return (
    <>
      <section className="thanks-award">
        <div className="container">
          <div className="card card-award">
            <div className="card-award-gold">
              <img src="/static/img/form/gold-award.png" alt="Gold Award" />
            </div>
            <div className="card-award-year">
              {Array.apply(null, {
                length: 7
              }).map((e, i) => (
                // eslint-disable-next-line react/jsx-key
                <div className="card-award-year__item">
                  <img src={'/static/img/form/award-' + parseInt(i + 1) + '-1.png'} alt="Yearly Award" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
