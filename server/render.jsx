import React from 'react'

import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import IntlWrapper from '../client/modules/Intl/IntlWrapper'
import { switchLanguage } from '../client/modules/Intl/IntlActions'

import store from '../client/app/store'
import App from '../client/app/App'

const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>d
      </body>
    </html>
    `
}

export const handleRender = (req, res) => {

  store.dispatch(switchLanguage(req.headers['accpet-language']))

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