import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, fade } from "../animations";
import { Link } from "react-router-dom";

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
          <motion.h2 variants={fade}>{title}</motion.h2>
          <motion.p variants={fade}>{description}</motion.p>
          {img.map((image) => (
            <motion.img variants={fade} src={image} alt="project" />
          ))}

          {mImg.map((image) => (
            <img className="mobile-img" src={image} alt="mobile" />
          ))}

          <Link to="/projects">
            <button>X</button>
          </Link>
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
  h2 {
    font-size: 3rem;
  }
  p {
    text-align: center;
    width: 70%;
  }
  img {
    width: 100%;
    margin: 2rem 0rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
  }
  .mobile-img {
    width: 375px;
    height: 812px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    color: black;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom-left-radius: 15px;
    transition: all ease 0.5s;
    &:hover {
      color: #ffffff;
      background: #bd0000;
    }
  }
  @media (max-width: 414px) {
    text-align: center;
    padding: 2rem 1rem;
    .mobile-img {
      width: 225px;
      height: 440px;
    }
  }
`;

export default ProjectDetails;
