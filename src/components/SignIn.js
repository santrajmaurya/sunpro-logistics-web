import React, { useContext } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';

import { observer } from "mobx-react";
import { Link } from 'react-router-dom';

import { RootStoreContext } from "../App";

const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } }
}

const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8, offset: 8 }, lg: { span: 8, offset: 8 } }
};

const SignIn = () => {
  const [form] = Form.useForm();
  const { userStore } = useContext(RootStoreContext);

  return (
    <Form
      {...layout}
      form={form}
      name="signin"
      initialValues={{ remember: false }}
      style={{ marginTop: '0px' }}
      scrollToFirstError
    > 
      <Form.Item
        name="userName"
        label="User Name"
        rules={[
          {
            required: true,
            message: 'Please input your user name!',
          },
        ]}
      >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User Name" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        {...tailLayout}
      >
        <Checkbox>
          Remember me <Link to='/forgot-password' style={{marginLeft: '275px'}}>Forgot password</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default observer(SignIn);