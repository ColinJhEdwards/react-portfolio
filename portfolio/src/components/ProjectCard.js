import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, code, href }) => {
  return (
    <StyledA>
      <a href={href} target="_blank">
        <StyledDiv>
          <h2>
            <FontAwesomeIcon icon={faBook} /> {title}
          </h2>
          <p>{description}</p>
          <p>{code}</p>
        </StyledDiv>
      </a>
    </StyledA>
  );
};

const StyledDiv = styled.div`
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
  padding: 2rem;
  cursor: pointer;
  border-radius: 10px;
  transition: all ease 0.5s;
  width: 426px;
  height: 146px;
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background: white;
  &:hover {
    box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.7);
  }
  h2 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

const StyledA = styled.div`
  a {
    color: black;
    text-decoration: none;
    transition: ease all 0.5s;
    &:hover {
      color: #00909e;
    }
  }
`;

export default ProjectCard;
