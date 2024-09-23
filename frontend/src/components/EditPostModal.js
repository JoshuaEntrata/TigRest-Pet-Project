import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";
import { updatePost } from "../api";

const EditPostModal = ({ isOpen, onOk, onCancel, postId, title, message }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newMessage, setNewMessage] = useState(message);

  useEffect(() => {
    setNewTitle(title);
    setNewMessage(message);
  }, [title, message]);

  const handleUpdate = async () => {
    const updatedPost = {
      title: newTitle,
      message: newMessage,
    };

    await updatePost(postId, updatedPost);
    onOk();
  };

  return (
    <Modal
      title="Edit Post"
      open={isOpen}
      onOk={handleUpdate}
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
