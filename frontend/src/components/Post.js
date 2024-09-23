import React from "react";
import { Avatar, Button, List, Popover } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const Post = ({
  username,
  datetime,
  title,
  message,
  upvote,
  downvote,
  commentCount = 0,
}) => {
  const voteCount = upvote - downvote;

  const popoverContent = (
    <List bordered>
      <List.Item className="hover:bg-purple-200 cursor-pointer">
        <EditOutlined />
        <p>Edit Post</p>
      </List.Item>
      <List.Item className="hover:bg-purple-200 cursor-pointer">
        <DeleteOutlined />
        <p>Delete</p>
      </List.Item>
    </List>
  );

  return (
    <div className="hover:bg-pink-200 flex flex-col gap-4 px-10 py-5 rounded-lg border border-pink-400 ">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Avatar size="small" />
          <h1 className="text-sm">
            r/{username} • {datetime}
          </h1>
        </div>
        <Popover content={popoverContent} trigger={"click"} className="m-0 p-0">
          <EllipsisOutlined />
        </Popover>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="font-light text-base">{message}</p>
        </div>
      </div>

      <div className="flex gap-2 w-full">
        <Button className="px-2 py-1 flex gap-2 rounded-2xl">
          <ArrowUpOutlined />
          <h1>{voteCount}</h1>
          <ArrowDownOutlined />
        </Button>

        <Button className="px-2 py-1 flex gap-2 rounded-2xl">
          <CommentOutlined />
          <h1 className="text-sm">{commentCount}+</h1>
        </Button>
      </div>
    </div>
  );
};

export default Post;
