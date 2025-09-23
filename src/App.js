import logo from './logo.svg';
import './App.css';
import GH_icon from './icons/github_icon.png'
import LI_icon from "./icons/linkedin_icon.png"
import {Link} from "react-router-dom";
import YH_icon from "./icons/yahoo.png"
import project_icon from "./images/project1.png";
import project_icon2 from "./images/project2.jpg";
import project_icon3 from "./images/project3_finish.png";
import BG_icon5 from "./images/background5.jpg"
import BG_icon4 from "./images/background4.JPG"
import BG_icon3 from "./images/background3.jpg"
import BG_icon2 from "./images/background2.jpg"
import BG_icon1 from "./images/background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import javaIcon from './icons/java.webp';
import jsIcon   from './icons/javascript.webp';
import pyIcon   from './icons/python.png';
import tsIcon   from './icons/typescript.png';
import csIcon   from './icons/csharp.png'; // rename the file
import sqlIcon  from './icons/sql.png';
import reactIcon from "./icons/react.png"
import bsIcon from "./icons/bootstrap.png"
import cssIcon from "./icons/css.png";
import htmlIcon from "./icons/html.png"
import vuejsIcon from "./icons/vuejs.png"
import angularIcon from "./icons/angular.png"
import DjangoIcon from "./icons/django.svg"
import FlaskIcon from "./icons/flask.png"
import SpringIcon from "./icons/spring.svg"
import aspIcon from "./icons/dotnet.png"
import mongodbIcon from "./icons/mongodb.png";
import NodeJsIcon from "./icons/nodejs.png"
import ExperienceEducation from './ExperienceEducation';
import Contact from './Contact';
const SKILLS = [
  { id: 'Java',        img: javaIcon },
  { id: 'JavaScript',  img: jsIcon },
  { id: 'Python',      img: pyIcon },
  { id: 'TypeScript',  img: tsIcon },
  { id: 'C#',          img: csIcon },
  { id: 'SQL',         img: sqlIcon },
];
const SKILLS2 = [
  { id: 'React',          img: reactIcon },
  { id: 'Bootstrap',      img: bsIcon },
  { id: 'CSS',            img: cssIcon },
  { id: 'HTML',           img: htmlIcon },
  { id: 'VueJS',          img: vuejsIcon },
  { id: 'Angular',        img: angularIcon },
];
const SKILLS3 = [
  { id: "Django",  img: DjangoIcon},
  { id: "Flask",   img: FlaskIcon},
  { id: "Spring",  img: SpringIcon},
  { id: "Asp.Net", img: aspIcon},
  {id: "MongoDb",  img: mongodbIcon},
  {id: "NodeJs",   img: NodeJsIcon}
]
const LINKS = [
  {hash: "#home", label:"Home"},
  {hash: "#projects", label:"Projects"},
  {hash: "#skills", label:"Skills"},
  {hash: "#experience", label:"Experience"},
  {hash: "#contact", label:"Contact"},
]

function App() {
  const [active, setActive] = useState(window.location.hash || "#home");
  useEffect(() => {
    const onHash = () => setActive(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if(e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px"}
    );
    document
      .querySelectorAll("section[id]")
      .forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("hashchange", onHash);
      io.disconnect();
    };
  },[])
  return (
    <body>
    <div>
      <header>
        <a href="#" class="logo">Jackson</a>
        <nav>
          {LINKS.map(({ hash, label }) => (
        <a
          key={hash}
          href={hash}
          className={` ${active === hash ? "active" : ""}`}
          onClick={() => setActive(hash)} // immediate visual feedback
        >
          {label}
        </a>
      ))}
        </nav>
      </header>
      <main>
        
        <section id="home" title="Home">
          <div className="home-img">
          </div>
          <div className="home-content">
            <h1>Hi, Its <span>Jackson</span></h1>
            <h3 className="typing-text">I'm a <span></span></h3>
            <p className="text-center">
              I build clean, production‑ready web apps with React, TypeScript, Django/ASP.NET, and Postgres. I care about DX, testing, and shipping features users love.
              I'm a hands-on builder who enjoys shipping end-to-end features: from clean APIs and data models to responsive UIs.
              I value readable code, helpful tests, and thoughtful UX. Outside of coding, I love rewatching old films, eating my clean prepped meals and playing tennis.
            </p>
              <div className="social-icons">
              <a href="https://linkedin.com/in/jackson-lu-570726ab"><FontAwesomeIcon icon={faLinkedin}/></a>
              <a href="https://github.com/nicklez5"><FontAwesomeIcon icon={faGithub}/></a>
              </div>
            <a href="#contact" className="btn">Consult me</a>
          </div>

        </section>

        <section id="projects" title="Projects" className="container-fluid " style={{backgroundImage: `url(${BG_icon5})`}}>
          <h2 className='text-success text-center'>My Projects</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 text-white   mt-5 gap-5 d-flex justify-content-center">

          <div className="col card p-0 border-success " style={{backgroundColor: "#020403"}}>
            <a
              href="https://redditforum.onrender.com"
              className="d-block rounded overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={project_icon}
                alt=""
                className="w-100 h-100 d-block"
                style={{ objectFit: 'cover' }}   // key line
              />
              
            </a>
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Forum Website with real-time chat, notifications and search. </p>
            <hr class="text-success"/>    
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Languages: Typescript, C# </p>
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Frameworks: Asp.Net, React </p>    
          </div>
         <div className="col card p-0 border-success" style={{backgroundColor: "#020403"}}>
            <a
              href="https://canvasfrontend.onrender.com"
              className="d-block  animated_card rounded overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={project_icon2}
                alt=""
                className="w-100 h-100 d-block"
                style={{ objectFit: 'cover' }}   // key line
              />
              
            </a>
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Canvas LMS clone with Courses, modules, assignments, and lecture uploads. </p>
            <hr/>    
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Languages: Python, Javascript </p> 
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Frameworks: Django, React </p> 
            </div>
           <div className="col card p-0 border-success" style={{backgroundColor: "#020403"}}>
            <a
            href="https://spotifyfrontend-3p4q.onrender.com"
            className="d-block shadow rounded overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={project_icon3}
              alt="Spotify project preview"
              className="w-100 h-100 d-block"
              style={{ objectFit: 'cover' }}
            />
          </a>
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Spotify Application (WIP)</p>
            <hr/>    
            <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Languages: Java, Typescript </p> 
             <p className="d-flex text-center justify-content-center align-items-center text-success font-monospace">Framework: Vue.js, Spring boot </p> 
          </div>
          </div>

        </section>
        <section id="skills" title="Skills" style={{backgroundImage: `url(${BG_icon1})`}}>
          <div className="container">
            <h1 class="text-success text-center fs-1 fw-bold text-decoration-underline ">My Skills</h1>
            <div class="mt-1 p-2" >
              <h2 class="text-center fs-4 mb-3 text-white">Programming Languages</h2>
               <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
                {SKILLS.map(({ id, img }) => (
                  <div className="col" key={id}>
                    <div className="skill-card border rounded-4 bg-light-subtle text-center h-100">
                      {/* logo */}
                      <div className="p-3">
                        <img
                          src={img}
                          alt={`${id} logo`}
                          className="img-fluid d-block mx-auto"
                          style={{ height: 56, objectFit: 'contain' }}
                        />
                      </div>
                      {/* label */}
                      <div className="pb-3 px-2">
                        <span className="fw-semibold text-black">{id}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h2 class="text-center fs-4 mb-3 text-white mt-3">Frontend</h2>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
                {SKILLS2.map(({ id, img }) => (
                  <div className="col" key={id}>
                    <div className="skill-card border rounded-4 bg-light-subtle text-center h-100">
                      {/* logo */}
                      <div className="p-3">
                        <img
                          src={img}
                          alt={`${id} logo`}
                          className="img-fluid d-block mx-auto"
                          style={{ height: 56, objectFit: 'contain' }}
                        />
                      </div>
                      {/* label */}
                      <div className="pb-3 px-2">
                        <span className="fw-semibold text-black" >{id}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-center fs-4 mb-3 text-white mt-3">Backend</h2>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
                {SKILLS3.map(({ id, img }) => (
                  <div className="col" key={id}>
                    <div className="skill-card border rounded-4 bg-light-subtle text-center h-100">
                      {/* logo */}
                      <div className="p-3">
                        <img
                          src={img}
                          alt={`${id} logo`}
                          className="img-fluid d-block mx-auto"
                          style={{ height: 56, objectFit: 'contain' }}
                        />
                      </div>
                      {/* label */}
                      <div className="pb-3 px-2">
                        <span className="fw-semibold text-black" >{id}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>
        <section id="experience" title="Experience" style={{backgroundImage: `url(${BG_icon3})`}}>
          <div className="">
            <ExperienceEducation/>
          </div>

         
        </section>
        <section id="contact" title="Contact" style={{backgroundImage: `url(${BG_icon4})`}}>
          <Contact/>

          <p></p>
        </section>
      </main>
    </div>
    </body>
  );
}

export default App;
