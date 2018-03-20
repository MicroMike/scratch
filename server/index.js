import http from 'http'
import app from './server'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter'

const server = dev ? http.createServer(app) : app

server.listen(port, () => {
  console.log('Server started on port:' + port)
})

if (module.hot) {
  let currentApp = app
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept();
}