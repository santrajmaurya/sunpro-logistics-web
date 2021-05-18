import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";

import { observer } from "mobx-react";

const { Title } = Typography;

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
        <Col sm={12} xs={24}>
          <Button type="primary" size="middle" htmlType="submit" style={{ cursor: 'pointer', marginTop: 39}}>
          Add New Consigner
        </Button>
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
        <Col sm={24}>
          <Title level={4}>Transport Charges:</Title>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="bookingAmount"
            label="Booking Amount"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Booking Amount" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="rtoFine"
            label="RTO Fine"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="RTO Fine" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="advanceAmount"
            label="Advance Amount"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Advance Amount" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="dcLoadingPoint"
            label="Detention Charge at Loading Point"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Detention Charge at Loading Point" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="dcLoadingDesc"
            label="Detention Charge at Loading Description"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Detention Charge at Loading Description" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="dcUnloadingPoint"
            label="Detention Charge at Unloading Point"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Detention Charge at Unloading Point" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="dcUnloadingDescc"
            label="Detention Charge at Unloading Description"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Detention Charge at Unloading Description" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="statCharge"
            label="Statistical Charge"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Statistical Charge" />
          </Form.Item>
        </Col>
        <Col sm={24}>
          <Title level={4}>Brokers Details:</Title>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="brokerName"
            label="Name"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
        <Col sm={12} xs={24}>
          <Button type="primary" size="middle" htmlType="submit" style={{ cursor: 'pointer', marginTop: 39}}>
          Add New
        </Button>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="loadingAdviceNo"
            label="Loading Advice Number"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Loading Advice Number" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="totalLorryHire"
            label="Total Lorry Hire"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Total Lorry Hire" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="advancePaid"
            label="Advance Paid"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Advance Paid" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="normalCharge"
            label="Normal Charge"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Normal Charge" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="balancePayable"
            label="Balance Payable"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Balance Payable" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="dcIfAny"
            label="Detention Charge(if any)"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Detention Charge(if any)" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="lateDeliveryCharge"
            label="Late Delivery Charge"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Late Delivery Charge" />
          </Form.Item>
        </Col>
        <Col sm={12}>
          <Form.Item
            name="netBalancePayble"
            label="Net Balance Payable"
            required
            labelCol={{ span: 24 }}
          >
            <Input placeholder="Net Balance Payable" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[12,12]} sm={24} justify="end">
        <Col sm={3} xs={24}>
          <Button type="primary" size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Add New Booking
        </Button>
        </Col>
        <Col sm={3} xs={24}>
          <Button type="primary" size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Edit
        </Button>
        </Col>
        <Col sm={3} xs={24}>
          <Button type="primary" size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Save
        </Button>
        </Col>
        <Col sm={3} xs={24}>
          <Button type="primary" danger size="large" htmlType="submit" style={{ cursor: 'pointer', width: '100%'}}>
          Cancel
        </Button>
        </Col>
        </Row>
      </div>
    </Form>
  );
};

export default observer(Booking);
