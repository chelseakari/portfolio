import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./projects.scss";

const items = [
  {
    id: 1,
    title: "Survey Sky",
    img: "survey-sky.png",
    desc: "Survey Sky is a website with a goal of helping users gather responses from a broader, less biased sample. It lets survey creators specify the demographics they want responses from, and has a point system that encourages users to respond to more surveys in order to promote their own surveys more. Built using a MERN stack.",
    hasLink: false,
    link: "",
  },
  {
    id: 2,
    title: "ICS Search Engine",
    img: "search-engine.gif",
    desc: "I created a search engine for websites under UCI's ICS(Information & Computer Sciences) subdomain. I created an inverted index for 55,393 pages, and used components such as tf-idf scores and HTML tag counts (ie: bold/header text = higher rank) to rank search results. Coded all in Python, and web GUI was created using Streamlit.",
    hasLink: false,
    link: "",
  },
  {
    id: 3,
    title: "Solace",
    img: "solace_font.png",
    desc: "Solace is a web app for journaling negative thoughts, where Gemini AI uses cognitive behavioral therapy to guide users toward more balanced, positive way of thinking. I led the frontend development for the project, and we used TypeScript React and MaterialUI. I implemented a feature using MediaRecorder API, so that users can speak to the AI using their voice. Project for VenusHacks 2024.",
    hasLink: true,
    link: "https://devpost.com/software/solace-kysqua",
  },
  {
    id: 4,
    title: "Fabflix",
    img: "fabflix-demo.gif",
    desc: "Fabflix is a web app that allows users to search for movies by title, genre, release year, director, or prefix. Features include user authentication with reCAPTCHA, search auto-complete, movie purchase simulation, and an admin dashboard for adding movies and actors to the database. The project was built using Java, HTML, JavaScript, Tomcat Server, jQuery, Bootstrap, MySQL, AWS EC2, and Kubernetes.",
    hasLink: false,
    link: "",
  },
  {
    id: 5,
    title: "VenusHacks 2025",
    img: "vh-about.png",
    desc: "VenusHacks is the largest women-centric hackathon hosted at UCI every spring. I contributed to the About and FAQ sections of the homepage, using ReactJS and Sass for development. I also integrated Sanity as a content management system to store dynamic content, such as FAQ data, so that updates can be made without modifying the code. Other sections will also utilize Sanity in the future for easier content management.",
    hasLink: true,
    link: "https://venushacks.com/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.hasLink && (
              <button>
                {" "}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  See Project
                </a>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
