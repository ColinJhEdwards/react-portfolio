import React from "react";
import Skills from "../components/Skills";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, slider, svgSlide, fade } from "../animations";
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
              Self taught <span>Front End Developer</span> with a certificate in
              Fullstack Development. Passionate about design, coding, and music.
            </motion.h2>
          </Hide>
          <Hide>
            <motion.div variants={slider}>
              <a href="https://github.com/ColinJhEdwards" target="_blank">
                <i class="fab fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/colin-edwards-9a313a140/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto: colinjhedwards@gmail.com">
                <i class="fas fa-envelope-square"></i>
              </a>
            </motion.div>
          </Hide>
        </div>
        <motion.div className="me" variants={fade}>
          <img src={colin} alt="colin" />
        </motion.div>
      </StyledDiv>
      <StyledSkills className="skills">
        <motion.div variants={fade} className="svg">
          <Skills />
        </motion.div>
      </StyledSkills>
    </>
  );
};

const StyledDiv = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: center;
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
      width: 80%;
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
    }
  }
  @media (max-width: 1750px) {
    .aboutMe h1,
    h2 {
      font-size: 1.2rem;
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
  @media (max-width: 414px) {
    .aboutMe {
      i {
        font-size: 3rem;
      }
    }
  }
`;

const StyledSkills = styled(motion.div)`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Home;
