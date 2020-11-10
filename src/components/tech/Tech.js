import React from "react";
import styled from "styled-components";
import { TechBox } from "components/tech/TechBox";

export const Tech = () => {
  const skills = [
    "CSS",
    "SASS",
    "CSS animations",
    "CSS-in-JS",
    "Styled-components",
  ];

  const skillsCode = [
    "JavaScript",
    "ES6",
    "HTML",
    "JSX",
    "React",
    "React - Functional components w. hooks",
    "React - Class components",
    "React Native",
    "Redux",
    "Java",
  ];

  const skillsOther = [
    "Git",
    "Mob programming",
    "Pair programming",
    "Agile workflow",
    "Web Accessibly",
    "Azure"
  ];

  return (
    <Main>
      <Title>TECH</Title>
      <TechBox
          listOfSkills={skills}
          emoji=" 👩‍💻 "
          ariaLabel="Computer girl"
        />
        <TechBox
          listOfSkills={skillsCode}
          emoji=" 👩‍💻 "
          ariaLabel="Computer girl"
        />

        <TechBox
          listOfSkills={skillsOther}
          emoji=" 👩‍💻 "
          ariaLabel="Computer girl"
        />

    </Main>
  )
}

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  min-height: 70vh;
  background: #fff;
  @media (min-width: 668px) {
    padding: 20px 40px;
  }
  @media (min-width: 1024px) {
    padding: 20px 250px;
  }
`;
const Title = styled.h3`
  text-align: center;
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 1px;
  width: fit-content;
  margin: 0 auto 20px;
  padding: 2px 6px;
  color: #fff;
  background: #ff4f70;
  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;