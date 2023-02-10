import ReactDOM from 'react-dom/client'
import './theme/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persister } from './store/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
)
