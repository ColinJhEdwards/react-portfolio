import React, { useState } from "react";
import { motion } from "framer-motion";

// the children prop gives us access to the children elements that the toggle component is wrapped around
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div onClick={() => setToggle(!toggle)} layout>
      <motion.div className="words">
        <h1>{title}</h1>
        <h1>
          <span>{toggle ? "-" : "+"}</span>
        </h1>
      </motion.div>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
