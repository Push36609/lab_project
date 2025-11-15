import React, { useState, useEffect } from 'react'
import { getStoredArray, STORAGE_KEYS } from './context/AdminContext'

// Default events if none are added by admin
const defaultEvents = [
  { id: 1, title: "Annual Science Conference", date: "2025-09-12" },
  { id: 2, title: "Guest Lecture: AI in Education", date: "2025-10-05" },
  { id: 3, title: "Alumni Meet & Networking", date: "2025-11-20" },
  { id: 4, title: "Winter Internship Orientation", date: "2025-12-01" },
  { id: 5, title: "Spring Career Fair", date: "2026-03-15" },
  { id: 6, title: "Summer Coding Bootcamp", date: "2026-06-10" },
  { id: 7, title: "Fall Design Workshop", date: "2026-09-10" },
  { id: 8, title: "Winter Coding Bootcamp", date: "2026-12-10" },
  { id: 9, title: "Spring Hackathon", date: "2027-03-20" },
  { id: 10, title: "AI & ML Symposium", date: "2027-06-15" }
];

export default function Event() {
  const [events, setEvents] = useState(defaultEvents);

  useEffect(() => {
    // Load admin-managed events from localStorage
    const adminEvents = getStoredArray(STORAGE_KEYS.events, []);
    if (adminEvents.length > 0) {
      setEvents(adminEvents);
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-sky-100 mt-16 pt-4 h-screen">
      <div className="pl-16 h-screen m-auto items-center ml-[10%]">
        <h2 className='text-4xl font-bold m-6 mt-6'>Upcoming Events</h2>
        <ul className="list-none p-0 max-w-[90%] items-center">
          {events.map(event => (
            <li
              key={event.id}
              className="flex justify-between items-center p-2.5 bg-white rounded-lg border-1 border-white mb-2.5"
            >
              <span className="font-bold">{event.title}</span>
              <span className="text-gray-400">
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}




