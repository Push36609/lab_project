import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext.jsx";

function ForgotPassword() {
  const { requestPasswordReset } = useContext(AdminContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const t = await requestPasswordReset(username.trim(), email.trim());
    if (t) {
      setToken(t);
      setMessage("Reset token generated (demo): copy it and use on reset page.");
    } else {
      setMessage("Account not found for provided username/email.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100">
      <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow p-6 w-full max-w-md space-y-3">
        <h1 className="text-xl font-semibold">Forgot Password</h1>
        <div>
          <label className="block text-sm mb-1">Username</label>
          <input className="border px-3 py-2 rounded w-full" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="border px-3 py-2 rounded w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Request Reset</button>
        {message && <p className="text-sm">{message}</p>}
        {token && (
          <div className="text-sm break-all"><strong>Token:</strong> {token}</div>
        )}
      </form>
    </div>
  );
}

export default ForgotPassword;




