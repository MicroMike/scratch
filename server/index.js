import path from 'path'
import server from './server'

const port = process.env.PORT || 3000
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter'

let currentApp = server;

server.listen(port, () => {
  console.log('Server started on port:' + port)
})

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
