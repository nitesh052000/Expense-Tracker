import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/expenses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses", error);
    }
  };

  //  Pie Chart (Category distribution)
  const categoryData = () => {
    const categoryMap = {};

    expenses.forEach((expense) => {
      const category = expense.category || "Others";
      categoryMap[category] = (categoryMap[category] || 0) + expense.amount;
    });

    return {
      labels: Object.keys(categoryMap),
      datasets: [
        {
          data: Object.values(categoryMap),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
          ],
        },
      ],
    };
  };

  //  Bar Chart (Monthly Expenses)
  const monthlyData = () => {
    const monthMap = {};

    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const month = date.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });

      monthMap[month] = (monthMap[month] || 0) + expense.amount;
    });

    const sortedMonths = Object.keys(monthMap).sort(
      (a, b) => new Date(`1 ${a}`) - new Date(`1 ${b}`)
    );

    return {
      labels: sortedMonths,
      datasets: [
        {
          label: "Monthly Expenses",
          data: sortedMonths.map((month) => monthMap[month]),
          backgroundColor: "#36A2EB",
        },
      ],
    };
  };

  return (
    <div className="w-full px-4 py-6 md:px-12">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Expenses by Category</h2>
          <Pie data={categoryData()} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
          <Bar data={monthlyData()} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
