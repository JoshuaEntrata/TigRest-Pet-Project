import React from "react";
import { Input, Button } from "antd";

const AddComment = () => {
  return (
    <div className="flex flex-col gap-4 custom-card">
      <Input
        placeholder={"Add a comment here"}
        size="large"
        className="border border-blue-400 "
      />
      <div className="w-full flex justify-end gap-2">
        <Button type="primary" size="large">
          Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
