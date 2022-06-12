

import React from 'react';
import { Col, Row  } from 'antd';

/* components */
import NavLeft from './../../components/NavLeft';
import Header from './../../components/Header'
import Footer from './../../components/Footer'

/* page */
import Home from './../Home'
import './index.less'
const Admin: React.FC = () => {
  return(
    <div className='admin-container'>
        <Row>
          <Col span={3}>
            <NavLeft/>
          </Col>
          <Col span={21}>
            <Header/>
              <Home/>
            <Footer/>
          </Col>
        </Row>
    </div>
  )
};

export default Admin;
