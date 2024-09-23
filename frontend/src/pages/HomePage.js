import React from "react";
import { Post } from "../components";
import { Link } from "react-router-dom";
import { postData } from "../mock/data";
import { Divider } from "antd";
import { PageLayout } from "../layout";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-5 w-1/2">
        {postData.map((post) => {
          console.log("post id :", post.id);
          console.log("post count :", post.count);
          return (
            <>
              <Link to={`/post/${post.id}`} key={post.id}>
                <Post
                  username={"anonymous"}
                  datetime={post.datetime_posted}
                  title={post.title}
                  message={post.message}
                  count={post.count}
                  commentCount={post.comments.length}
                />
              </Link>
              {postData.length !== post.id && (
                <Divider className="bg-blue-400 my-0" />
              )}
            </>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default HomePage;
