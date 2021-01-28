import Link from 'next/link'
function PremiumIncrease(props) {
  const { headline, caption, link } = props
  return (
    <>
      <div className="d-none d-md-block">
        <div className="card card-widget">
          <div className="card-body pt-4">
            <h5 className="card-title text-center mb-4">
              {headline ? headline : 'Health Insurance Premium Increases in 2020 and 2021'}
            </h5>
            <div className="card-table">
              <table className="table table-borderless table-fund">
                <thead>
                  <tr className="table-orange">
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
            <p className="card-source mt-3 mb-0">Source: Health.gov.au</p>

            <div className="pt-4 text-center">
              <Link href={link}>
                <button className="btn btn-primary btn-lg">Compare Now</button>
              </Link>
            </div>
          </div>
          <div className="card-footer py-md-3">
            <p>
              {caption
                ? caption
                : 'The table below shows that some funds (which we cannot name here) are increasing their premiums by 4 times as much as other funds. You can talk to one of our advisors for the full details'}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;

          &.card-widget {
            margin-bottom: 45px;
          }
        }
        .table {
          tr {
            th,
            td {
              font-size: 18px;
              line-height: 21px;
              padding: 15px 20px;
              color: #4e4e4e;
              vertical-align: middle;
            }

            th {
              font-weight: 700;
            }
          }
          &-fund {
            margin-bottom: 0;
            text-align: center;
            border: 1px solid #efefef;
            .table-orange {
              th {
                background-color: #f09020;
                color: #fff;
                &:nth-child(2) {
                  background-color: #e98a1a;
                }
                &:nth-child(3) {
                  background-color: #e1871e;
                }
                &:nth-child(4) {
                  background-color: #d3801f;
                }
              }
            }
            tbody {
              tr {
                td {
                  font-weight: 700;

                  &:first-child {
                    font-weight: 600;
                    text-align: left;
                  }

                  &:nth-child(2) {
                    background-color: #fdfdfd;
                  }
                  &:nth-child(3) {
                    background-color: #f9f9f9;
                  }
                }
              }
            }
            tfoot {
              tr {
                td {
                  background-color: #fee9cf;
                  color: #7c4e18;
                  font-weight: 700;

                  &:first-child {
                    font-weight: 600;
                    text-align: left;
                  }
                }
              }
            }
          }

          &-danger {
            background-color: #e8b9b9 !important;
            color: #b41818 !important;
          }

          &-success {
            background-color: #dee8b9 !important;
            color: #85a412 !important;
          }
        }
      `}</style>
    </>
  )
}

PremiumIncrease.displayName = 'PremiumIncrease'

export default PremiumIncrease
