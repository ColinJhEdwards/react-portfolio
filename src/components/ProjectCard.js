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
        <div className="image">
          <a href={deploy}>
            <img src={cover} alt="coverimg" />
          </a>
          <div className="imgCover"></div>
        </div>

        <div className="content">
          <h2>
            <FontAwesomeIcon icon={faBook} /> {title}
          </h2>
          <div className="line"></div>
          <p id="desc">{description}</p>
          <p className="techUsed">
            <span
              style={{ color: code[0] === "JavaScript" ? "yellow" : "#129dc7" }}
            >
              <FontAwesomeIcon icon={faCircle} />
            </span>
            {code}
          </p>
          <div className="links">
            <a href={repo} target="_blank">
              <p>Repository</p>
            </a>
            <a href={deploy} target="_blank">
              <p>Deployed Application</p>
            </a>
          </div>
        </div>
      </StyledDiv>
    </Hide>
  );
};

const StyledDiv = styled(motion.div)`
  transition: all ease 0.5s;
  width: 100%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      .imgCover {
        background: none;
      }
    }
  }
  .image {
    position: relative;
    width: 50%;
    img {
      width: 100%;
      margin: 0;
      cursor: pointer;
    }
    .imgCover {
      background: #0000ff7b;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all ease 0.5s;
      pointer-events: none;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    width: 50%;
    right: 5%;
    #desc {
      background: #202020;
      padding: 2rem;
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
      width: 60%;
      height: 2px;
      background: gray;
      margin: 0rem 1rem;
    }

    .techUsed {
      color: #b8b8b8;
    }
    p {
      font-size: 0.8rem;
    }
    span {
      margin-right: 5px;
    }
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bolder;
    flex-wrap: wrap;
    p {
      font-size: 1rem;
      text-decoration: none;
      border-radius: 10px;
      padding: 0.2rem 1rem;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
      background: #1517bd;
      transition: ease all 0.5s;
      &:hover {
        background: #07097e;
      }
    }
  }

  @media (max-width: 820px) {
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
          background: #07097e;
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
    #desc {
      height: 70px;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ProjectCard;
