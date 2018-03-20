import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'

import store from '../app/store'
import IntlWrapper from '../modules/Intl/IntlWrapper'
import App from './App'

import styles from './App.css'


const Container = ({ intl }) => (
  <Provider store={store}>
    <IntlWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlWrapper>
  </Provider>
)

export default Container