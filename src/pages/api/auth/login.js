//import fetchJson from '../../lib/fetchJson'
import withSession from '@/utils/session'

export default withSession(async (req, res) => {
  const { username, password } = await req.body

  if (username == 'cepadmin' && password == 'devcep2021') {
    const user = { isLoggedIn: true, userName: username }
    req.session.set('user', user)
    await req.session.save()
    res.json(JSON.stringify(user))
  } else {
    const { response: fetchResponse } = 'Error'
    res.status(fetchResponse?.status || 500).json('Error')
  }
})
