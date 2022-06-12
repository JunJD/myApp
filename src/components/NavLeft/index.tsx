import {
    SettingFilled,
  } from '@ant-design/icons';
import menuList from '../../config/menuConfig';
import type { MenuProps } from 'antd';

import React from "react";

import { Menu  } from 'antd';

import './index.less'

type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = menuList


const NavLeft:React.FC=()=>{
    return(
        <>
        <div className='NavLeft-icon'>
        <SettingFilled style={{color:"#fff",fontSize:"28px"}} spin/>
        React单车
        </div>
        <Menu
            defaultSelectedKeys={['/home']}
            mode="inline"
            theme="dark"
            items={items}
          />
        </>
    )
}
export default NavLeft