import React from 'react'
import { AppContainer } from 'react-hot-loader';
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import IntlWrapper from './modules/Intl/IntlWrapper'
import Container from './app/Container'
import store from './app/store'

const hotRender = Component =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

hotRender(Container)

if (module.hot) {
  module.hot.accept('./app/Container', () => {
    console.log('rerender')
    hotRender(Container)
  });
}
