import React, { useContext, useEffect, useMemo, useState } from "react";
import { AdminContext, STORAGE_KEYS, getStoredArray, setStoredArray, getMemberStatusOverrides, setMemberStatusOverride } from "../context/AdminContext.jsx";
import ChangePassword from "./ChangePassword.jsx";

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${active ? "bg-blue-600 text-white" : "bg-gray-200"}`}
    >
      {children}
    </button>
  );
}

function EventsManager() {
  const [events, setEvents] = useState(() => getStoredArray(STORAGE_KEYS.events, []));
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => { setStoredArray(STORAGE_KEYS.events, events); }, [events]);

  function addEvent() {
    if (!title || !date) return;
    const newEvent = { id: Date.now(), title, date };
    setEvents([...events, newEvent]);
    setTitle(""); setDate("");
  }
  function removeEvent(id) { setEvents(events.filter(e => e.id !== id)); }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border px-2 py-1 rounded" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border px-2 py-1 rounded" />
        <button onClick={addEvent} className="px-3 py-1 bg-green-600 text-white rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {events.map(e => (
          <li key={e.id} className="flex justify-between items-center bg-blue-200 p-2 rounded border">
            <span>{e.title} — {e.date}</span>
            <button onClick={() => removeEvent(e.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectsManager() {
  const [projects, setProjects] = useState(() => getStoredArray(STORAGE_KEYS.projects, []));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => { setStoredArray(STORAGE_KEYS.projects, projects); }, [projects]);

  function addProject() {
    if (!title || !description) return;
    const newProject = { id: Date.now(), title, description };
    setProjects([...projects, newProject]);
    setTitle(""); setDescription("");
  }
  function removeProject(id) { setProjects(projects.filter(p => p.id !== id)); }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border px-2 py-1 rounded" />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border px-2 py-1 rounded w-80" />
        <button onClick={addProject} className="px-3 py-1 bg-green-600 text-white rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {projects.map(p => (
          <li key={p.id} className="flex justify-between items-center bg-white p-2 rounded border">
            <span className="font-semibold">{p.title}</span>
            <button onClick={() => removeProject(p.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResearchWorkManager() {
  const [researchWork, setResearchWork] = useState(() => getStoredArray(STORAGE_KEYS.researchWork, []));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [researcher, setResearcher] = useState("");

  useEffect(() => { setStoredArray(STORAGE_KEYS.researchWork, researchWork); }, [researchWork]);

  function addResearchWork() {
    if (!title || !description || !researcher) return;
    const newResearch = { id: Date.now(), title, description, researcher };
    setResearchWork([...researchWork, newResearch]);
    setTitle(""); setDescription(""); setResearcher("");
  }
  function removeResearchWork(id) { setResearchWork(researchWork.filter(r => r.id !== id)); }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <input placeholder="Research Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border px-2 py-1 rounded" />
        <input placeholder="Researcher Name" value={researcher} onChange={(e) => setResearcher(e.target.value)} className="border px-2 py-1 rounded" />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border px-2 py-1 rounded w-80" />
        <button onClick={addResearchWork} className="px-3 py-1 bg-green-600 text-white rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {researchWork.map(r => (
          <li key={r.id} className="flex justify-between items-center bg-white p-2 rounded border">
            <div>
              <span className="font-semibold">{r.title}</span>
              <span className="text-gray-600 ml-2">by {r.researcher}</span>
            </div>
            <button onClick={() => removeResearchWork(r.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MembersManager() {
  const overrides = getMemberStatusOverrides();
  const [state, setState] = useState(overrides);

  useEffect(() => {
    // Persist on changes
    Object.entries(state).forEach(([memberId, newType]) => setMemberStatusOverride(memberId, newType));
  }, [state]);

  const [allMembers, setAllMembers] = useState([]);
  useEffect(() => {
    fetch("/members.json").then(r => r.json()).then(data => {
      const withType = [
        ...data.currentMembers.map(m => ({ ...m, type: "current-members" })),
        ...data.alumni.map(m => ({ ...m, type: "alumni" })),
        ...data.interns.map(m => ({ ...m, type: "interns" })),
      ];
      setAllMembers(withType);
    });
  }, []);

  function handleChange(memberId, newType) {
    setState(prev => ({ ...prev, [String(memberId)]: newType }));
  }

  return (
    <div className="space-y-3">
      {allMembers.map(m => (
        <div key={m.id} className="flex items-center gap-3 bg-blue-50 p-2 rounded border">
          <div className="w-40 truncate">{m.name}</div>
          <select value={state[String(m.id)] || m.type} onChange={(e) => handleChange(m.id, e.target.value)} className="border px-2 py-1 rounded">
            <option value="current-members">Current</option>
            <option value="alumni">Alumni</option>
            <option value="interns">Intern</option>
          </select>
        </div>
      ))}
    </div>
  );
}

function AdminDashboard() {
  const { isAuthenticated, user, logout } = useContext(AdminContext);
  const [tab, setTab] = useState("events");

  if (!isAuthenticated) return (
    <div className="min-h-screen flex items-center justify-center text-lg">Unauthorized. Please login.</div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-sky-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto  bg-gradient-to-t from-blue-100 to-sky-100 border-2 border-blue-200 rounded-2xl shadow p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">{user?.username}</span>
            <button onClick={logout} className="px-3 py-1 bg-gray-800 text-white rounded">Logout</button>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <TabButton active={tab === "events"} onClick={() => setTab("events")}>Events</TabButton>
          <TabButton active={tab === "projects"} onClick={() => setTab("projects")}>Projects</TabButton>
          <TabButton active={tab === "research"} onClick={() => setTab("research")}>Research Work</TabButton>
          <TabButton active={tab === "members"} onClick={() => setTab("members")}>Members</TabButton>
          <TabButton active={tab === "security"} onClick={() => setTab("security")}>Change Password</TabButton>
        </div>
        <div>
          {tab === "events" && <EventsManager />}
          {tab === "projects" && <ProjectsManager />}
          {tab === "research" && <ResearchWorkManager />}
          {tab === "members" && <MembersManager />}
          {tab === "security" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;


