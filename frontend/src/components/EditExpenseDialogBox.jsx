import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";

const EditExpenseDialogBox = ({
  isOpen,
  closeModal,
  handleEditExpense,
  selectedExpense,
}) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 backdrop-blur-sm bg-white/30" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>

          <DialogTitle className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Edit Expense
          </DialogTitle>

          {/* Form */}
          <form onSubmit={handleEditExpense} className="space-y-5">
            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                defaultValue={selectedExpense?.amount}
                placeholder="Enter amount"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={selectedExpense?.category}
                placeholder="Enter category"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                defaultValue={selectedExpense?.date?.split("T")[0]} // To only get YYYY-MM-DD
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={selectedExpense?.description}
                placeholder="Enter description"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Update Expense
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EditExpenseDialogBox;
