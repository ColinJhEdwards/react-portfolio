import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { grow } from "../animations";

const ProjectCard = ({ title, description, code, href }) => {
  return (
    <StyledA>
      <a href={href} target="_blank">
        <Hide>
          <StyledDiv variants={grow}>
            <h2>
              <FontAwesomeIcon icon={faBook} /> {title}
            </h2>
            <p>{description}</p>
            <p>
              <span
                style={{ color: code === "JavaScript" ? "yellow" : "orange" }}
              >
                <FontAwesomeIcon icon={faCircle} />
              </span>
              {code}
            </p>
          </StyledDiv>
        </Hide>
      </a>
    </StyledA>
  );
};

const StyledDiv = styled(motion.div)`
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
  span {
    margin-right: 5px;
  }
`;

const StyledA = styled.div`
  a {
    color: black;
    text-decoration: none;
    transition: ease all 0.2s;
    &:hover {
      color: #00909e;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ProjectCard;
