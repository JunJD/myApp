/* 新增 */

import React from 'react';

import { connect } from 'react-redux';

import LoginForm from './loginForm';


/* 
*组件
 */
const Login: React.FC<any> = (props) => {
  
  return (
    <LoginForm {...props} />
  );
};
const mapStateToProps = (state:any) => ({
  tokens: state
})
export default connect(mapStateToProps)(Login)/* 新增 */

