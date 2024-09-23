import React from "react";
import { Modal } from "antd";

const DeletePostModal = ({ isOpen, onOk, onCancel }) => (
  <Modal
    title="Delete Post"
    open={isOpen}
    onOk={onOk}
    onCancel={onCancel}
    okText="Delete"
    okButtonProps={{ danger: true }}
  >
    <p>Are you sure you want to delete this post?</p>
  </Modal>
);
export default DeletePostModal;
