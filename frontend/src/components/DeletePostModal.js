import React from "react";
import { Modal } from "antd";
import { deletePost } from "../api";

const DeletePostModal = ({ isOpen, onOk, onCancel, postId }) => {
  const handleDelete = async () => {
    await deletePost(postId);
    onOk();
  };

  return (
    <Modal
      title="Delete Post"
      open={isOpen}
      onOk={handleDelete}
      onCancel={onCancel}
      okText="Delete"
      okButtonProps={{ danger: true }}
    >
      <p>Are you sure you want to delete this post?</p>
    </Modal>
  );
};
export default DeletePostModal;
