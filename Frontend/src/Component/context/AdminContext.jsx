import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

// Extremely simple admin registry persisted in localStorage. Replace with secure backend for production.
const DEFAULT_ADMINS = [
  { username: "admin", password: "admin123", email: "admin@example.com" },
  { username: "editor", password: "editor123", email: "editor@example.com" }
];

export const AdminContext = createContext({
  isAuthenticated: false,
  user: null,
  login: async (_u, _p) => false,
  logout: () => { },
  changePassword: async (_u, _c, _n) => false,
  requestPasswordReset: async (_u, _e) => null,
  resetPassword: async (_t, _n) => false,
});

function readLocalStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}

function writeLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_) { }
}

export function AdminProvider({ children }) {
  const [user, setUser] = useState(() => readLocalStorage("__admin_user__", null));
  const [accounts, setAccounts] = useState(() => {
    const stored = readLocalStorage("__admin_accounts__", null);
    const initial = Array.isArray(stored) && stored.length ? stored : DEFAULT_ADMINS;
    writeLocalStorage("__admin_accounts__", initial);
    return initial;
  });

  useEffect(() => {
    writeLocalStorage("__admin_user__", user);
  }, [user]);

  const login = useCallback(async (username, password) => {
    const found = accounts.find(
      (a) => a.username === username && a.password === password
    );
    if (found) {
      setUser({ username: found.username });
      return true;
    }
    return false;
  }, [accounts]);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const changePassword = useCallback(async (username, currentPassword, newPassword) => {
    const idx = accounts.findIndex((a) => a.username === username);
    if (idx === -1) return false;
    if (accounts[idx].password !== currentPassword) return false;
    const updated = [...accounts];
    updated[idx] = { ...updated[idx], password: newPassword };
    setAccounts(updated);
    writeLocalStorage("__admin_accounts__", updated);
    return true;
  }, [accounts]);

  const requestPasswordReset = useCallback(async (username, email) => {
    const acc = accounts.find((a) => a.username === username && a.email === email);
    if (!acc) return null;
    const token = Math.random().toString(36).slice(2) + Date.now().toString(36);
    const tokens = readLocalStorage("__admin_reset_tokens__", {});
    tokens[token] = { username, expiresAt: Date.now() + 1000 * 60 * 15 };
    writeLocalStorage("__admin_reset_tokens__", tokens);
    return token;
  }, [accounts]);

  const resetPassword = useCallback(async (token, newPassword) => {
    const tokens = readLocalStorage("__admin_reset_tokens__", {});
    const entry = tokens[token];
    if (!entry) return false;
    if (Date.now() > entry.expiresAt) {
      delete tokens[token];
      writeLocalStorage("__admin_reset_tokens__", tokens);
      return false;
    }
    const idx = accounts.findIndex((a) => a.username === entry.username);
    if (idx === -1) return false;
    const updated = [...accounts];
    updated[idx] = { ...updated[idx], password: newPassword };
    setAccounts(updated);
    writeLocalStorage("__admin_accounts__", updated);
    delete tokens[token];
    writeLocalStorage("__admin_reset_tokens__", tokens);
    return true;
  }, [accounts]);

  const value = useMemo(
    () => ({ isAuthenticated: !!user, user, login, logout, changePassword, requestPasswordReset, resetPassword }),
    [user, login, logout, changePassword, requestPasswordReset, resetPassword]
  );

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

// Shared storage keys and helpers used by admin UIs and public pages
export const STORAGE_KEYS = {
  events: "__lab_events__",
  projects: "__lab_projects__",
  researchWork: "__lab_research_work__",
  memberStatusOverrides: "__lab_member_status_overrides__",
};

export function getStoredArray(key, fallback = []) {
  return readLocalStorage(key, fallback);
}

export function setStoredArray(key, arr) {
  writeLocalStorage(key, Array.isArray(arr) ? arr : []);
}

export function getMemberStatusOverrides() {
  const map = readLocalStorage(STORAGE_KEYS.memberStatusOverrides, {});
  return map && typeof map === "object" ? map : {};
}

export function setMemberStatusOverride(memberId, newType) {
  const map = getMemberStatusOverrides();
  map[String(memberId)] = newType; // newType: "current-members" | "alumni" | "interns"
  writeLocalStorage(STORAGE_KEYS.memberStatusOverrides, map);
}


