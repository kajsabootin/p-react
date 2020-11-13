import React from "react";
import styled from "styled-components";

export const TechBox = ({ listOfSkills, emoji, ariaLabel }) => {
  const textStyling = (listOfSkills) => {
    let stringOfSkillsStyled = "";
    listOfSkills.forEach((skill, index) => {
      if (listOfSkills.length - index === 1) {
        stringOfSkillsStyled += `${skill}`;
      } else if (listOfSkills.length - index > 2) {
        stringOfSkillsStyled += `${skill}, `;
      } else {
        stringOfSkillsStyled += `${skill} & `;
      }
    });
    return stringOfSkillsStyled;
  };
  return (
    <TechContainer>
      <Emoji ariaLabel={ariaLabel}>{emoji}</Emoji>
      <Span>{textStyling(listOfSkills)}</Span>
    </TechContainer>
  );
};

const Emoji = styled.span.attrs(({ ariaLabel }) => ({
  role: "img",
  "aria-label": ariaLabel,
}))`
  text-align: center;
  font-size: 35px;
  margin: 0;
  opacity: 0.8;
`;
const Span = styled.span`
font-size: 20px;
`;

const TechContainer = styled.section`
  font-size: 25px;
  width: 100%;
  margin: 20px 0 0 0;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: inset 0px 10px #ff4f70;
  @media (min-width: 668px) {
  }
`;
