import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      sttaggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    const handleFocus = () => {
      document.documentElement.style.scrollSnapType = 'none';
    };
    const handleBlur = () => {
      document.documentElement.style.scrollSnapType = 'y mandatory';
    };

    const inputs = formRef.current.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vk27chx", "template_dktwufb", formRef.current, {
        publicKey: "zeftU8Z5wrRtD-6mv",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>chelseachen211 [at] gmail [dot] com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Based In</h2>
          <span>Irvine, California USA</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1-8zero2four7three0six0one</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
