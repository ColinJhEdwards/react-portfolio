import React from "react";
import colin from "../Images/Colin.JPG";
import resume from "../files/Edwards_Resume.pdf";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMapMarkerAlt,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { slider2, pageAnimation } from "../animations";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledTitle>
        <h2>Let's Connect</h2>
        <hr width="60%" color="gray" />
      </StyledTitle>
      <StyledContact variants={slider2}>
        <div className="image">
          <img src={colin} alt="me" />
        </div>
        <div className="info">
          <h2>
            <FontAwesomeIcon className="icon" icon={faUser} />
            Colin Edwards
          </h2>
          <a href={resume} target="_blank" rel="noreferrer">
            <h2>
              <FontAwesomeIcon className="icon" icon={faFile} />
              Resume
            </h2>
          </a>
          <h2>
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            Redmond, Washington
          </h2>
        </div>
        <div className="contact">
          <a href="mailto: colinjhedwards@gmail.com">
            <h2>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              ColinJhEdwards@gmail.com
            </h2>
          </a>
          <a
            href="https://github.com/ColinJhEdwards"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              <i class="fab fa-github-square"></i>
              Github
            </h2>
          </a>
          <a
            href="https://www.linkedin.com/in/colin-edwards-9a313a140/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              <i className="fab fa-linkedin"></i>
              Linkedin
            </h2>
          </a>
        </div>
      </StyledContact>
    </motion.div>
  );
};

const StyledTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0rem;
`;

const StyledContact = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    margin: 2rem 0rem;
  }
  .icon,
  i {
    margin-right: 1rem;
    color: gray;
  }
  a {
    color: #1f51ff;
    &:hover {
      color: gray;
      text-decoration: underline;
    }
  }
  .image {
    img {
      height: 300px;
      border-radius: 360px;
      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 1500px) {
    h2 {
      font-size: 1.5rem;
    }
    .contact {
      h2 {
        font-size: 1rem;
      }
    }
  }
`;

export default Contact;
