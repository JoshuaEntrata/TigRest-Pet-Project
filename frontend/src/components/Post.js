import React, { useState } from "react";
import { Dropdown, Divider } from "antd";
import { CommentOutlined, EllipsisOutlined } from "@ant-design/icons";
import UserDetails from "./UserDetails";
import { EditPostModal, DeletePostModal, PostVote } from ".";

const Post = ({
  username,
  datetime,
  title,
  message,
  count,
  commentCount = 0,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editMessage, setEditMessage] = useState(message);

  const showEditModal = () => {
    setEditTitle(title);
    setEditMessage(message);
    setIsEditModalOpen(true);
  };

  const handleOkEdit = () => {
    // TODO: update the logic of this
    setIsEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleOkDelete = () => {
    // TODO: update the logic of this
    setIsDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const menuItems = [
    { key: "1", label: "Edit", onClick: showEditModal },
    { key: "2", label: "Delete", onClick: showDeleteModal },
  ];

  return (
    <div className="flex flex-col custom-card">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <UserDetails username={username} datetime={datetime} />
          <Dropdown
            menu={{
              items: menuItems,
            }}
            trigger={["click"]}
            className="m-0 p-0"
          >
            <EllipsisOutlined />
          </Dropdown>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">{title}</h1>
            <p className="font-light text-base">{message}</p>
          </div>
        </div>
      </div>

      <Divider className="bg-blue-400" />

      <div className="flex w-full justify-between">
        <PostVote initialCount={count} />

        <div className="flex gap-2 items-center">
          <CommentOutlined />
          <h1>{commentCount}</h1>
        </div>
      </div>

      <EditPostModal
        isOpen={isEditModalOpen}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        title={editTitle}
        message={editMessage}
      />

      <DeletePostModal
        isOpen={isDeleteModalOpen}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default Post;
