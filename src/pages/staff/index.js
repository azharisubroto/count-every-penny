import { useState } from 'react'
import Head from 'next/head'
import Card from '@material-ui/core/Card'
import TextField from '@/components/form/TextField'
import Button from '@material-ui/core/Button'
import useUser from '@/utils/useUser'
import fetchJson from '@/utils/fetchJson'

export default function login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { mutateUser } = useUser({
    redirectTo: '/staff/dashboard',
    redirectIfFound: true
  })

  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const body = {
      username: username,
      password: password
    }

    try {
      await mutateUser(
        fetchJson('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <>
      <Head>
        <title>Staff Login</title>
      </Head>

      <section className="login-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5">
              <h3>Login</h3>
              {errorMsg}
              <Card>
                <div className="px-4 py-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <TextField
                        color="secondary"
                        variant="outlined"
                        placeholder="Username"
                        onChange={(e) => {
                          setUsername(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <TextField
                        color="secondary"
                        variant="outlined"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <Button color="primary" type="submit" variant="contained" size="large" disableElevation fullWidth>
                        <div className="py-2">Login</div>
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        body {
          background: #f0f0f0 !important;
        }

        .login-section {
          min-height: 100vh;

          & > div.container {
            height: 100vh;
            & > .row {
              height: 100vh;
            }
          }
        }
      `}</style>
    </>
  )
}
