
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
    resumeUrl: "/resume/resume.pdf",
  },
  projects: [
    {
      title: "Forum & Chat App",
      year: "2025",
      description:
        "Reddit‑style forums with real‑time chat, notifications, and search. JWT auth, RBAC, S3 uploads, Dockerized dev. Clean architecture API supporting posts,nested replies, likes, and activity feeds with EF Core.",
      tech: ["React", "TypeScript","C#","ASP.NET Core","EF Core","JWT", "PostgreSQL", "WebSocket", "S3"],
      live: "https://redditforum.onrender.com",
      code: "https://github.com/nicklez5/RedditForum",
    },
    {
      title: "Canvas LMS Clone",
      year: "2024",
      description:
        "Courses, modules, assignments, and lecture uploads. Signals propagate edits across related models.",
      tech: ["Django", "DRF", "React", "Postgres", "S3"],
      live: "https://canvasfrontend.onrender.com",
      code: "https://github.com/nicklez5/CanvasfrontEnd",
    },
    {
      title: "Music Streaming Playlist App",
      year: "2024",
      description:
        "Song search, drag and drop queing and playback controls using Java FX, playlist management and real‑time audio streaming",
      tech: ["Java", "SpringBoot", "React", "SQLite", "S3"],
      code: "https://github.com/nicklez5/spotify_frontendvol2",
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "C#", "Python", "SQL","Java"],
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
    {
      company: "Summitworks Technologies",
      role: "Software Developer Intern",
      date: "2020–2021",
      bullets: [
        "Gained hands on experience with Django Rest Framework, templating and relational database design",
        "Built a Django-based donation platform in a small team, implementing authentication, admin dashboards and full CRUD features.",
        "Trained in Agile Workflows including daily standups",
      ],
    },
  ],
  education: {
    school: "University of California, Riverside", 
    degree: "Bachelor Of Science in Computer Science",
    date: "2018 -2020",
  },
};
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium opacity-90">
      {children}
    </span>
  );
}
function NavLink({ href, children }) {
  return (
    <a href={href} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
      {children}
    </a>
  );
}
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-cover from-white to-slate-50 dark:from-slate-850 dark:to-slate-900 text-slate-900 dark:text-slate-100"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/thumb-1920-1293302.jpg)` }}>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-bold tracking-tight">
            <a href="#home" className="text-lg">{profile.name}</a>
            <span className="mx-2 opacity-50">•</span>
            <span className="text-sm opacity-80">{profile.title}</span>
          </div>
          <nav className="hidden sm:flex items-center text-sm">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <a
              className="ml-3 inline-flex items-center rounded-xl border px-3 py-2 text-sm font-medium hover:shadow"
              href={`mailto:${profile.links.email}`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="mx-auto max-w-6xl px-4">
        <section className="py-16 sm:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white ">
                Hi, I'm {profile.name}.<br />
                <span className="opacity-80">{profile.title}</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg opacity-100 max-w-2xl text-white font-semibold">
                {profile.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-white ">
                <a className="rounded-xl border px-4 py-2 text-md font-medium hover:shadow" href="#projects">
                  See my projects
                </a>
                {profile.links.github && (
                  <a className="rounded-xl border px-4 py-2 text-md font-medium hover:shadow" href={profile.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a className="rounded-xl border px-4 py-2 text-md font-medium hover:shadow" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
                {profile.links.resumeUrl && (
                  <a className="rounded-xl border px-4 py-2 text-md font-medium hover:shadow" href={profile.links.resumeUrl} target="_blank" rel="noreferrer">
                    Download Résumé
                  </a>
                )}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[4/3] rounded-2xl border bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-inner flex items-center justify-center text-sm opacity-80">
                <div className="text-center p-6">
                  <div className="text-xs uppercase tracking-widest opacity-60">Currently</div>
                  <div className="mt-2 font-semibold">Open to Junior Developer roles</div>
                  <div className="mt-2 opacity-80">{profile.location}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.projects.map((p, idx) => (
              <article key={p.title + idx} className="rounded-2xl border bg-white/70 dark:bg-slate-900/60 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <span className="text-xs opacity-60">{p.year}</span>
                  </div>
                  <p className="mt-2 text-sm opacity-90 min-h-[3.5rem]">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    {p.live && (
                      <a className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:shadow" href={p.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                    {p.code && (
                      <a className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:shadow" href={p.code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border p-5 bg-white/70 dark:bg-slate-900/60">
                <div className="text-sm font-semibold capitalize">{group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <Badge key={it}>{it}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <ol className="relative border-s-l bg-inherit">
            {profile.experience.map((x, i) => (
              <li key={x.company + i} className="ms-6 py-4">
                <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full border bg-white dark:bg-slate-900"></span>
                <div className="flex flex-wrap items-center gap-x-3">
                  <div className="font-semibold">{x.role}</div>
                  <div className="opacity-100 text-lg ">@ {x.company}</div>
                  <div className="ms-auto text-sm opacity-70">{x.date}</div>
                </div>
                <ul className="mt-2 list-disc ps-5 text-sm opacity-90 space-y-1">
                  {x.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>
        <Section id="education" title="Education">
        <div className="rounded-2xl border p-6 bg-white/70 dark:bg-slate-900/60">
          <div className="flex flex-wrap items-center gap-x-3">
            <div className="font-semibold">{profile.education.school}</div>
            <div className="opacity-70">{profile.education.degree}</div>
            <div className="ms-auto text-sm opacity-70">{profile.education.date}</div>
          </div>
          {profile.education.highlights && (
            <ul className="mt-2 list-disc ps-5 text-sm opacity-90 space-y-1">
              {profile.education.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          )}
        </div>
      </Section>
        {/* About */}
        <Section id="about" title="About">
          <div className="rounded-2xl border p-6 bg-white/70 dark:bg-slate-900/60">
            <p className="opacity-90">
              I'm a hands-on builder who enjoys shipping end-to-end features: from clean APIs and data models to responsive UIs.
              I value readable code, helpful tests, and thoughtful UX. Outside of coding, I love rewatching old films, eating my clean prepped meals and playing tennis.
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border p-6 flex flex-wrap gap-3 bg-white/70 dark:bg-slate-900/60">
            <a className="rounded-xl border px-4 py-2 text-sm font-medium hover:shadow" href={`mailto:${profile.links.email}`}>Email</a>
            <a className="rounded-xl border px-4 py-2 text-sm font-medium hover:shadow" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="rounded-xl border px-4 py-2 text-sm font-medium hover:shadow" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {profile.links.resumeUrl && (
              <a className="rounded-xl border px-4 py-2 text-sm font-medium hover:shadow" href={profile.links.resumeUrl} target="_blank" rel="noreferrer">Résumé</a>
            )}
          </div>
        </Section>
      </main>

      <footer className="py-10 text-center opacity-70 text-sm">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
      </footer>
    </div>
  );
}