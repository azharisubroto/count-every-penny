export default function AgesCTA(props) {
  const { link, type } = props
  const asideType = type == 1 ? 'card-quotes--type-1' : type == 2 ? 'card-quotes--type-2' : 'card-quotes--type-3'
  return (
    <>
      <div className={`card card-quotes ${asideType} mb-10px`}>
        <div className="card-header">
          <h5>Select your age to compare. Policies from $2.93 per day!</h5>
        </div>
        <div className="card-body">
          {type == 1 && (
            <div className="card-quotes__display">
              <p>
                <strong>Australia</strong>: We saved our average customer $357.95* on their average annual premium!
              </p>
            </div>
          )}
          <ul className="card-quotes__choose">
            {type == 2 ? (
              <>
                <li>
                  <a href={link}>≤ 60</a>
                </li>
                <li>
                  <a href={link}>60 - 65</a>
                </li>
                <li>
                  <a href={link}>66 - 71</a>
                </li>
                <li>
                  <a href={link}>≥ 72</a>
                </li>
              </>
            ) : (
              <>
                {Array.apply(null, {
                  length: 21
                }).map((e, i) => (
                  <li key={`side-cta-${i}`}>
                    <a href="{link}" key={'age-' + i}>
                      {i == 0 && <>&lt; </>}
                      {i == 20 && <>&gt; </>}
                      {i + 59}
                    </a>
                  </li>
                ))}
              </>
            )}
          </ul>
          {type == 1 && (
            <p className="card-quotes__notes">*Average savings based on data from 13,136 customers during 2020</p>
          )}
          {type != 1 && (
            <div className="card-quotes__display">
              <p>
                <strong>Australia</strong>: We saved our average customer $357.95* on their average annual premium!
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="card-quotes__notes card-quotes__notes--type-2">
        *Average savings based on data from 13,136 customers during 2020
      </p>
    </>
  )
}
