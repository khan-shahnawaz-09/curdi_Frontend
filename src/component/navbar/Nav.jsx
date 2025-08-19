import React from "react";
import { Bot, Plus } from "lucide-react";
const Nav = ({ setPopup }) => {
  return (
    <nav className="w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl px-6 py-4 flex items-center justify-between border-b border-purple-500/20">
      {/* Logo / Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          CURDY <span className="text-white/60">TASK</span>
        </h1>
      </div>

      {/* Actions */}
      <button
        onClick={() => setPopup(true)}
        className="group px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
      >
        <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        Add Task
      </button>
    </nav>
  );
};

export default Nav;
