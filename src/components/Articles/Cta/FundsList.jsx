import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FundsList(props) {
  const { link, ...other } = props
  const [fund, setFund] = useState('')
  const [fundlist, setFundlist] = useState([])

  useEffect(() => {
    fetchFund()
  }, [])

  // Fetch fundlist
  const fetchFund = async () => {
    try {
      const { data } = await axios.get('/api/fundlist2')
      setFundlist(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div {...other}>
      <div className="row row-cols-2 row-cols-lg-5">
        {Object.entries(fundlist).map(([key]) => (
          <>
            {key != 'Select One' && key != "Average / I don't have a fund" && (
              <div key={key} className="col">
                <button
                  onClick={() => {
                    setFund(key)
                  }}
                  href={link}
                  className={`brand-card ${key == fund ? 'active' : ''}`}>
                  <img src={`/static/img/partners/CTA/${key.replace(' ', '-')}.svg`} alt={key} loading="lazy" />
                </button>
              </div>
            )}
          </>
        ))}

        <div className="col-lg-40">
          <button
            onClick={() => {
              setFund('other')
            }}
            className={`brand-card ${fund == 'other' ? 'active' : ''}`}>
            Other Fund
          </button>
        </div>

        <div className="col-12 col-lg-40">
          <button
            onClick={() => {
              setFund('non-insured')
            }}
            className={`brand-card ${fund == 'non-insured' ? 'active' : ''}`}>
            I'm not currently insured
          </button>
        </div>
      </div>

      <div className="alert alert-danger text-center mt-4">
        {fund == '' && <>Please select one fund to see the average increase from the last six months</>}

        {fund != '' && (
          <>
            The average increase for <strong>{fund}</strong> policies was{' '}
            <strong>{Object.keys(fundlist).length > 0 && fundlist[`${fund}`][2020]}%</strong> in October 2020 and will
            be a further <strong>{Object.keys(fundlist).length > 0 && fundlist[`${fund}`][2021]}%</strong> in April
            2021. That's a{' '}
            <strong>
              {Object.keys(fundlist).length > 0 &&
                parseFloat(fundlist[`${fund}`][2020]) + parseFloat(fundlist[`${fund}`][2021])}
            </strong>
            % increase in 6 months!
          </>
        )}
      </div>

      <button
        disabled={fund == ''}
        className={`btn btn-lg btn-block py-3 ${fund == 'Select One' ? 'disabled btn-secondary' : 'btn-primary'}`}>
        Save me some money {fund != 'Select One' && <> on my {fund} policy</>}
      </button>

      <style jsx>{`
        .row {
          & > div {
            padding-top: 10px;
            padding-bottom: 10px;

            &.col-lg-40 {
              @media screen and (min-width: 992px) {
                width: 40%;
              }
            }
          }
        }
        .brand-card {
          display: block;
          width: 100%;
          background: #ffffff;
          border: 2px solid #e6e6e6;
          border-radius: 4px;
          height: 50px;
          line-height: 45px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s ease;
          will-change: border;
          position: relative;

          img {
            max-height: 30px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
          }

          &.active,
          &:active,
          &:focus {
            border: 2px solid #f09020 !important;
            outline: none;
          }
        }

        .alert-danger {
          background: #ffe7ca;
          border: 1px solid #ffc989;
          color: #333;
        }
      `}</style>
    </div>
  )
}

FundsList.displayName = 'FundsList'

export default FundsList
