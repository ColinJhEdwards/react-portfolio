import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectDetails = ({ title, description, img }) => {
  return (
    <CardShadow>
      <Details>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={img} alt="image-of-project" />
      </Details>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
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
