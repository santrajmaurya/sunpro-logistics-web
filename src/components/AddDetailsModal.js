import React from "react";
import { Modal, Form, Input, DatePicker, InputNumber } from "antd";
import { observer } from "mobx-react";
import debounce from 'lodash.debounce';

import "./style.scss";

const AddDetailsModal = ({ closeModal, isModalVisible, details, title }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  const fetchLocation = (pin) => {
    fetch(`https://api.postalpincode.in/pincode/${pin}`)
      .then((result) => result.json())
      .then((rowData) => {
        if (rowData.Status === "Success")
          form.setFieldsValue({ District: rowData.PostOffice[0].city });
      });
  };

  const onValuesChange = (changedValue, all) => {
    const { pin } = changedValue;
    if(pin) {
      const debouncedChnage = debounce(() => fetchLocation(pin), 1500);
		  debouncedChnage();
    }
  }


  console.log("details", details);
  console.log('city', form.getFieldValue('District'));

  return (
    <>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
      >
        <Form form={form} name="addDeatils" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onValuesChange={onValuesChange}>
          {details.map((detail) => (
            <Form.Item name={detail.name} label={detail.label} required key={detail.label}>
              {detail.type === "date" ? (
                <DatePicker placeholder={detail.label} style={{width: '100%'}} />
              ) : detail.type === 'textarea' ? (
                <Input.TextArea placeholder={detail.label} type={detail.type} />
              ) : detail.type === 'number' ? (
                <InputNumber style={{width: '100%'}}  placeholder={detail.label} type={detail.type} />
              ) : (
                <Input placeholder={detail.label} type={detail.type} />
              )}
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default observer(AddDetailsModal);
