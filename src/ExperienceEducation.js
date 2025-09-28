// ExperienceEducation.jsx
import { useState } from "react";
import summitworksIcon from "./icons/summitworks.jpg"
import ucrIcon from "./icons/ucr.png"
import uberIcon from "./images/images3.png"
import csulaIcon from "./icons/csula_icon.png"
import oneSkyIcon from "./icons/images.jpg"
const EXPERIENCE = [
  {
    company: "Opportunity Overview",
    role: "Backend Developer",
    location: "Remote",
    start: "Sep 2025",
    end: "Present",
    bullets: [
      "Design & document REST APIs in Node.js (Express) for daily impact metrics, partner/testimonial feeds, blog retrieval, and user action history; OpenAPI 3.0/Swagger docs, Joi/Zod validation, Supertest/Jest contract tests, rate limiting and ETag/Cache-Control.",
      "Utilized PostgreSQL (Prisma/TypeORM/Sequelize): normalized schemas for EcoJourneys, Refills, Cleanups, Challenges with FKs, CHECK constraints, partial/BTREE/GiST indexes, and JSONB for flexible payloads; Liquibase/Prisma Migrate for migrations.",
      "Implemented Quizzes, campaigns, report payloads: versioned quiz/campaign models (A/B variants), enum types, JSON schema validation, and content versioning; pre-computed materialized views/cached aggregates for reports.",
    ],
    tech: ["Node.JS", "Express"],
    logo: oneSkyIcon,
  },
  {
    company: "Uber Eats",
    role: "Delivery Driver & Terminal caregiver",
    location: "Los Angeles,CA",
    start: "Dec 2021",
    end: "Sep 2024",
    bullets: [
      "Completed time-sensitive pickups and contactless deliveries, managing routing, customer communication, and cashless transactions to meet ETA targets.",
      "Provided day-to-day care for a terminally ill relative, coordinating appointments, medications, and household needs.",
    ],
    tech: [],
    logo: uberIcon,
  },
  {
    company: "Summitworks",
    role: "Software Developer Trainee",
    location: "New Jersey, NJ",
    start: "Jan. 2021",
    end: "Aug. 2021",
    bullets: [
      "Designed and crafted a user-friendly Angular application, ensuring an intuitive and engaging user experience.",
      "Developed the backend using Django Rest Framework, streamlining data handling and enabling efficient data exchange with the front end.",
      "Engineered a robust RESTful API that seamlessly connected the front end and backend, facilitating data transfer and user interactions.",
      "Implemented features, interactions, and dynamic content that enhanced the user experience, making the application highly responsive and user-friendly.",
      "Unit Testing and QA: Conducted thorough unit testing and quality assurance processes to guarantee the application's reliability and performance.",
      "Collaborated closely with full-stack developers and project stakeholders to ensure alignment with project goals and client expectations.",
    ],
    tech: [
      "Django",
      "Javascript",
      "Python",
      "HTML",
      "CSS",
      "Docker",
      "AWS",
      "Angular",
    ],
    logo: summitworksIcon,
  },
];

const EDUCATION = [
  {
    company: "Cal State University, Los Angeles",
    role: "M.S. Computer Science",
    location: "Los Angeles, CA",
    start: "2026",
    end: "2027",
    bullets: ["GPA 3.4", "Coursework: Advanced Machine Learning"],
    tech: ["Python"],
    logo: csulaIcon,
  },
  {
    company: "University of California, Riverside",
    role: "B.S. Computer Science",
    location: "Riverside, CA",
    start: "2018",
    end: "2020",
    bullets: [
      "GPA 3.3",
      "Coursework: Algorithms, DBs, Networks, Artificial Intelligence, Machine Learning, Intermediate Embedded Systems",
    ],
    tech: ["C++", "Java", "SQL"],
    logo: ucrIcon,
  },
];

export default function ExperienceEducation() {
  const [tab, setTab] = useState("exp");
  const items = tab === "exp" ? EXPERIENCE : EDUCATION;

  return (
    <section className="container py-5" style={{ maxWidth: 980 }}>
      <h2 className="display-5 fw-bold mb-3 text-white">Experience</h2>

      {/* Tabs */}
      <div className="btn-group mb-4">
        <button
          className={`btn btn-sm ${tab === "exp" ? "btn-light" : "btn-outline-light"}`}
          onClick={() => setTab("exp")}
        >
          Experience
        </button>
        <button
          className={`btn btn-sm ${tab === "edu" ? "btn-light" : "btn-outline-light"}`}
          onClick={() => setTab("edu")}
        >
          Education
        </button>
      </div>

      {/* Timeline */}
      <div className="timeline d-flex text-start">
        <ul className="timeline-list list-unstyled m-0 p-0">
          {items.map((it, i) => (
            <li className="timeline-item" key={i}>
              <div className="timeline-dot">
                {it.logo ? <img src={it.logo} alt="" /> : <span className="dot-fallback" />}
              </div>

              <div className="timeline-card">
                <h5 className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                  <div>
                    <div className="h5 m-0 fw-semibold">{it.company}</div>
                    <div className="text-white-50 small">
                      {it.role} • {it.location}
                    </div>
                  </div>
                  <div className="text-white-50 small">
                    {it.start} – {it.end}
                  </div>
                </h5>

                <ul className="mb-2 ps-3">
                  {it.bullets.map((b, j) => (
                    <li key={j} className="mb-1">{b}</li>
                  ))}
                </ul>

                <div className="badges">
                  {it.tech.map(t => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
