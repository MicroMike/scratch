import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import styles from './App.css'

const App = ({ intl }) => (
  <div>
    <Header intl={intl} />
    {/* <Route
      path='/'
      component={}
    /> */}
    <Footer />
  </div>
)

const mapStateToProps = (store) => {
  return {
    intl: store.intl
  }
}

export default connect(mapStateToProps)(App)

