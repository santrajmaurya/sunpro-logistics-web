import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Select,
  DatePicker,
} from "./ant";
import { observer } from "mobx-react";

import AddDetailsModal from "./AddDetailsModal";

const { Title } = Typography;
const { Option } = Select;

const Booking = () => {
  const [form] = Form.useForm();
  const [isAddConsignorModelOpen, setIsAddConsignorModelOpen] = useState(false);
  const [isAddBrokerModelOpen, setIsAddBrokerModelOpen] = useState(false);

  const closeModal = () => {
    setIsAddConsignorModelOpen(false);
    setIsAddBrokerModelOpen(false);
  };

  return (
    <>
      {isAddConsignorModelOpen && (
        <AddDetailsModal
          isModalVisible={isAddConsignorModelOpen}
          closeModal={closeModal}
          title="Add New Consignor"
          details={[
            { name: "consignorName", label: "Consignor Name" },
            {
              name: "consignorAddress",
              label: "Consignor Address",
              type: "textarea",
            },
          ]}
        />
      )}
      {isAddBrokerModelOpen && (
        <AddDetailsModal
          isModalVisible={isAddBrokerModelOpen}
          closeModal={closeModal}
          title="Add New Broker"
          details={[
            { name: "brokerName", label: "Broker Name" },
            { name: "loadingAdviceNo", label: "Loading Advice No" },
            { name: "totalLorryHire", label: "Total Lorry Hire" },
            { name: "advancePaid", label: "Advance Paid" },
            { name: "normalCharge", label: "Normal Charge" },
            { name: "balancePayable", label: "Balance Payable" },
            { name: "dcIfAny", label: "Detention Charge" },
            { name: "lateDeliveryCharge", label: "Late Delivery Charge" },
            { name: "netBalancePayble", label: "Net Balance Payable" },
          ]}
        />
      )}
      <Form form={form} name="booking" scrollToFirstError>
        <div className="form-container">
          <Row gutter={[12, 12]} sm={24} justify="end">
            <Col sm={3} xs={24}>
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
                Add New Booking
              </Button>
            </Col>
            <Col sm={3} xs={24}>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{
                  cursor: "pointer",
                  width: "100%",
                  background: "#e36d25",
                  borderColor: "#e36d25",
                }}
              >
                Edit
              </Button>
            </Col>
          </Row>
          <Row gutter={8} style={{ overflow: "auto" }}>
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
                <Select placeholder="Type of Vehicle">
                  <Option value="demo">Demo</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="enquiryDate"
                label="Enquiry Date"
                required
                labelCol={{ span: 24 }}
              >
                <DatePicker
                  placeholder="Enquiry Date"
                  style={{ width: "100%" }}
                />
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
              <Form.Item name="to" label="To" required labelCol={{ span: 24 }}>
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
                <Select placeholder="Booking Type">
                  <Option value="demo">Demo</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="deliveryType"
                label="Delivery Type"
                required
                labelCol={{ span: 24 }}
              >
                <Select placeholder="Delivery Type">
                  <Option value="demo">Demo</Option>
                </Select>
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
            <Col sm={24}>
              <Title level={4}>Consignor Details:</Title>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="consignorName"
                label="Consignor Name"
                required
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Consignor Name" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24}>
              <Button
                type="primary"
                size="middle"
                htmlType="submit"
                style={{ cursor: "pointer", marginTop: 39, borderColor:'#20295c', background: '#20295c' }}
                onClick={() => setIsAddConsignorModelOpen(true)}
              >
                Add New Consignor
              </Button>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="consignorAddress"
                label="Consignor Address"
                required
                labelCol={{ span: 24 }}
              >
                <Input.TextArea placeholder="Consignor Address" />
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
                label="Broker Name"
                required
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Broker Name" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24}>
              <Button
                type="primary"
                size="middle"
                htmlType="submit"
                style={{ cursor: "pointer", marginTop: 39, borderColor:'#20295c', background: '#20295c' }}
                onClick={() => setIsAddBrokerModelOpen(true)}
              >
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
          <Row gutter={[12, 12]} sm={24} justify="end">
            <Col sm={3} xs={24}>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{ cursor: "pointer", width: "100%", borderColor:'#20295c', background: '#20295c' }}
              >
                Save
              </Button>
            </Col>
            <Col sm={3} xs={24}>
              <Button
                type="primary"
                danger
                size="large"
                htmlType="submit"
                style={{ cursor: "pointer", width: "100%", borderColor:'#e36d25', background: '#e36d25' }}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </>
  );
};

export default observer(Booking);
