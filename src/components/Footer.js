import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledDiv>
      <h2>&copy; Colin Edwards 2021</h2>
    </StyledDiv>
  );
};

const StyledDiv = styled.footer`
  min-height: 5vh;
  background: black;
  border-top: #474040 solid 1px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1rem;
    margin-bottom: 0px;
  }
`;

export default Footer;
