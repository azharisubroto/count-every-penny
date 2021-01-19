var FormData = require('form-data')

export default async (req, res) => {
  const payload = req.body
  let formdata = new FormData()

  for (var key in payload) {
    formdata.append(key, payload[key])
  }

  const url = 'https://counteverypenny.com.au/lead/submit'

  const response = await fetch(url, {
    method: 'POST',
    body: formdata
  })

  const data = await response.json()
  res.status(200).json(JSON.stringify(data))
}
