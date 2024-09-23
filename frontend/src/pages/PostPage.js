import React from "react";
import { Post, AddComment, Comment } from "../components";
import { useParams } from "react-router-dom";
import { postData } from "../mock/data";
import { PageLayout } from "../layout";

const PostPage = () => {
  const { id } = useParams();

  const postObj = postData.find((post) => parseInt(id) === post.id);
  const commentObj = postObj.comments;

  return (
    <PageLayout>
      <div className="flex flex-col gap-5 w-1/2">
        <Post
          username={"anonymous"}
          datetime={postObj.datetime_posted}
          title={postObj.title}
          message={postObj.message}
          count={postObj.count}
          commentCount={commentObj.length}
        />

        <AddComment />

        {commentObj &&
          commentObj.map((comment) => {
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
