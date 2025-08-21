import axios from "axios";
import { toast } from "react-toastify";
import url from "../url";
import { useOutletContext } from "react-router-dom";
const Task = ({ task, setTask }) => {
  //for editing
  const { setPopup, setSelectedTask } = useOutletContext();
  const handleEdit = (task) => {
    setSelectedTask(task);
    setPopup(true);
  };
  // Format due date
  const formatDate = (dateString) => {
    if (!dateString) return "No due date";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  //handle Delete
  const handleDelete = async (id) => {
    const res = await axios.delete(`${url}/remove/${id}`);
    if (res.data.success) {
      setTask(task.filter((task) => task._id !== id));
      toast.success(res.data.msg);
    } else {
      toast.error(res.data.msg);
    }
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "from-red-500 to-pink-500";
      case "medium":
        return "from-yellow-500 to-orange-500";
      case "low":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-500";
      case "in-progress":
        return "from-blue-500 to-cyan-500";
      case "pending":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };
  //loading if task is empty
  if (task.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-xl text-white/60">Loading tasks...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {task.map((item) => (
        <div
          key={item._id}
          className="group relative rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* Top       month: "short",
Section with Priority Badge and Action Buttons */}
          <div className="flex justify-between items-start mb-4">
            {/* Priority Badge */}
            <div
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityColor(
                item.priority
              )} shadow-lg`}
            ></div>

            {/* Action Buttons */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={() => handleDelete(item._id)}
                className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-400 hover:text-red-300 backdrop-blur-sm border border-red-500/30 hover:border-red-500/50 transition-all duration-200 transform hover:scale-110"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <button
                className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/40 text-purple-400 hover:text-purple-300 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 transform hover:scale-110"
                onClick={() => handleEdit(item)}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Status Badge */}
          <div
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(
              item.status
            )} text-white mb-4`}
          >
            {item.status.replace("-", " ").toUpperCase()}
          </div>

          {/* Task Info */}
          <h1 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
            {item.title}
          </h1>
          <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Priority:</span>
              <span
                className={`font-medium capitalize ${
                  item.priority === "high"
                    ? "text-red-400"
                    : item.priority === "medium"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {item.priority}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Due:</span>
              <span className="text-purple-300 font-medium">
                {formatDate(item.dueDate)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
