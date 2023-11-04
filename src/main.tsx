import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
import { Provider } from 'react-redux';
import store from './store';
import Loader from './common/Loader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
    </Suspense>
  </React.StrictMode>,
)
