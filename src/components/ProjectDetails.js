import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, fade } from "../animations";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";

const ProjectDetails = ({ title, description, img, mImg, key }) => {
  return (
    <Section>
      <Details
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h2 variants={fade}>{title}</motion.h2>
        <motion.p variants={fade}>{description}</motion.p>
        {img.map((image) => (
          <motion.img variants={fade} src={image} alt="project" key={title} />
        ))}

        {mImg.map((image) => (
          <img className="mobile-img" src={image} alt="mobile" key={title} />
        ))}

        <Link to="/projects">
          <button title="Back">
            <i className="fas fa-chevron-left"></i>
          </button>
        </Link>
      </Details>
      <ScrollTop />
    </Section>
  );
};
const Section = styled.div`
  min-height: 90vh;
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  color: white;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
    left: 0;
    background: gray;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 360px;
    transition: all ease 0.5s;
    &:hover {
      color: black;
    }
  }
  @media (max-width: 414px) {
    text-align: center;
    padding: 2rem 1rem;
    p {
      width: 100%;
    }
    .mobile-img {
      width: 225px;
      height: 440px;
    }
  }
`;

export default ProjectDetails;
