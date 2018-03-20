import Express from 'express'

import { handleRender } from './render'

const app = Express()

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.get('*', handleRender)

export default app