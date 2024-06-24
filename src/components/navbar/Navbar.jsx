import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  const motionProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span {...motionProps}>Chelsea Chen</motion.span>
        <div className="social">
          <motion.a
            href="https://www.linkedin.com/in/chelseaachen/"
            target="_blank"
            rel="noopener noreferrer"
            {...motionProps}
          >
            <img src="linkedin.png" alt="" />
          </motion.a>
          <motion.a
            href="https://github.com/chelseakari"
            target="_blank"
            rel="noopener noreferrer"
            {...motionProps}
          >
            <img src="github-mark-white.png" alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
