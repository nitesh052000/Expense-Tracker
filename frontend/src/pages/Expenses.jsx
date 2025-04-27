import axios from "axios";
import React, { useEffect, useState } from "react";
import AddExpenseModal from "../components/AddExpenseDialogBox";
import { Trash2, FilePenLine } from "lucide-react";
import EditExpenseDialogBox from "../components/EditExpenseDialogBox";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false); // for editing modal
  const [selectedExpense, setSelectedExpense] = useState(null); // for the specific expense to edit

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");
  console.log("api", API_BASE_URL);

  const getAllExpenses = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/expenses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("res", response);
      setExpenses(response.data);
    } catch (error) {
      console.log("error", error);
      alert("Error in showing data");
    }
  };

  const handleAddExpense = async (e) => {
    console.log("parent handleAddexpe");
    const formData = new FormData(e.target);

    const data = {
      amount: formData.get("amount"),
      category: formData.get("category"),
      description: formData.get("description"),
      date: formData.get("date"),
    };

    console.log("form data", data);
    const res = await axios.post(`${API_BASE_URL}/api/expenses`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    getAllExpenses();

    console.log("add expense", res);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handleExpenseDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/api/expenses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`Expense with ID ${id} deleted successfully`, res);
      getAllExpenses();
    } catch (error) {
      console.log("error in deleting expense", error);
    }
  };

  const handleEditExpense = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedData = {
      amount: formData.get("amount"),
      category: formData.get("category"),
      description: formData.get("description"),
      date: formData.get("date"),
    };

    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/expenses/${selectedExpense._id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Expense updated", res);
      getAllExpenses();
      setIsEditOpen(false); // Close the edit modal after saving
    } catch (error) {
      console.error("Error updating expense", error);
    }
  };

  useEffect(() => {
    getAllExpenses();
  }, []);

  return (
    <>
      <div className="w-full px-4 py-6 md:px-12">
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="px-6 py-4 border-b border-gray-200 flex  items-center space-x-2">
            <h2 className="text-lg font-semibold text-gray-900">
              All Expenses
            </h2>
            <span className="text-xs text-gray-500 rounded-md border px-2.5 py-0.5">
              {expenses.length}
            </span>
            <button
              onClick={() => setIsOpen(true)}
              className=" justify-end rounded-md border px-2.5 py-0.5 ml-auto cursor"
            >
              Add expense
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    date
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {expenses &&
                  expenses?.map((expense, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {expense?.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {expense?.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {expense?.description}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {expense?.date &&
                          new Date(expense.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                      </td>
                      <div className="mt-4 flex gap-4">
                        <button
                          onClick={() => handleExpenseDelete(expense?._id)}
                          className="cursor-pointer"
                        >
                          <Trash2 size={15} />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedExpense(expense);
                            setIsEditOpen(true);
                          }}
                          className="cursor-pointer"
                        >
                          <FilePenLine size={15} />
                        </button>
                      </div>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200"></div>
        </div>
      </div>

      <AddExpenseModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleAddExpense={handleAddExpense}
      />

      <EditExpenseDialogBox
        isOpen={isEditOpen}
        closeModal={() => setIsEditOpen(false)}
        handleEditExpense={handleEditExpense}
        selectedExpense={selectedExpense}
      />
    </>
  );
};

export default Expenses;
