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
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";

const AppLayout = () => {
  const location = useLocation();
  const privatePages = ["/dashboard", "/expenses"];
  const isPrivatePage = privatePages.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      {isPrivatePage && (
        <header className="bg-white border border-b border-gray-50 text-black p-2">
          <h1 className="text-xl font-bold">Expense Tracker</h1>
        </header>
      )}
      <div className="flex flex-1">
        {isPrivatePage && <Sidebar />}
        <div
          className={`${isPrivatePage ? "flex-1 ml-64" : "w-full"} bg-gray-100`}
        >
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Private Route */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/expenses"
              element={
                <PrivateRoute>
                  <Expenses />
                </PrivateRoute>
              }
            />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
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
