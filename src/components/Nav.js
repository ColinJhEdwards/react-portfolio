import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MyNav = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="https://github.com/ColinJhEdwards" target="_blank">
          <FontAwesomeIcon icon={faCode} />
          Colin Edwards
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/" ? "80%" : "0%" }}
          ></Line>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/projects" ? "80%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/contact" ? "80%" : "0%" }}
          ></Line>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #142850;
  a {
    color: white;
    text-decoration: none;
    transition: ease all 0.5s;
    &:hover {
      color: #00909e;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-weight: lighter;
  }
  li {
    padding-left: 7rem;
    position: relative;
    font-size: 2rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 0rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 1rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
        margin: 0rem 1rem;
      }
    }
  }
  @media (max-width: 500px) {
    #logo {
      font-size: 1.5rem;
    }
    li {
      font-size: 1rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #00909e;
  width: 0;
  position: absolute;
  bottom: 4%;
  left: 40%;
`;

export default MyNav;
