import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Input, Space } from 'antd';

export default function ModalCreateTask() {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    return (
        <>
        <Button type="primary" onClick={showModal}>
        Create Task
      </Button>
      <Modal title="Create Task" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

        <p><Input placeholder="Task Name"></Input></p>
        <p><Input placeholder="Desciption"></Input></p>

      </Modal>
      </>
    )
}
