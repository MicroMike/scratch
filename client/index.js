import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import IntlWrapper from '../client/modules/Intl/IntlWrapper'
import App from '../app/App'
import store from '../app/store'

hydrate((
  <Provider store={store}>
    <IntlWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlWrapper>
  </Provider>
), document.getElementById('root'))

if (module.hot) {
  module.hot.accept();
}
