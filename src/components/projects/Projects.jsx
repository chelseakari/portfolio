import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./projects.scss";

const items = [
  {
    id: 1,
    title: "Survey Sky",
    img: "survey-sky.png",
    desc: "Survey Sky is a website with a goal of helping users gather responses from a broader, less biased sample. It lets survey creators specify the demographics they want responses from, and has a point system that encourages users to respond to more surveys in order to promote their own surveys more.",
    hasLink: true,
    link: "https://surveysky.net/",
  },
  {
    id: 2,
    title: "ICS Search Engine",
    img: "search-result.png",
    desc: "I created a search engine for websites under UCI's ICS(Information & Computer Sciences) subdomain. I created an inverted index for 55,393 pages, and used components such as tf-idf scores and HTML tag counts (ie: bold/header text = higher rank) to rank search results. Coded all in Python, and web GUI was created using Streamlit.",
    hasLink: false,
    link: "",
  },
  {
    id: 3,
    title: "Solace",
    img: "solace_font.png",
    desc: "Solace is a web app for journaling negative thoughts, where Gemini AI uses cognitive behavioral therapy to guide users toward more balanced, positive way of thinking. I led the frontend development for the project, and we used TypeScript React and MaterialUI. I implemented a feature using MediaRecorder API, so that  users can speak to the AI using their voice. Project for VenusHacks 2024.",
    hasLink: true,
    link: "https://devpost.com/software/solace-kysqua",
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
