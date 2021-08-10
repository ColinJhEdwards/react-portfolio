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
            animate={{ width: path === "/" ? "100%" : "0%" }}
          ></Line>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/projects" ? "100%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/contact" ? "100%" : "0%" }}
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
  background: white;
  a {
    color: black;
    text-decoration: none;
    transition: ease all 0.5s;
    &:hover {
      color: #505050;
    }
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    width: 40rem;
  }
  #logo {
    font-size: 2rem;
    font-weight: lighter;
  }
  li {
    position: relative;
    font-size: 1.5rem;
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
  background: #1517bd;
  width: 0;
  position: absolute;
  bottom: 4%;
  left: 0%;
`;

export default MyNav;
