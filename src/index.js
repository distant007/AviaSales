import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.scss'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

import { rootReducer } from './redux/rootReducer'
import App from './App'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
