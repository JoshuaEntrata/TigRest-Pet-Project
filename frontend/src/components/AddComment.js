import React from "react";
import { Input, Button } from "antd";

const AddComment = () => {
  return (
    <div className="flex flex-col gap-2 custom-card">
      <Input
        placeholder={"Add a comment here"}
        size="default"
        className="border border-blue-400 "
      />
      <div className="w-full flex justify-end gap-2">
        <Button>Cancel</Button>
        <Button type="primary">Comment</Button>
      </div>
    </div>
  );
};

export default AddComment;
