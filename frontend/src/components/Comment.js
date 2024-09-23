import React from "react";
import UserDetails from "./UserDetails";
import { Avatar, Divider } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const Comment = ({ username, datetime, message, upvote, downvote }) => {
  return (
    <div className="px-10 py-5 hover:bg-pink-200 border border-pink-400 rounded-xl">
      <div className="flex flex-col gap-2">
        <UserDetails username={username} datetime={datetime} />
        <p className="font-light text-base">{message}</p>
      </div>
      <Divider className="bg-pink-400" />
      <div className="flex gap-4">
        <div className="flex gap-2">
          <Avatar icon={<LikeOutlined />} />
          <h1>{upvote}</h1>
        </div>
        <div className="flex gap-2">
          <Avatar icon={<DislikeOutlined />} />
          <h1>{downvote}</h1>
        </div>
      </div>
    </div>
  );
};

export default Comment;
