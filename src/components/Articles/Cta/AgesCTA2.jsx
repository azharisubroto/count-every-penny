export default function AgesCTA(props) {
  const mainlink = props.link
  return (
    <>
      <div className="card card-quotes card-quotes--type-2 mb-10px">
        <div className="card-header">
          <h5>Select your age to compare. Policies from $2.93 per day!</h5>
        </div>
        <div className="card-body">
          <ul className="card-quotes__choose">
            <li>
              <a href={mainlink}>≤ 60</a>
            </li>
            <li>
              <a href={mainlink}>60 - 65</a>
            </li>
            <li>
              <a href={mainlink}>66 - 71</a>
            </li>
            <li>
              <a href={mainlink}>≥ 72</a>
            </li>
          </ul>
          <div className="card-quotes__display">
            <p>
              <strong>Australia</strong>: We saved our average customer $357.95* on their average annual premium!
            </p>
          </div>
        </div>
      </div>

      <p className="card-quotes__notes card-quotes__notes--type-2">
        *Average savings based on data from 13,136 customers during 2020
      </p>
    </>
  )
}
