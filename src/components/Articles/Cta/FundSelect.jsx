import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import Select from '@/components/Select'
import MenuItem from '@material-ui/core/MenuItem'

function FundSelect({ link }) {
  const [fundlist, setFundlist] = React.useState([])
  const [fund, setFund] = React.useState('Select One')

  React.useEffect(() => {
    fetchFund()
  }, [])

  // Fetch fundlist
  const fetchFund = async () => {
    try {
      const { data } = await axios.get('/api/fundlist')
      setFundlist(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Select
        placeholder="Select your life stage"
        variant="outlined"
        value={fund}
        onChange={(e) => {
          setFund(e.target.value)
        }}>
        {Object.entries(fundlist).map(([key]) => (
          <MenuItem disabled={key == 'Select One'} key={key} value={key}>
            <div className="py-1 text-18 lh-30 fw-700">{key}</div>
          </MenuItem>
        ))}
      </Select>

      <div className="alert alert-danger text-center mt-4">
        {fund == 'Select One' && <>Please select one fund to see the average increase from the last six months</>}

        {fund != 'Select One' && (
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

      <Link href={link ? link : '/form/step1'}>
        <button
          disabled={fund == 'Select One'}
          className={`btn btn-lg btn-block py-3 ${fund == 'Select One' ? 'disabled btn-secondary' : 'btn-primary'}`}>
          Save me some money {fund != 'Select One' && <> on my {fund} policy</>}
        </button>
      </Link>

      <style jsx>{`
        .alert-danger {
          background: #ffe7ca;
          border: 1px solid #ffc989;
          color: #333;
        }
      `}</style>
    </>
  )
}

FundSelect.displayName = 'FundSelect'

export default FundSelect
