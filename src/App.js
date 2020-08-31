import React from 'react';
import './App.css';
// import MyRouter from './router/router'
import MyLayout from './page/layouts/layout';
import { ConfigProvider } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN'

function App() {
  return (
    <ConfigProvider  locale={zhCN}>
                       
      <MyLayout/>
      
    </ConfigProvider>
  )
}

export default App;
