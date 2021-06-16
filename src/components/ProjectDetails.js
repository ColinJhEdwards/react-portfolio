import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../animations";

const ProjectDetails = ({ title, description, img }) => {
  console.log(img);
  return (
    <CardShadow
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Details>
        <h2>{title}</h2>
        <p>{description}</p>
        {img.map((image) => (
          <img src={image} alt="project" />
        ))}
      </Details>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  margin: 2rem 0rem;
  img {
    width: 100%;
  }
`;

export default ProjectDetails;
