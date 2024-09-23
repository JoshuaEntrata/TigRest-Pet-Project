import React from "react";
import UserDetails from "./UserDetails";
import { Divider } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const Comment = ({ username, datetime, message, upvote, downvote }) => {
  return (
    <div className="custom-card">
      <div className="flex flex-col gap-2">
        <UserDetails username={username} datetime={datetime} />
        <p className="font-light text-base">{message}</p>
      </div>
      <Divider className="bg-blue-400" />
      <div className="flex gap-4">
        <div className="flex gap-2">
          <button>
            <LikeOutlined />
          </button>
          <h1>{upvote}</h1>
        </div>
        <div className="flex gap-2">
          <button>
            <DislikeOutlined />
          </button>
          <h1>{downvote}</h1>
        </div>
      </div>
    </div>
  );
};

export default Comment;
