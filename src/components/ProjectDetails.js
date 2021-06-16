import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../animations";

const ProjectDetails = ({ title, description, img, mImg }) => {
  console.log(img);
  return (
    <Section>
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

          {mImg.map((image) => (
            <img className="mobile-img" src={image} alt="mobile" />
          ))}
        </Details>
      </CardShadow>
    </Section>
  );
};
const Section = styled.div`
  min-height: 90vh;
`;

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
  margin: 4rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    margin: 2rem 0rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .mobile-img {
    width: 375px;
    height: 812px;
  }
`;

export default ProjectDetails;
