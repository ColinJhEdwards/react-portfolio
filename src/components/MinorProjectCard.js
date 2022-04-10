import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { fade } from "../animations";

const MinorProjectCard = ({ title, description, code, repo, deploy }) => {
  return (
    <StyledCard variants={fade}>
      <div className="icon">
        <FontAwesomeIcon icon={faFolder} id="folder" />
        <div className="links">
          <a href={repo} target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href={deploy} target="_blank" rel="noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{code}</p>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 0px 4px 2px blue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-20px);
    .text {
      h3 {
        color: blue;
      }
    }
  }
  .icon {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    i,
    #folder {
      font-size: 2rem;
    }
    #folder {
      color: blue;
    }
    i {
      margin-left: 1rem;
    }
    a {
      color: white;
      transition: all ease 0.5s;
      &:hover {
        color: blue;
      }
    }
  }
  .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: gray;
    }
    h3 {
      transition: all ease 0.2s;
    }
  }
`;

export default MinorProjectCard;
