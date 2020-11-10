import React from "react";
import styled from "styled-components";
import { WorkExperience } from "components/work/WorkExperience";

export const Work = () => {
  return (
    <Main> 
      <Title>WORK</Title>
      <WorkExperience/>
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
  color: #fff;
  background: #ff4f70;
  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;