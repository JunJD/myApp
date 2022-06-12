import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider }from "antd";

import zhCN from 'antd/lib/locale/zh_CN';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

ReactDOM.render((
  <React.StrictMode>
    <Provider store={store}>
     <ConfigProvider locale={zhCN}>
      <BrowserRouter>
      
        <App />
  
      </BrowserRouter>
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
),document.getElementById('root') as HTMLElement)

reportWebVitals();
