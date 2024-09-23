import React, { useState } from "react";
import {
  LikeOutlined,
  LikeFilled,
  DislikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";

const PostVote = ({ initialUpvote, initialDownvote }) => {
  const [upvote, setUpvote] = useState(initialUpvote);
  const [downvote, setDownvote] = useState(initialDownvote);
  const [voted, setVoted] = useState(null);

  const handleLike = () => {
    if (voted === "like") {
      setUpvote(upvote - 1);
      setVoted(null);
    } else {
      setUpvote(upvote + 1);
      if (voted === "dislike") {
        setDownvote(downvote - 1);
      }
      setVoted("like");
    }
  };

  const handleDislike = () => {
    if (voted === "dislike") {
      setDownvote(downvote - 1);
      setVoted(null);
    } else {
      setDownvote(downvote + 1);
      if (voted === "like") {
        setUpvote(upvote - 1);
      }
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
        <h1>{upvote}</h1>
      </div>

      <div className="flex gap-2 items-center">
        <button onClick={handleDislike}>
          {voted === "dislike" ? (
            <DislikeFilled className="text-red-600" />
          ) : (
            <DislikeOutlined />
          )}
        </button>
        <h1>{downvote}</h1>
      </div>
    </div>
  );
};

export default PostVote;
