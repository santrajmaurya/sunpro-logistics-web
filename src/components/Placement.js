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
} from "antd";
import { observer } from "mobx-react";

import AddDetailsModal from './AddDetailsModal';

const { Title } = Typography;
const { Option } = Select;

const Placement = () => {
  const [form] = Form.useForm();
  const [isAddConsigneeModelOpen, setIsAddConsigneeModelOpen] = useState(false);

  const closeModal = () => {
    setIsAddConsigneeModelOpen(false);
  }

  return (
    <>
    {isAddConsigneeModelOpen && (
      <AddDetailsModal
      isModalVisible={isAddConsigneeModelOpen}
      closeModal={closeModal}
      title="Add New Consignee"
      details = {[
        { name: 'consigneeName', label: 'Consignee Name'},
        { name: 'consigneeAddress', label: 'Consignee Address', type: 'textarea'},
        { name: 'gstin', label: 'GSTIN'},
        { name: 'consigneeMobile', label: 'Consignee Mobile' , type: 'number'},
        { name: 'consignementNo', label: 'Consignement No'},
        { name: 'consignementDate', label: 'Consignement Date', type: 'date'},
        { name: 'materialDesc', label: 'Material Description'},
      ]}
       />
    )}
    <Form form={form} name="placement" scrollToFirstError>
      <div className="form-container">
        <Row gutter={8} style={{ overflow: "auto" }}>
          <Col sm={24}>
            <Title level={4}>Booking Details:</Title>
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
              name="placeOfSupply"
              label="Place of Supply"
              required
              labelCol={{ span: 24 }}
            >
              <Select placeholder="Place of Supply">
                <Option value="demo">
                  Demo
                </Option>
              </Select>
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
                <Option value="demo">
                  Demo
                </Option>
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
                <Option value="demo">
                  Demo
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="bookingDate"
              label="Booking Date"
              required
              labelCol={{ span: 24 }}
            >
              <DatePicker
                placeholder="Booking Date"
                style={{ width: "100%" }}
              />
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
              name="address"
              label="Address"
              required
              labelCol={{ span: 24 }}
            >
              <Input.TextArea placeholder="Address" />
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
          <Col sm={12}>
            <Form.Item
              name="mobile"
              label="Mobile"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Mobile" type="number" />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Title level={4}>Consignee Details:</Title>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="consigneeName"
              label="Consignee Name"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Consignee Name" />
            </Form.Item>
          </Col>
          <Col sm={12} xs={24}>
            <Button
              type="primary"
              size="middle"
              htmlType="submit"
              style={{ cursor: "pointer", marginTop: 39 }}
              onClick={() => setIsAddConsigneeModelOpen(true)}
            >
              Add New Consignee
            </Button>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="consigneeAddress"
              label="Consignee Address"
              required
              labelCol={{ span: 24 }}
            >
              <Input.TextArea placeholder="Consignee Address" />
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
          <Col sm={12}>
            <Form.Item
              name="consigneeMobile"
              label="Consignee Mobile"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Consignee Mobile" type="number" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="consignementNo"
              label="Consignement No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Consignement No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="consignementDate"
              label="Consignement Date"
              required
              labelCol={{ span: 24 }}
            >
              <DatePicker
                placeholder="Consignement Date"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="materialDesc"
              label="Material Description"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Material Description" />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Title level={4}>Vehicle Details:</Title>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="vehicleNo"
              label="Vehicle No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Vehicle No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="make"
              label="Make"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Make" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="model"
              label="Model"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Model" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="color"
              label="Color"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Color" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="registerdAt"
              label="Registerd At"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Registerd At" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="chasisNo"
              label="Chasis No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Chasis No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="engineNo"
              label="Engine No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Engine No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="taxTokenNo"
              label="Tax Token No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Tax Token No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="roadPermitNo"
              label="Road Permit No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Road Permit No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="fitnesValidity"
              label="Fitnes Validity"
              required
              labelCol={{ span: 24 }}
            >
              <DatePicker
                placeholder="Fitnes Validity"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="insuredFrom"
              label="Insured From"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Insured From" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="dateOfInsurance"
              label="Date Of Insurance"
              required
              labelCol={{ span: 24 }}
            >
              <DatePicker
                placeholder="Date Of Insurance"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="insuredBy"
              label="Insured By"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Insured By" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="certificate"
              label="Certificate"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Certificate" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="divisionNo"
              label="Division No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Division No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="financerName"
              label="Financer Name"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Financer Name" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="financerAddress"
              label="Financer Address"
              required
              labelCol={{ span: 24 }}
            >
              <Input.TextArea placeholder="Financer Address" />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Title level={4}>Driver Details:</Title>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="driverName"
              label="Driver Name"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Driver Name" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="driverAddress"
              label="Driver Address"
              required
              labelCol={{ span: 24 }}
            >
              <Input.TextArea placeholder="Driver Address" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="driverLicenceNo"
              label="Driver Licence No"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Driver Licence No" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="validity"
              label="Validity"
              required
              labelCol={{ span: 24 }}
            >
              <DatePicker placeholder="Validity" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="driverMobile"
              label="Driver Mobile"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Driver Mobile" type="number" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="ownerName"
              label="Owner Name"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Owner Name" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="ownerAddress"
              label="Owner Address"
              required
              labelCol={{ span: 24 }}
            >
              <Input.TextArea placeholder="Owner Address" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item
              name="ownerMobile"
              label="Owner Mobile"
              required
              labelCol={{ span: 24 }}
            >
              <Input placeholder="Owner Mobile" type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[12, 12]} sm={24} justify="end">
          <Col sm={3} xs={24}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{ cursor: "pointer", width: "100%" }}
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
              style={{ cursor: "pointer", width: "100%" }}
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

export default observer(Placement);
