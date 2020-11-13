import React from "react";
import styled from "styled-components";
import { WorkExperience } from "components/work/WorkExperience";

export const Work = () => {
  const webShopList = [
    "react",
    "redux",
    "JSX",
    "CSS",
    "styled-components",
    "API",
    "react native",
    "pair-programming",
    "git",
    "git flow",
    "azure",
    "sourcetree",
    "react native debugger"
  ];

  return (
    <Main> 
      <Title>WORK</Title>
      <WorkExperience
      title="MEDPEOPLE"
      subTitle="software developer"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      listOfTags={webShopList}
      />
    </Main>
  )
}

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  min-height: 60vh;
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
  color: #ff4f70;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;