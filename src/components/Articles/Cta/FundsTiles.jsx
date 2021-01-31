import React, { useState } from 'react'
//import axios from 'axios'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import useSWR from 'swr'

function FundsTiles(props) {
  const [fund, setFund] = useState('none')
  const { link, ...other } = props

  const { data, error } = useSWR('/api/fundlist2')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const fundlist = data
  const alertClasses = 'alert alert-danger text-center'

  return (
    <div {...other}>
      <div className="row row-cols-2 row-cols-lg-5 mb-4">
        {Object.entries(fundlist).map(([key]) => (
          <div key={key} className="col">
            <button
              onClick={() => {
                setFund(key)
              }}
              className={`brand-card ${key == fund ? 'active' : ''}`}>
              <img src={`/static/img/partners/CTA/${key.replace(' ', '-')}.svg`} alt={key} loading="lazy" />
            </button>
          </div>
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

      <div>
        {fund == 'none' && (
          <Fade duration={500}>
            <div className={alertClasses}>
              Please select one fund to see the average increase from the last six months
            </div>
          </Fade>
        )}

        {fund in fundlist && (
          <Fade duration={500}>
            <div className={alertClasses}>
              <>
                The average increase for <strong>{fund}</strong> policies was{' '}
                <strong>{fund in fundlist && fundlist[`${fund}`][2020]}%</strong> in October 2020 and will be a further{' '}
                <strong>{fund in fundlist && fundlist[`${fund}`][2021]}%</strong> in April 2021. That's a{' '}
                <strong>
                  {fund in fundlist && parseFloat(fundlist[`${fund}`][2020]) + parseFloat(fundlist[`${fund}`][2021])}
                </strong>
                % increase in 6 months!
              </>
            </div>
          </Fade>
        )}

        {(fund == 'other' || fund == 'non-insured') && (
          <Fade duration={500}>
            <div className={alertClasses}>
              The average increase for policies was <strong>2.92%</strong> in October 2020 and will be a further{' '}
              <strong>2.74%</strong> in April 2021. That's a <strong>5.66%</strong> increase in 6 months!
            </div>
          </Fade>
        )}
      </div>

      <Link href={link ? link : '/form/step1'}>
        <button
          disabled={fund == 'none'}
          className={`btn btn-lg btn-block py-3 mt-2 ${fund != 'none' ? 'btn-primary ' : 'disabled btn-secondary'}`}>
          Save me some money {fund in fundlist && <> on my {fund} policy</>}
        </button>
      </Link>

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

          &:hover {
            border-color: #d1d1d1;
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

FundsTiles.displayName = 'FundsTiles'

export default FundsTiles
