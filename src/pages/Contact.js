import React from "react";
import colin from "../Images/Colin.JPG";
import resume from "../files/Edwards_Resume.pdf";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { pageAnimation } from "../animations";

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
        <hr width="60%" color="black" />
      </StyledTitle>
      <StyledContact>
        <div className="image">
          <img src={colin} alt="image-of-me" />
        </div>
        <div>
          <h2>
            <FontAwesomeIcon className="icon" icon={faUser} />
            Colin Edwards
          </h2>
          <a href={resume} target="_blank">
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
          <h2>
            <FontAwesomeIcon className="icon" icon={faMobileAlt} />
            360-990-9571
          </h2>
          <h2>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            ColinJhEdwards@gmail.com
          </h2>
          <a href="https://github.com/ColinJhEdwards" target="_blank">
            <h2>
              <i class="fab fa-github-square"></i>
              https://github.com/ColinJhEdwards
            </h2>
          </a>
          <a
            href="https://www.linkedin.com/in/colin-edwards-9a313a140/"
            target="_blank"
          >
            <h2>
              <i class="fab fa-linkedin"></i>
              https://www.linkedin.com/in/colin-edwards
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
    color: black;
  }
  a {
    color: #1517bd;
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
