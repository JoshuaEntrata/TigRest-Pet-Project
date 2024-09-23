import React, { useState } from "react";
import {
  LikeOutlined,
  LikeFilled,
  DislikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";

const PostVote = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [voted, setVoted] = useState(null);

  const handleLike = () => {
    if (voted === "like") {
      setCount(count - 1);
      setVoted(null);
    } else if (voted === "dislike") {
      setCount(count + 2);
      setVoted("like");
    } else {
      setCount(count + 1);
      setVoted("like");
    }
  };

  const handleDislike = () => {
    if (voted === "dislike") {
      setCount(count + 1);
      setVoted(null);
    } else if (voted === "like") {
      setCount(count - 2);
      setVoted("dislike");
    } else {
      setCount(count - 1);
      setVoted("dislike");
    }
  };

  return (
    <div className="flex gap-5">
      <div className="flex gap-2 items-center">
        <button onClick={handleLike}>
          {voted === "like" ? (
            <LikeFilled className="text-green-600" />
          ) : (
            <LikeOutlined />
          )}
        </button>
        <h1>{count}</h1>
        <button onClick={handleDislike}>
          {voted === "dislike" ? (
            <DislikeFilled className="text-red-600" />
          ) : (
            <DislikeOutlined />
          )}
        </button>
      </div>
    </div>
  );
};

export default PostVote;
