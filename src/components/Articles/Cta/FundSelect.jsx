import React from 'react'
import axios from 'axios'
import Select from '@/components/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default function FundSelect() {
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
        Please select one fund to see the average increase from the last six months
      </div>

      <button
        disabled={fund == 'Select One'}
        className={`btn btn-lg btn-block py-3 ${fund == 'Select One' ? 'disabled btn-secondary' : 'btn-primary'}`}>
        Save me some money
      </button>
    </>
  )
}
