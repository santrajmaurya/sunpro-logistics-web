import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  DatePicker,
  Select,
  Radio,
} from "antd";
import { observer } from "mobx-react";

const { Title } = Typography;
const { Option } = Select;

const Invoice = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Form form={form} name="invoice" scrollToFirstError>
      <Row gutter={8} style={{ overflow: "auto" }}>
        <Col sm={24}>
          <Title level={4}>Invoice:</Title>
        </Col>
        <Col sm={24}>
          <Form.Item required>
            <Radio.Group onChange={onChange} value={value} size="large">
              <Radio value="invoiceByBooking">Invoice By Booking ID</Radio>
              <Radio value="invoiceByConsignment">
                Invoice By Consignment No
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        {value === "invoiceByBooking" && (
          <>
            <Col sm={6}>
              <Form.Item
                name="bookingId"
                label="Booking ID"
                required
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Booking ID" />
              </Form.Item>
            </Col>
            <Col sm={6}>
              <Form.Item
                name="consignmentNo"
                label="Consignment No"
                required
                labelCol={{ span: 24 }}
              >
                <Select placeholder="Consignment No">
                  <Option value="demo">Demo</Option>
                </Select>
              </Form.Item>
            </Col>
          </>
        )}

        {value === "invoiceByConsignment" && (
          <>
            <Col sm={6}>
              <Form.Item
                name="consignmentNo"
                label="Consignment No"
                required
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Consignment No" />
              </Form.Item>
            </Col>
            {/* <Col sm={6}>
              <Form.Item
                name="dateOfInvoice"
                label="Date of Invoice"
                required
                labelCol={{ span: 24 }}
              >
                <DatePicker
                  placeholder="Date of Invoice"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col> */}
          </>
        )}
        <Col sm={6}>
              <Form.Item
                name="dateOfInvoice"
                label="Date of Invoice"
                required
                labelCol={{ span: 24 }}
              >
                <DatePicker
                  placeholder="Date of Invoice"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
      </Row>
      <Row gutter={[12, 12]} sm={12} justify="start">
        {/* <Col xs={24} sm={3} md={3}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ cursor: "pointer", width: "100%" }}
            disabled={!value}
          >
            Save
          </Button>
        </Col> */}
        <Col xs={24} sm={3} md={3}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            disabled={!value}
            style={{
              cursor: "pointer",
              width: "100%",
              background: "green",
              borderColor: "green",
            }}
          >
            Generate Invoice
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default observer(Invoice);
