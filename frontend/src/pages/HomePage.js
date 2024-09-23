import React, { useState, useEffect } from "react";
import { Post, CreatePost } from "../components";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { PageLayout } from "../layout";
import { fetchPosts } from "../api";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const postsData = await fetchPosts();
    setPosts(postsData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-col gap-5 w-1/2">
        <CreatePost onCreated={getPosts} />
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link to={`/post/${post.id}`}>
                <Post
                  username={"anonymous"}
                  datetime={post.datetime_posted}
                  title={post.title}
                  message={post.message}
                  count={post.count}
                  commentCount={post.comments.length}
                />
              </Link>
              {posts.length !== post.id && (
                <Divider className="bg-blue-400 my-0" />
              )}
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default HomePage;
