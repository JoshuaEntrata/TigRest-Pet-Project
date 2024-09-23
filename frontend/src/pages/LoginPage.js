import React from "react";
import { Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-10 bg-red-400 w-1/2 h-screen">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Join TigRest Community</h1>
          <h4 className="text-lg font-light">
            Get more features and privileges by joining to the most helpful
            community
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p>Username</p>
            <Input
              size="large"
              placeholder="Enter your email"
              prefix={<UserOutlined />}
            />
          </div>

          <div className="flex flex-col">
            <p>Password</p>
            <Input.Password
              size="large"
              placeholder="Enter your password"
              prefix={<KeyOutlined />}
            />
          </div>
        </div>

        <Link to="/home" className="py-2 bg-blue-500 rounded-md">
          <h1 className="text-lg text-center text-white">Login</h1>
        </Link>
      </div>
      <div className="bg-blue-500 w-1/2 h-screen"></div>
    </div>
  );
};

export default LoginPage;
