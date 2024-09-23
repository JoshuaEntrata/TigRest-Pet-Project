import React, { useState } from "react";
import { Input, Button } from "antd";
import { addComment } from "../api";

const AddComment = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const newComment = {
      message: comment,
      username: "anonymous",
    };

    await addComment(postId, newComment);
    setComment("");
  };
  return (
    <div className="flex flex-col gap-4 custom-card">
      <Input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder={"Add a comment here"}
        size="large"
        className="border border-blue-400 "
      />
      <div className="w-full flex justify-end gap-2">
        <Button type="primary" size="large" onClick={handleSubmit}>
          Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
