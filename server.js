const express = require('express')
const compression = require('compression')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  if (!dev) {
    server.use(compression())
  }

  server.get('/user-ip', (req, res) => {
    //const ip = requestIp.getClientIp(req)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    app.render(
      {
        ...req,
        clientIP: ip
      },
      res,
      '/userIP',
      req.query
    )
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
