import React from "react";
import MeSvg from "../components/MeSvg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, slider, svgSlide, fade } from "../animations";

const Home = () => {
  return (
    <StyledDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="aboutMe">
        <Hide>
          <motion.h2 variants={slider}>Hi, I'm</motion.h2>
        </Hide>
        <Hide>
          <motion.h1 variants={slider}>Colin Edwards</motion.h1>
        </Hide>
        <Hide>
          <motion.h2 variants={slider} id="desc">
            I am currently working towards becoming a front end developer.
          </motion.h2>
        </Hide>
        <Hide>
          <motion.div variants={slider}>
            <a href="https://github.com/ColinJhEdwards" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/colin-edwards-9a313a140/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </motion.div>
        </Hide>
      </div>
      <motion.div variants={fade} className="svg">
        <MeSvg />
      </motion.div>
    </StyledDiv>
  );
};

const StyledDiv = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  .aboutMe {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2,
    h1 {
      width: 100%;
      font-weight: bold;
    }
    #desc {
      width: 80%;
    }
    a {
      color: #1517bd;
      transition: all ease 0.5s;
      &:hover {
        color: #4a6292;
      }
    }
    i {
      font-size: 5rem;
      margin: 1rem;
    }
  }
  .wave {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  @media (max-width: 1750px) {
    .wave {
      opacity: 0.5;
    }
    .aboutMe h1,
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1350px) {
    .aboutMe {
      align-items: center;
      h1 {
        font-size: 2rem;
      }
      h2 {
        margin: auto;
        text-align: center;
      }
    }
  }
  @media (max-width: 414px) {
    .aboutMe {
      i {
        font-size: 3rem;
      }
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Home;
