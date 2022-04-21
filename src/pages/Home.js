import React from "react";
import Skills from "../components/Skills";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, slider, fade } from "../animations";
import AboutMe from "../components/AboutMe";
import colin from "../Images/Colin.JPG";

const Home = () => {
  return (
    <>
      <StyledDiv
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="aboutMe">
          <Hide>
            <motion.h2 variants={slider}>
              <span>Hey! I'm-</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h1 variants={slider}>Colin Edwards.</motion.h1>
          </Hide>
          <Hide>
            <motion.h2 variants={slider} id="desc">
              Free lance <span>Web Developer</span> with a certificate in
              Fullstack Development. Passionate about front end development,
              design, and music. Currently seeking a Junior Front End Developer
              position.
            </motion.h2>
          </Hide>
          <Hide>
            <motion.div variants={slider} className="social">
              <a
                href="https://github.com/ColinJhEdwards"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/colin-edwards-9a313a140/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/colinseecolindo/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://open.spotify.com/user/colinjhedwards"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-spotify"></i>
              </a>
              <a href="mailto: colinjhedwards@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </motion.div>
          </Hide>
        </div>
        <motion.div className="me" variants={fade}>
          <img src={colin} alt="colin" />
        </motion.div>
        <motion.div variants={fade} className="line"></motion.div>
      </StyledDiv>
      <StyledSkills className="skills" variants={fade}>
        <Skills />
      </StyledSkills>
      <StyledAbout className="about">
        <AboutMe />
      </StyledAbout>
    </>
  );
};

const StyledDiv = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  width: 90%;
  margin: auto;
  .aboutMe {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60rem;
    h2,
    h1 {
      width: 100%;
    }
    h1 {
      font-size: 8rem;
      color: white;
    }
    #desc {
      width: 90%;
      color: gray;
    }
    span {
      color: #1f51ff;
    }
    a {
      color: #1f51ff;
      transition: all ease 0.5s;
      &:hover {
        color: gray;
      }
    }
    i {
      font-size: 5rem;
      margin: 1rem;
    }
  }
  .me {
    width: 20rem;
    margin: 4rem 0rem;
    img {
      height: 300px;
      border-radius: 360px;
      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
      transition: all ease 0.5s;
      &:hover {
        transform: scale(1.2) rotate(5deg);
      }
    }
  }
  .line {
    height: 0.5px;
    background: gray;
    width: 90%;
    margin: 1rem auto;
  }
  @media (max-width: 1750px) {
    .aboutMe,
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1422px) {
    .me {
      width: 15rem;
      img {
        height: 250px;
      }
    }
  }
  @media (max-width: 1350px) {
    .aboutMe {
      align-items: center;
      h1 {
        font-size: 2rem;
      }
      h2 {
        margin: auto;
        text-align: center;
      }
    }
  }

  @media (max-width: 594px) {
    .social {
      text-align: center;
    }
  }

  @media (max-width: 414px) {
    .aboutMe {
      i {
        font-size: 3rem;
      }
    }
  }
`;

const StyledSkills = styled(motion.div)`
  width: 90%;
  margin: auto;
`;

const StyledAbout = styled(motion.div)`
  width: 90%;
  margin: auto;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Home;
