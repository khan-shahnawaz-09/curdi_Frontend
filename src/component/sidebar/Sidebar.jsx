import { Bot, History, Settings, Sparkles } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-purple-500/20 flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          AI Tools
        </h2>
      </div>

      {/* Options */}
      <nav className="flex flex-col gap-2">
        <button className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 text-white transition-all duration-300 border border-transparent hover:border-purple-500/30">
          <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            Generate Task
          </span>
        </button>
        <button className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 text-white transition-all duration-300 border border-transparent hover:border-purple-500/30">
          <History className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            Suggestions
          </span>
        </button>
        <button className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 text-white transition-all duration-300 border border-transparent hover:border-purple-500/30">
          <Settings className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            Settings
          </span>
        </button>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 border-t border-purple-500/20">
        <p className="text-xs text-gray-400 text-center">© 2025 CURDY TASK</p>
      </div>
    </aside>
  );
};

export default Sidebar;
