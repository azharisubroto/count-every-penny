export default async (req, res) => {
  const response = await fetch('https://counteverypenny.com.au/lead/postcode_state.json', {
    method: 'GET'
  })

  const data = await response.json()
  res.status(200).json(JSON.stringify(data))
}
