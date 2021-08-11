import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { grow } from "../animations";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, code, repo, deploy, id }) => {
  return (
    <StyledA>
      <Hide>
        <StyledDiv variants={grow}>
          <Link to={`/project/${id}`}>
            <h2>
              <FontAwesomeIcon icon={faBook} /> {title}
            </h2>
            <p>{description}</p>
            <p>
              <span
                style={{ color: code === "JavaScript" ? "yellow" : "#129dc7" }}
              >
                <FontAwesomeIcon icon={faCircle} />
              </span>
              {code}
            </p>
          </Link>
          <div className="links">
            <a href={repo} target="_blank">
              <p>Repository</p>
            </a>
            <a href={deploy} target="_blank">
              <p>Deployed Application</p>
            </a>
          </div>
        </StyledDiv>
      </Hide>
    </StyledA>
  );
};

const StyledDiv = styled(motion.div)`
  box-shadow: 0px 0px 2px rgb(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  transition: all ease 0.5s;
  width: 426px;
  height: 200px;
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background: white;
  &:hover {
    box-shadow: 0px 0px 30px rgba(31, 81, 255, 1);
    color: #1f51ff;
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
  .links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bolder;
  }
  .img {
  }
  @media (max-width: 500px) {
    width: 350px;
    height: 160px;
    margin: 2rem 1rem;
  }
  @media (max-width: 414px) {
    height: 220px;
  }
  @media (max-width: 375px) {
    margin: 2rem 1rem;
  }
  @media (max-width: 320px) {
    width: 300px;
    height: 240px;
  }
`;

const StyledA = styled.div`
  a {
    color: black;
    text-decoration: none;
    transition: ease all 0.5s;
    &:hover {
      color: #1517bd;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ProjectCard;
