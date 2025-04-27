import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Sidebar from "./components/Sidebar";

// Layout component that conditionally renders the sidebar
const AppLayout = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      {!isAuthPage && (
        <header className="bg-white border border-b border-gray-50 text-black p-2">
          <h1 className="text-xl font-bold">Expense Tracker</h1>
        </header>
      )}
      <div className="flex flex-1">
        {!isAuthPage && <Sidebar />}
        <div
          className={`${isAuthPage ? "w-full" : "flex-1 ml-64"} bg-gray-100`}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
