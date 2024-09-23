import React from "react";
import { Modal, Input } from "antd";

const EditPostModal = ({ isOpen, onOk, onCancel }) => {
  return (
    <Modal
      title="Edit Post"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      width={800}
    >
      <div className="flex flex-col gap-4">
        <Input
          size="large"
          placeholder="Edit title"
          className="border border-blue-400"
        />
        <Input.TextArea
          size="large"
          placeholder="Edit message"
          rows={4}
          className="border border-blue-400"
        />
      </div>
    </Modal>
  );
};

export default EditPostModal;
