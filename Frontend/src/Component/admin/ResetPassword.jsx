import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext.jsx";

function ResetPassword() {
  const { resetPassword } = useContext(AdminContext);
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const ok = await resetPassword(token.trim(), newPassword);
    setMessage(ok ? "Password reset successful." : "Invalid or expired token.");
    if (ok) { setToken(""); setNewPassword(""); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100">
      <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow p-6 w-full max-w-md space-y-3">
        <h1 className="text-xl font-semibold">Reset Password</h1>
        <div>
          <label className="block text-sm mb-1">Reset Token</label>
          <input className="border px-3 py-2 rounded w-full" value={token} onChange={(e) => setToken(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">New Password</label>
          <input type="password" className="border px-3 py-2 rounded w-full" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Reset</button>
        {message && <p className="text-sm">{message}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;




