import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const MyNav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="https://github.com/ColinJhEdwards">
          <FontAwesomeIcon icon={faCode} />
          Colin Edwards
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
