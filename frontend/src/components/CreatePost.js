import React from "react";
import { Input, Button } from "antd";

const CreatePost = () => {
  return (
    <div className="flex flex-col gap-8 custom-card">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Title</h1>
          <Input
            placeholder={"Add a title here"}
            size="large"
            className="border border-blue-400 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Message</h1>
          <Input.TextArea
            placeholder={"Add a message here"}
            size="large"
            className="border border-blue-400 "
            rows={4}
          />
        </div>
      </div>

      <div className="w-full flex justify-end gap-2">
        <Button type="primary" size="large">
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
