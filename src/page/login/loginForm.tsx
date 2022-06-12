/* 新增 */
import { Carousel } from 'antd';
import { Button, Checkbox, Form, Input, Row,Col } from 'antd';
import React from 'react';
import { withRouter } from "react-router-dom";
import { setGuardValue } from '../../redux/actions';

/* 
*导入封装的API
 */
import {getLogin} from '../../api/getRequest';

import {
  CarTwoTone,
  AlipayOutlined,
  WechatOutlined,
  QqOutlined
} from '@ant-design/icons';


/* 
*每个动画当中的Icon的样式,
 */
const iconStyle:React.CSSProperties={
  fontSize:'80vh',
  lineHeight: '100vh',
  width:"100%",
  color: '#87871b',
}

/* 
*login样式
 */
const formStyle:React.CSSProperties={
  width:"30vw",
  margin:"0 auto",
}

/* 
*组件
 */
const loginForm: React.FC<any> = ({dispatch,tokens,history}) => {

  const onFinish = async(values: any) => {
    const result = await getLogin(values)
    if (result?.status === 201){
        /* 这里应该给localStorage和redux设置 token，而不是data.status或者data  */
        localStorage.setItem("tokens",result.status)
        /*  */
        dispatch(setGuardValue(result));
        /*  */
        history.push("/admin")
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
    
   <Row>

     <Col span={10} >
        <Carousel autoplay>
       <div>
         <CarTwoTone style={iconStyle} />
       </div>
       <div>
         <AlipayOutlined style={iconStyle} />
       </div>
       <div>
         <QqOutlined style={iconStyle} />
       </div>
       <div>
         <WechatOutlined style={iconStyle} />
       </div>
     </Carousel>
    </Col>
    <Col span={14} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
     <Form
      style={formStyle}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入您的用户名!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item   name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交   
          </Button>
        </Form.Item>
      </Form>
     </Col>
   </Row>
   </>
  );
};

export default withRouter(loginForm)/* 新增 */

