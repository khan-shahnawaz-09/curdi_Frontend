import { X } from "lucide-react";

const AddTaskPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
      <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md border border-purple-500/30">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Add New Task
          </h2>
          <button
            onClick={() => onClose(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Task title"
              className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="relative">
            <textarea
              placeholder="Task description"
              rows="3"
              className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <select className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer">
              <option value="pending" className="text-gray-800">Pending</option>
              <option value="in-progress" className="text-gray-800">In Progress</option>
              <option value="completed" className="text-gray-800">Completed</option>
            </select>

            <select className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer">
              <option value="low" className="text-gray-800">Low Priority</option>
              <option value="medium" className="text-gray-800">Medium Priority</option>
              <option value="high" className="text-gray-800">High Priority</option>
            </select>
          </div>

          <input
            type="date"
            className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          />

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="flex-1 py-3 rounded-xl border border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskPopup;