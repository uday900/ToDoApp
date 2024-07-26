import React from 'react'
import ReactDOM from 'react-dom/client'

import ToDoListProject from './index.jsx'
import { Provider } from 'react-redux'
import store from './components/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <ToDoListProject/>

    </Provider>

  </React.StrictMode>,
)
