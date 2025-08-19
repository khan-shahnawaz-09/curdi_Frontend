import { useState } from "react";
import Nav from "./component/navbar/Nav";
import Sidebar from "./component/sidebar/Sidebar";
import AddTaskPopup from "./component/AddTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import styles
import Taskpage from "./component/main/Taskpage";
import { Outlet } from "react-router-dom";

const App = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <Nav setPopup={setPopup} />

      <div className="flex flex-1">
        {/* Sidebar... */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet></Outlet>
        </main>
      </div>

      {/* Popup */}
      {popup && <AddTaskPopup onClose={() => setPopup(false)} />}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "rgba(15, 23, 42, 0.9)", // slate-900 with transparency
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(147, 51, 234, 0.3)", // purple border
          borderRadius: "16px",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(147, 51, 234, 0.1)",
        }}
        progressStyle={{
          background: "linear-gradient(90deg, #a855f7, #ec4899)", // purple to pink gradient
          height: "3px",
        }}
        closeButtonStyle={{
          color: "rgba(255, 255, 255, 0.7)",
          opacity: 0.7,
        }}
      />
    </div>
  );
};

export default App;
