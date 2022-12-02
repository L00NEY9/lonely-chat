import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/root/root'
import './services'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyles } from './styles/global.styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <GlobalStyles/>
    <Provider store={store}>
      <Root/>
    </Provider>
  </React.Fragment>
)
