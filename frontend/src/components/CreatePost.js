import React, { useState } from "react";
import { Input, Button } from "antd";
import { createPost } from "../api";

const CreatePost = ({ onCreated }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const newPost = {
      title,
      message,
      username: "anonymous",
    };

    await createPost(newPost);
    onCreated();
    setTitle("");
    setMessage("");
  };

  return (
    <div className="flex flex-col gap-8 custom-card">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Title</h1>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Add a title here"}
            size="large"
            className="border border-blue-400 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Message</h1>
          <Input.TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"Add a message here"}
            size="large"
            className="border border-blue-400 "
            rows={4}
          />
        </div>
      </div>

      <div className="w-full flex justify-end gap-2">
        <Button type="primary" size="large" onClick={handleSubmit}>
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
