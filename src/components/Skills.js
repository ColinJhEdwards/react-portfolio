import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <StyledDiv>
      <AnimateSharedLayout>
        <Toggle title="Languages">
          <div className="lang">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="languages"
            >
              <h2>&#60;HTML5&#62;</h2>
              <h2>&#60;CSS&#62;</h2>
              <h2>&#60;JavaScript&#62;</h2>
            </motion.div>
          </div>
        </Toggle>
        <Toggle title="Technologies">
          <div className="tech">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="tech1"
            >
              <h2>&#60;React&#62;</h2>
              <h2>&#60;node.js&#62;</h2>
              <h2>&#60;Bootstrap&#62;</h2>
              <h2>&#60;jQuery&#62;</h2>
              <h2>&#60;MongoDB&#62;</h2>
              <h2>&#60;Styled Components&#62;</h2>
              <h2>&#60;Framer-Motion&#62;</h2>
              <h2>&#60;Redux&#62;</h2>
              <h2>&#60;GIT&#62;</h2>
              <h2>&#60;Github&#62;</h2>
            </motion.div>
          </div>
        </Toggle>
        <Toggle title="Studying">
          <div className="study">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="studying"
            >
              <h2>&#60;GraphQl&#62;</h2>
              <h2>&#60;Typescript&#62;</h2>
              <h2>&#60;React&#62;</h2>
              <h2>&#60;Algorithms&#62;</h2>
              <h2>&#60;Test Driven Development&#62;</h2>
            </motion.div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 90%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .lang,
  .tech,
  .study {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 2rem 4rem;
  }
  .words {
    margin-bottom: 2rem;
    border: 2px solid gray;
    border-radius: 5px;
    padding: 1rem 0rem;
    transition: all ease 0.5s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      background: gray;
      h1 {
        color: black;
      }
    }
    h1 {
      letter-spacing: 4px;
      margin: 0rem 1rem;
      color: #1f51ff;

      span {
        color: white;
      }
    }
  }
  .languages,
  .tech1,
  .studying {
    color: gray;
    margin: 1rem 0rem;
    display: flex;
    flex-wrap: wrap;
    h2 {
      margin-right: 1rem;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 414px) {
    width: 90%;
    margin: auto;
    h1 {
    }
    .languages,
    .tech1,
    .studying {
      h2 {
        font-size: 1rem;
      }
    }
  }
`;

export default Skills;
