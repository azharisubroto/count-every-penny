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
  if (data.status == 'success') {
    res.status(200).json(JSON.stringify(data))
  } else {
    res.status(500).json(JSON.stringify({ status: 'fail' }))
  }

  //const data = await response.json()

  // const {
  //   query: { postcode }
  // } = req

  // const response = await fetch('https://counteverypenny.com.au/lead/submit')
  // var data = await response.json()
  // //const data = response['body']
  // res.status(200).json(JSON.stringify(data))
}
