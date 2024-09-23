import React, { useState, useEffect } from "react";
import { Post, AddComment, Comment } from "../components";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../api";
import { PageLayout } from "../layout";

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const postData = await fetchPostById(id);
      if (postData) {
        setPost(postData);
        setComments(postData.comments);
      }
    };

    getPost();
  }, [id]);

  const handleNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <PageLayout>
      <div className="flex flex-col gap-5 w-1/2">
        <Post
          username={"anonymous"}
          datetime={post.datetime_posted}
          title={post.title}
          message={post.message}
          count={post.count}
          commentCount={comments.length}
        />

        <AddComment postId={post.id} onComment={handleNewComment} />

        {comments &&
          comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                username={"anonymous"}
                datetime={comment.datetime_posted}
                message={comment.message}
                count={comment.count}
              />
            );
          })}
      </div>
    </PageLayout>
  );
};

export default PostPage;
