/* eslint-disable jsx-a11y/iframe-has-title */
function PremiumIncrease(props) {
  const { headline, caption } = props
  return (
    <>
      <div className="card card-widget mb-25px">
        <div className="card-body px-0 pb-0">
          <h5 className="card-title text-center mb-25px px-3">
            {headline ? headline : 'Premium increases 2020 and 2021'}
          </h5>
          <div className="card-table mx-0 mb-0">
            <table className="table table-borderless table-fund--type-2 mb-0">
              <thead>
                <tr className="table-blue">
                  <th></th>
                  <th>October 2020</th>
                  <th>April 2021</th>
                  <th>Total Rate Rise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fund 1</td>
                  <td>5.58%</td>
                  <td>3.78%</td>
                  <td className="table-danger">9.36%</td>
                </tr>
                <tr>
                  <td>Fund 2</td>
                  <td>4.68%</td>
                  <td>4.07%</td>
                  <td className="table-danger">8.75%</td>
                </tr>
                <tr>
                  <td>Fund 3</td>
                  <td>4.32%</td>
                  <td>4.30%</td>
                  <td className="table-danger">8.62%</td>
                </tr>
                <tr>
                  <td>Fund 4</td>
                  <td>3.91%</td>
                  <td>4.26%</td>
                  <td className="table-danger">8.17%</td>
                </tr>
                <tr>
                  <td>Fund 5</td>
                  <td>3.94%</td>
                  <td>0.83%</td>
                  <td className="table-success">4.77%</td>
                </tr>
                <tr>
                  <td>Fund 6</td>
                  <td>2.66%</td>
                  <td>1.11%</td>
                  <td className="table-success">3.77%</td>
                </tr>
                <tr>
                  <td>Fund 7</td>
                  <td>2.90%</td>
                  <td>0.50%</td>
                  <td className="table-success">3.40%</td>
                </tr>
                <tr>
                  <td>Fund 8</td>
                  <td>1.98%</td>
                  <td>0.94%</td>
                  <td className="table-success">2.92%</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Industry Average</td>
                  <td>2.92%</td>
                  <td>2.74%</td>
                  <td>5.66%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="card-footer">
          <p>
            {caption
              ? caption
              : 'As you can see from the table, some funds are increasing their premiums by 4 times as much as other funds! We can’t mention them by name here but you can talk to an advisor for the full details.'}
          </p>
        </div>
      </div>
      <p className="card-source">Source: Health.gov.au</p>
    </>
  )
}

export default PremiumIncrease
