// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  console.log("url", API_BASE_URL);

  // function to handle login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, form);
      console.log("res in login", res);
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("userName", res?.data?.user?.username);
      toast.success("Login Sucessfully");
      navigate("/dashboard");
    } catch (error) {
      console.log("error in Login", error);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
        <p className="text-gray-500 mb-6">
          Please enter your details to log in
        </p>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Min 8 Characters"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition duration-200"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-purple-600 hover:underline">
              SignUp
            </a>
          </p>
        </form>
      </div>

      {/* Right side - Image or Info Graphic */}
      <div className="hidden md:flex md:w-1/2 bg-purple-100 items-center justify-center relative">
        <img
          src="https://s3-alpha.figma.com/hub/file/6439917573/77e2518a-bb11-484c-baac-817f3525808e-cover.png"
          alt="Login Graphic"
          className="w-full h-full p-2"
        />
      </div>
    </div>
  );
};

export default Login;
