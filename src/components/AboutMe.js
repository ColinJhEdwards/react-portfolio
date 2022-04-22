import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <StyledMe className="aboutme">
      <div className="text">
        <header>
          <h2>When I'm not coding you can find me playing guitar</h2>
        </header>
        <div className="guitarVideo">
          <iframe
            src="https://www.youtube.com/embed/3Fxx18mEK_o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/gu3VyJkOCyQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </StyledMe>
  );
};

const StyledMe = styled(motion.div)`
  min-height: 70vh;
  width: 90%;
  margin: auto;
  margin-top: 5rem;
  .text {
    text-align: center;
    font-size: 1.5rem;
    header {
      margin-bottom: 5rem;
    }
    p {
      margin: 3rem 0rem;
    }
  }
  .guitarVideo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    iframe {
      width: 45%;
      height: 35vh;
      margin: 0rem 1rem;
    }
  }
  @media (max-width: 789px) {
    .guitarVideo {
      iframe {
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
`;

export default AboutMe;
