// src/components/Sidebar.jsx
import React from "react";
import { LayoutDashboard, BanknoteArrowDown, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r flex flex-col justify-between p-6 fixed">
      {/* Top: Profile and Navigation */}
      <div>
        {/* Profile */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="Profile"
            className="w-20 h-20 rounded-full mb-2"
          />
          <h2 className="text-lg font-semibold">Mike William</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          <a
            href="/dashboard"
            className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition"
          >
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a
            href="/expenses"
            className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition"
          >
            <BanknoteArrowDown size={20} /> Expenses
          </a>
          {/* <a
            href="/login"
            className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition"
          >
            <LogOut size={20} /> Logout
          </a> */}
        </nav>

        {/* Bottom: Logout */}
        <div className="mt-[26px]">
          <a
            href="/login"
            className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition"
          >
            <LogOut size={20} /> Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
