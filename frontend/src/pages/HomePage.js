import React from "react";
import { Post } from "../components";
import { Link } from "react-router-dom";
import { postData } from "../data/data";
import { Divider } from "antd";
import { PageLayout } from "../layout";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-5 w-1/2">
        {postData.map((post) => {
          return (
            <>
              <Link to={`/post/${post.id}`} key={post.id}>
                <Post
                  username={post.username}
                  datetime={post.datetime_posted}
                  title={post.title}
                  message={post.message}
                  upvote={post.upvote_count}
                  downvote={post.downvote_count}
                />
              </Link>
              {postData.length !== post.id && (
                <Divider className="bg-black -my-2" />
              )}
            </>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default HomePage;
