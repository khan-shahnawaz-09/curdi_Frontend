
import { Calendar, Search } from "lucide-react";

const Filter = ({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  sort,
  setSort,
}) => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="" className="text-gray-800">
            All Status
          </option>
          <option value="pending" className="text-gray-800">
            Pending
          </option>
          <option value="in_progress" className="text-gray-800">
            In Progress
          </option>
          <option value="completed" className="text-gray-800">
            Completed
          </option>
        </select>
        <select
          className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="" className="text-gray-800">
            All Priority
          </option>
          <option value="low" className="text-gray-800">
            Low
          </option>
          <option value="medium" className="text-gray-800">
            Medium
          </option>
          <option value="high" className="text-gray-800">
            High
          </option>
        </select>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select
            className="pl-10 pr-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          >
            <option value="" className="text-gray-800">
              Sort By
            </option>
            <option value="dueDate" className="text-gray-800">
              Due Date
            </option>
            <option value="createdAt" className="text-gray-800">
              Created At
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filter;
