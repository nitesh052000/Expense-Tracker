// src/pages/Login.jsx
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  console.log("url", API_BASE_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/register`, form);
      console.log("sighup res", res);
      toast.success("Sucessfully Sigh Up! Please Login");
      navigate("/");
    } catch (error) {
      console.log("error in sighup", error);
      toast.error("Error in sighing up");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>
        <h1 className="text-2xl mb-2">Create an Account</h1>
        <p className="text-gray-500 mb-6">
          Join us today by entering your details below
        </p>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Username
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              type="text"
              placeholder="john Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              placeholder="Min 8 Characters"
            />
          </div>
          {isLoading ? (
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition duration-200 flex items-center justify-center"
            >
              <Loader2 className="h-5 w-5 animate-spin" />
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition duration-200"
            >
              SignUp
            </button>
          )}

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/" className="text-purple-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>

      {/* Right side - Image or Info Graphic */}
      <div className="hidden md:flex md:w-1/2 bg-purple-100 items-center justify-center relative">
        <img src="/expenseimamge.png" className="w-full h-full p-2" />
      </div>
    </div>
  );
};

export default Signup;
