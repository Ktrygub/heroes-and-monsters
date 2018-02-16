import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'

import App from './App'
import rootReducer from './redux/reducers/rootReducer'
import registerServiceWorker from './registerServiceWorker'
import persistedStateDatabase from './persistedStateDatabase'

const store = createStore(
  rootReducer,
  persistedStateDatabase,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
