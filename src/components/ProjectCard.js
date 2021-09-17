import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { grow } from "../animations";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, code, repo, deploy, id, cover }) => {
  return (
    <Hide>
      <StyledDiv variants={grow}>
        <Hide>
          <img src={cover} alt="coverimg" />
        </Hide>
        <h2>
          <FontAwesomeIcon icon={faBook} /> {title}
        </h2>
        <div className="line"></div>
        <p id="desc">{description}</p>
        <p>
          <span style={{ color: code === "JavaScript" ? "yellow" : "#129dc7" }}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
          {code}
        </p>

        <div className="links">
          <Link to={`/project/${id}`}>
            <p>Preview</p>
          </Link>
          <a href={repo} target="_blank">
            <p>Repository</p>
          </a>
          <a href={deploy} target="_blank">
            <p>Deployed Application</p>
          </a>
        </div>
      </StyledDiv>
    </Hide>
  );
};

const StyledDiv = styled(motion.div)`
  border-radius: 10px;
  transition: all ease 0.5s;
  width: 800px;
  min-height: 660px;
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #202020;
  #desc {
    height: 38px;
  }
  h2,
  p {
    color: white;
    text-shadow: 2px 2px black;
    margin: 1rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .line {
    width: 95%;
    height: 2px;
    background: gray;
    margin: 0rem auto;
  }
  img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin: 0;
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
    flex-wrap: wrap;
    p {
      font-size: 1rem;
      text-decoration: none;
      border-radius: 10px;
      padding: 0.5rem 2rem;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
      background: #1517bd;
      transition: ease all 0.5s;
      &:hover {
        background: #3336f8;
      }
    }
  }
  @media (max-width: 768px) {
    width: 600px;
    min-height: 500px;
    margin: 2rem 1rem;
  }

  @media (max-width: 500px) {
    width: 350px;
    margin: 2rem 1rem;
    #desc {
      height: 100%;
    }
    .links {
      p {
        padding: 0.5rem 0.5rem;
        &:hover {
          background: none;
          color: #1517bd;
        }
      }
    }
  }
  @media (max-width: 414px) {
  }
  @media (max-width: 375px) {
    margin: 2rem 1rem;
  }
  @media (max-width: 320px) {
    width: 300px;
    height: 240px;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ProjectCard;
