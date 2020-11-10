import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Span>DEVELOPER</Span>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  background: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Span = styled.span`
  color: #fff;
  font-size: 14vw;
  font-weight: lighter;
`;