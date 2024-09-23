import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";

const EditPostModal = ({ isOpen, onOk, onCancel, title, message }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newMessage, setNewMessage] = useState(message);

  useEffect(() => {
    setNewTitle(title);
    setNewMessage(message);
  }, [title, message]);

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
          value={newTitle}
          size="large"
          onChange={(e) => setNewTitle(e.target.value)}
          className="border border-blue-400"
        />
        <Input.TextArea
          value={newMessage}
          size="large"
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-blue-400"
        />
      </div>
    </Modal>
  );
};

export default EditPostModal;
