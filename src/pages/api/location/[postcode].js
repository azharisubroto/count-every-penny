export default async (req, res) => {
  const {
    query: { postcode }
  } = req

  const response = await fetch('https://v0.postcodeapi.com.au/suburbs/' + postcode + '.json')
  var data = await response.json()
  //const data = response['body']
  res.status(200).json(JSON.stringify(data))
}
