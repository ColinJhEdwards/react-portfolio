import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div onClick={() => setToggle(!toggle)}>
      <motion.div layout className="words">
        <h1>
          {title} <span>{toggle ? "-" : "+"}</span>
        </h1>
      </motion.div>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
