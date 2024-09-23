import React from "react";
import { Avatar } from "antd";

const UserDetails = ({ username, datetime }) => {
  return (
    <>
      <div className="flex items-center gap-5">
        <Avatar size="medium" />
        <div className="flex flex-col">
          <h1 className="text-base">{username}</h1>
          <p className="font-light text-sm">{datetime}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
