import logo from './logo.svg';
import './App.css';
const profile = {
  name: "Jackson Lu",
  title: "Junior Full‑Stack Developer",
  location: "Los Angeles, CA",
  summary:
    "I build clean, production‑ready web apps with React, TypeScript, Django/ASP.NET, and Postgres. I care about UX,UI, testing and shipping features users love .",
  links: {
    github: "https://github.com/nicklez5",
    linkedin: "https://www.linkedin.com/in/jackson-lu-570726ab/",
    email: "jackson2k@yahoo.com",
    resumeUrl: "https://yourdomain.com/resume.pdf",
  },
  projects: [
    {
      title: "Forum & Chat App",
      year: "2025",
      description:
        "Reddit‑style forums with real‑time chat, notifications, and search. JWT auth, RBAC, S3 uploads, Dockerized dev.",
      tech: ["React", "TypeScript", "Django/DRF", "PostgreSQL", "WebSocket", "S3"],
      live: "https://your-forum.example.com",
      code: "https://github.com/yourhandle/forum-chat",
    },
    {
      title: "ASP.NET PostService API",
      year: "2025",
      description:
        "Clean architecture API supporting posts, nested replies, likes, and activity feeds with EF Core.",
      tech: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL", "JWT"],
      live: "",
      code: "https://github.com/yourhandle/postservice",
    },
    {
      title: "Canvas LMS Clone",
      year: "2024",
      description:
        "Courses, modules, assignments, and lecture uploads. Signals propagate edits across related models.",
      tech: ["Django", "DRF", "React", "Postgres", "S3"],
      live: "",
      code: "https://github.com/yourhandle/canvas-clone",
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "C#", "Python", "SQL"],
    frontend: ["React", "Redux/Easy Peasy", "Vite/CRA", "Bootstrap/Tailwind"],
    backend: ["Django/DRF", "ASP.NET Core", "Node/Express"],
    data: ["PostgreSQL", "SQLite", "EF Core", "Django ORM"],
    devops: ["Docker", "Render", "Railway", "AWS S3"],
    testing: ["Jest", "React Testing Library", "xUnit"],
  },
  experience: [
    {
      company: "Independent Projects",
      role: "Junior Full‑Stack Developer",
      date: "2024–2025",
      bullets: [
        "Built and deployed full‑stack apps with auth, file uploads, and real‑time features.",
        "Set up CI, Dockerized services, and configured S3 for static/media assets.",
        "Collaborated with peers for code reviews and feature planning.",
      ],
    },
  ],
  education: {
    school: "Your University or Program",
    degree: "B.S. / Bootcamp / Self‑Taught Track",
    date: "Year",
  },
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
