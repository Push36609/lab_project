import React from 'react'
import styles from './Event.module.css';

const events = [
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
  return (
    <div className={styles.EventPage}>
      <div className={styles.EventContainer}>
        <h2>Upcoming Events</h2>
        <ul className={styles.EventList}>
          {events.map(event => (
            <li
              key={event.id}
              className={styles.EventItem}
            >
              <span className={styles.EventTitle}>{event.title}</span>
              <span className={styles.EventDate}>
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




