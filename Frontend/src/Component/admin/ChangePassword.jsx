import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext.jsx";

function ChangePassword() {
  const { user, changePassword } = useContext(AdminContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const ok = await changePassword(user?.username, currentPassword, newPassword);
    setMessage(ok ? "Password updated." : "Invalid current password.");
    if (ok) { setCurrentPassword(""); setNewPassword(""); }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-sm mb-1">Current Password</label>
        <input type="password" className="border px-3 py-2 rounded w-full" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm mb-1">New Password</label>
        <input type="password" className="border px-3 py-2 rounded w-full" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Update</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}

export default ChangePassword;




