import React from "react";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, Button, Row, Col } from "./ant";

import { observer } from "mobx-react";

const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 8 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 8 },
    lg: { span: 8 },
  },
};

const tailLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 8 },
    lg: { span: 8, offset: 8 },
  },
};

const CreateEditUser = () => {
  const [form] = Form.useForm();

  return (
    <Form
      {...layout}
      form={form}
      name="signin"
      initialValues={{ remember: false }}
      style={{ marginTop: "30px" }}
      scrollToFirstError
    >
      <Form.Item
        name="userName"
        label="User Name"
        rules={[
          {
            required: true,
            message: "Please input your user name!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="User Name"
        />
      </Form.Item>
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="First Name"
        />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Last Name"
        />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
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
        name="renterPassword"
        label="Re-enter Password"
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Re-enter Password"
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Row gutter={[24, 8]}>
          <Col sm={8} xs={24}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{
                cursor: "pointer",
                width: "100%",
                background: "#20295c",
                borderColor: "#20295c",
              }}
            >
              Create
            </Button>
          </Col>
          <Col sm={8} xs={24}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{ cursor: "pointer", width: "100%", borderColor: '#e36d25', background: '#e36d25' }}
            >
              Save
            </Button>
          </Col>
          <Col sm={8} xs={24}>
            <Button
              type="primary"
              danger
              size="large"
              htmlType="submit"
              style={{ cursor: "pointer", width: "100%" }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default observer(CreateEditUser);
