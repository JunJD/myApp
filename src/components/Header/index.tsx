

import React from 'react';
import './index.less'

const Header: React.FC = () => {

  return(
    <div className='header-container'>
     <header >
        <span>你好，丁俊杰</span>
     </header>
     <footer>
       <i>首页</i>
       <span>我是时间2022年6月11日</span>
     </footer>
    </div>
  )
};

export default Header;