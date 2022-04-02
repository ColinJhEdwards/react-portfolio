import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const Skills = () => {
  return (
    <StyledDiv>
      <AnimateSharedLayout>
        <Toggle title="Languages">
          <div className="lang">
            <div className="languages">
              <h2>HTML5</h2>
              <h2>CSS</h2>
              <h2>JavaScript</h2>
            </div>
          </div>
        </Toggle>
        <Toggle title="Technologies">
          <div className="tech">
            <div className="tech1">
              <h2>React</h2>
              <h2>node.js</h2>
              <h2>Bootstrap</h2>
              <h2>jQuery</h2>
              <h2>MongoDB</h2>
              <h2>Styled Components</h2>
              <h2>Framer-Motion</h2>
              <h2>Redux</h2>
              <h2>GIT</h2>
              <h2>Github</h2>
            </div>
          </div>
        </Toggle>
        <Toggle title="Studying">
          <div className="study">
            <div className="studying">
              <h2>GraphQl</h2>
              <h2>Typescript</h2>
              <h2>React</h2>
              <h2>Algorithms</h2>
              <h2>Test Driven Development</h2>
            </div>
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
  justify-content: space-around;
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
    h1 {
      letter-spacing: 4px;
      overflow: hidden;
      color: #1f51ff;
      border-bottom: 2px solid gray;
      cursor: pointer;
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
