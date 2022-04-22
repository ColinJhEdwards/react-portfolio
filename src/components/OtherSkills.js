import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const OtherSkills = () => {
  return (
    <StyledOther className="otherSkills">
      <div className="list">
        <div className="container">
          <div className="icon">
            <i class="fa-solid fa-guitar"></i>
          </div>
          <div className="text">
            <h2>Guitarist</h2>
            <p>
              I am addicted to my guitar and studying music theory, check out my
              videos below!
            </p>
          </div>
        </div>

        <div className="container">
          <div className="icon">
            <i class="fa-solid fa-paintbrush"></i>
          </div>
          <div className="text">
            <h2>Creative</h2>
            <p>
              I love art, music, and good design. I thrive in front-end
              development.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="icon">
            <i class="fa-solid fa-person-running"></i>
          </div>
          <div className="text">
            <h2>Runner</h2>
            <p>
              I am an avid runner and have participated in events such as the
              Seattle Mud Run.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="icon">
            <i class="fa-solid fa-user-tie"></i>
          </div>
          <div className="text">
            <h2>Professional</h2>
            <p>
              I am reliable, I set high standards for myself, and I keep my
              word.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="icon">
            <i class="fa-solid fa-book"></i>
          </div>
          <div className="text">
            <h2>Inquisitive</h2>
            <p>I have a strong student mentality and love learning.</p>
          </div>
        </div>
        <div className="container">
          <div className="icon">
            <i class="fa-solid fa-handshake"></i>
          </div>
          <div className="text">
            <h2>Honest</h2>
            <p>
              I own up to my mistakes. I am not afraid to admit where I am
              lacking in knowledge.
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </StyledOther>
  );
};

const StyledOther = styled.div`
  min-height: 30vh;
  width: 90%;
  margin: auto;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .container {
      width: 30%;
      margin: 4rem 1rem;
      padding: 1rem;
      display: flex;
      justify-content: flex-start;
      transition: all ease 0.5s;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background: #33333371;
      }
      i {
        color: #1f51ff;
        background: #27272788;
        padding: 1rem;
        border-radius: 15px;
      }
      .icon {
        font-size: 2rem;
        margin-right: 1rem;
      }
      .text {
        p {
          color: #c9c9c9;
        }
      }
    }
  }
  .line {
    height: 0.5px;
    background: gray;
    width: 90%;
    margin: 1rem auto;
  }
  @media (max-width: 1185px) {
    .list {
      .container {
        width: 40%;
      }
    }
  }
  @media (max-width: 900px) {
    .list {
      flex-direction: column;
      .container {
        width: 100%;
        margin: 0rem;
      }
    }
  }
`;

export default OtherSkills;
