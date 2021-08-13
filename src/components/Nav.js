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
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/" ? "100%" : "0%" }}
          ></motion.div>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/projects" ? "100%" : "0%" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: path === "/contact" ? "100%" : "0%" }}
          ></motion.div>
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
  background: black;
  border-bottom: #474040 solid 1px;
  a {
    color: white;
    text-decoration: none;
    background: black;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    transition: ease all 0.5s;
    &:hover {
      background: #1f51ff;
      color: white;
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
    font-size: 1.5rem;
    position: relative;
    &:hover {
      .line {
        display: none;
      }
    }
    .line {
      height: 0.3rem;
      background: #1f51ff;
      width: 0;
      position: absolute;
      bottom: 4%;
      left: 0%;
    }
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

export default MyNav;
