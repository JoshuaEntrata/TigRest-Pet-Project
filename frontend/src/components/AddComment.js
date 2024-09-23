import React from "react";
import { Input, Button } from "antd";

const AddComment = () => {
  return (
    <div className="px-10 py-5 hover:bg-pink-200 flex flex-col gap-2 border border-pink-400 rounded-xl">
      <Input placeholder={"Add a comment here"} />
      <div className="w-full flex justify-end gap-2">
        <Button>Cancel</Button>
        <Button type="primary">Comment</Button>
      </div>
    </div>
  );
};

export default AddComment;
