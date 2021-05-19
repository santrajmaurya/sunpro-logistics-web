import React from "react";
import { Modal, Form, Input, DatePicker } from "antd";
import { observer } from "mobx-react";

import "./style.scss";

const AddDetailsModal = ({ closeModal, isModalVisible, details, title }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  console.log("details", details);

  return (
    <>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
      >
        <Form form={form} name="addDeatils" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          {details.map((detail) => (
            <Form.Item name={detail.name} label={detail.label} required>
              {detail.type === "date" ? (
                <DatePicker placeholder={detail.label} style={{width: '100%'}} />
              ) : detail.type === 'textarea' ? (
                <Input.TextArea placeholder={detail.label} type={detail.type} />
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
