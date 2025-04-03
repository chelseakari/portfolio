import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./about.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          More details are in my resume & LinkedIn.
          <br />
          Scroll back up to see.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#C766BB" }}>About</motion.b> Me
          </h1>
        </div>
        <div className="title">
          <h1>
            and My <motion.b whileHover={{ color: "#C766BB" }}>Skills</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Education</h2>
          <ul>
            <li>4th Year Computer Science student at UC Irvine</li>
            <li>Specializing in Information</li>
            <li>GPA: 3.9</li>
            <li>Expected Graduation: June 2025</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Programming Languages</h2>
          <ul>
            <li>Python</li>
            <li>TypeScript & JavaScript</li>
            <li>Java</li>
            <li>C & C++</li>
            <li>SQL</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Frameworks & More</h2>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>MaterialUI</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Experience & Activities</h2>
          <ul>
            <li>Marketing Organizer & Web Dev for VenusHacks</li>
            <li>Grader for Algorithm Design & Analysis class</li>
            <li>SWE Volunteer for Survey Sky</li>
            <li>SWE Intern at Kavayah Cloud</li>
            <li>Learning Assistant for Discrete Math</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
