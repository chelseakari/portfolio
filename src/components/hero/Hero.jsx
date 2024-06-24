import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>CHELSEA CHEN</motion.h2>
          <motion.h1 variants={textVariants}>Software Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a
              href="https://drive.google.com/file/d/16YMNbusZHdML8i_63X9OJwnmyLE2Xkrw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button variants={textVariants}>
                See My Resume
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Student WebDev Cybersec
      </motion.div>
      <div className="imageContainer">
        <img src="hero.png" />
      </div>
    </div>
  );
};

export default Hero;
