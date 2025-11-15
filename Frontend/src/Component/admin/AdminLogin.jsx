import React, { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { AdminContext } from "../context/AdminContext.jsx";

function AdminLogin() {
  const { isAuthenticated, login } = useContext(AdminContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) return <Navigate to="/admin" replace />;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const ok = await login(username.trim(), password);
    if (ok) navigate("/admin", { replace: true });
    else setError("Invalid credentials");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-blue-50 to-sky-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gradient-to-t from-blue-100 to-transparent border-2 border-blue-200 rounded-2xl shadow-xl space-y-4">
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        {error && <p className="text-center text-red-600">{error}</p>}
        <div>
          <label className="block mb-1 text-sm">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded" />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
        <div className="text-sm text-center">
          <Link to="/forgot-password" className="text-blue-700">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;


