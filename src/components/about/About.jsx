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
          I am interested in web dev <br />
          and cybersecurity.
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
            <li>GPA: 3.894</li>
            <li>Expected Graduation: March 2025</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Programming Languages</h2>
          <ul>
            <li>Python</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>C</li>
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
            <li>SWE Intern at Kavayah Cloud for Summer 2023</li>
            <li>Infra team member at Cyber@UCI</li>
            <li>General member of WICS at UCI</li>
            <li>Undergraduate/Undeclared Mentor (2022~2023)</li>
            <li>Learning Assistant for Discrete Math (Spring 2023)</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
