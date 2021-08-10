import React from "react";
import styled from "styled-components";

const MeSvg = () => {
  return (
    <StyledDiv>
      <div className="lang">
        <div className="words word-1">
          <h1>Languages</h1>
        </div>
        <div className="languages">
          <h2>HTML5</h2>
          <h2>CSS</h2>
          <h2>JavaScript</h2>
        </div>
      </div>
      <div className="tech">
        <div className="words word-2">
          <h1>Technologies</h1>
        </div>
        <div className="tech1">
          <h2>React</h2>
          <h2>node.js</h2>
          <h2>Bootstrap</h2>
          <h2>jQuery</h2>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 25rem;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-family: "Archivo Black", sans-serif;
  .lang,
  .tech {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .words {
    margin-bottom: 2rem;
    h1 {
      letter-spacing: 4px;
      overflow: hidden;
      background: linear-gradient(90deg, white, black, white);
      background-repeat: no-repeat;
      background-size: 80%;
      background-clip: text;
      animation: animate 3s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
      border-bottom: 2px solid gray;
    }
  }
  .languages,
  .tech1 {
    color: gray;
  }

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }

  @media (max-width: 1750px) {
  }
  @media (max-width: 414px) {
    width: 90%;
    margin: auto;
  }
`;

export default MeSvg;
