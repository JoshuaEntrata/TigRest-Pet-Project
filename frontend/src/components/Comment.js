import React from "react";
import UserDetails from "./UserDetails";
import { Divider } from "antd";
import { PostVote } from ".";

const Comment = ({ username, datetime, message, count }) => {
  return (
    <div className="custom-card">
      <div className="flex flex-col gap-2">
        <UserDetails username={username} datetime={datetime} />
        <p className="font-light text-base">{message}</p>
      </div>
      <Divider className="bg-blue-400" />

      <PostVote initialCount={count} />
    </div>
  );
};

export default Comment;
