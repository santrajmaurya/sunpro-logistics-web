import React from "react";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, Button, Row, Col, Typography } from "antd";

import { observer } from "mobx-react";

const { Title } = Typography;

const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
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

const Booking = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="signin"
      initialValues={{ remember: false }}
      scrollToFirstError
    >
      <div className="form-container">
      <Row gutter={8} style={{overflow: 'auto'}}>
        <Col sm={24}>
          <Title level={4}>Booking:</Title>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="bookingNo"
            label="Booking No"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Booking No" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="typeOfVehicle"
            label="Type of Vehicle"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Type of Vehicle" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="enquiryDate"
            label="Enquiry Date"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Enquiry Date" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="weight"
            label="Weight"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Weight" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="from"
            label="From"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="From" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="to"
            label="To"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="To" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="length"
            label="Length"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Length" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="height"
            label="Height"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Height" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="state"
            label="State"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="State" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="bookingType"
            label="Booking Type"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Booking Type" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="deliveryType"
            label="Delivery Type"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Delivery Type" />
          </Form.Item>
        </Col>
        <Col sm={24}>
          <Title level={4}>Consigner Details:</Title>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="consignerName"
            label="Consigner Name"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Consigner Name" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="noOfConsignee"
            label="No of Consignee"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="No of Consignee" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="address"
            label="Address"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Address" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="gstin"
            label="GSTIN"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="GSTIN" />
          </Form.Item>
        </Col>
      </Row>
      </div>

      {/* <Form.Item {...tailLayout}>
        <Row gutter={[24, 8]}>
          <Col sm={8} xs={24}>
          <Button type="primary" size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Create
        </Button>
          </Col>
          <Col sm={8} xs={24}>
          <Button type="primary" size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Save
        </Button>
          </Col>
          <Col sm={8} xs={24}>
          <Button type="primary" danger size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Cancel
        </Button>
          </Col>
        </Row>
      </Form.Item> */}
    </Form>
  );
};

export default observer(Booking);
