import React from 'react'
import Express from 'express'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import IntlWrapper from '../client/modules/Intl/IntlWrapper'
import { switchLanguage } from '../client/modules/Intl/IntlActions'

import store from '../app/store'
import App from '../app/App'

function handleRender(req, res) {

  store.dispatch(switchLanguage('fr'))

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <IntlWrapper>
        <StaticRouter location={req.location} context={{}}>
          <App />
        </StaticRouter>
      </IntlWrapper>
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/vendor.js"></script>
        <script src="/static/client.js"></script>
      </body>
    </html>
    `
}

const dev = process.env.NODE_ENV !== 'production'
const app = Express()

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

export default app