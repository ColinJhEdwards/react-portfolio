import React from "react";
import MeSvg from "../components/MeSvg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, slider, svgSlide } from "../animations";

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
          <motion.h2 variants={slider}>
            I am currently working towards becoming a front end developer.
          </motion.h2>
        </Hide>
        <Hide>
          <motion.div variants={slider}>
            <a href="https://github.com/ColinJhEdwards" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/colin-edwards" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </motion.div>
        </Hide>
      </div>
      <motion.div variants={svgSlide} className="svg">
        <MeSvg />
      </motion.div>
      <div className="wave">
        <svg
          width="999"
          height="1080"
          viewBox="0 0 999 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="splash2 1" clip-path="url(#clip0)">
            <g id="Group">
              <path
                id="Vector"
                d="M306.387 -31.5005L881.887 -31.5004C998.887 -31.5003 998.887 -151.221 998.887 -10.0006V480.499L1285 742C1285 1006.56 591.614 1090.5 247 949C-32.5001 816.5 -43.0422 593.464 124.888 265.999C284.887 -46.0003 206.554 -15.0005 306.387 -31.5005Z"
                fill="url(#paint0_linear)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1038.06"
              y1="-8.72158"
              x2="223.558"
              y2="689.278"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DBE7DA" />
              <stop offset="1" stop-color="#142850" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="999" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
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
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      width: 80%;
    }
    a {
      color: #142850;
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
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Home;
