import React from "react";
import styled from "styled-components";

export const Tags = ({ text }) => {
  return <TagStyled>{text}</TagStyled>;
};

const TagStyled = styled.p`
  font-family: "Roboto";
  color: #fff;
  background: #00ab9b;
  margin: 0;
  white-space: nowrap;
  font-weight: lighter;
  letter-spacing: 2px;
  padding: 4px;
  margin: 4px 4px 4px 0;
  width: fit-content;
`;