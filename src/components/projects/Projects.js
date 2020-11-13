/* import React from "react";
import styled from "styled-components";
import { Project } from "components/projects/Project";

export const Projects = () => {
  return (
    <Main>
      <Title>FEATURED PROJECTS</Title>    
      <CardGrid>

      <Project
          netlifyURL="https://quiz-hippos.netlify.app/"
          githubURL="https://github.com/kajsabootin/project-redux-quiz-hippos"
          title="FOOD QUIZ"
          subTitle="SITE."
          description=" A team project in the Technigo Bootcampt and the task was to build a quiz game using Redux >>"
      />
      <Project
          netlifyURL="https://cranky-agnesi-1a9eac.netlify.app/"
          githubURL="https://github.com/kajsabootin/project-nutrition"
          title="PROJECT NUTRITION"
          subTitle="SITE."
          description=" This project was all about building an app which scans barcodes on food packages to retrieve the product name and nutritional information. We used Open world facts API >> "
      />    
      <Project
          netlifyURL="https://kajsa-happythought.netlify.app/"
          githubURL="https://github.com/kajsabootin/project-happy-thoughts-api"
          title="HAPPY THOUGHTS"
          subTitle="APP."
          description=" Fullstack project. We built a mini version of Twitter, but with less negativity. (Just love) >> "
      />
      <Project
          netlifyURL="https://kajsabootin-todos.netlify.app/"
          githubURL="https://github.com/kajsabootin/project-todos"
          title="TODO APP"
          subTitle="APP."
          description=" Todo app built with React & Redux >> "
      />      
      </CardGrid>
    </Main>

  )
}

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  min-height: 90vh;
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

const CardGrid = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px 50px;
  margin: auto;
  justify-self: center;
  grid-template-columns: 1fr;
  @media (min-width: 668px) {
    grid-template-columns: 1fr 1fr;
  }
`; */

import React from "react";
import styled from "styled-components";
import { Project } from "components/projects/Project";

export const Projects = () => {
  const webShopList = [
    "react",
    "redux",
    "JSX",
    "styled-components",
    "API",
    "Mongo DB",
    "Mongoose",
    "Postman",
    "Node.js",
    "pair-programming",
    "Cloudinary",
    "git",
  ];

  const thoughtsList = [
    "react",
    "JSX",
    "SASS",
    "API",
    "Mongo DB",
    "Node.js",
    "git",
  ];

  const reduxquizList = ["react", "redux", "JSX", "styled-components", "git", "pair-programming"];

  const musicList = ["react", "JSX", "CSS 3", "API", "pair-programming", "git"];


  return (

    <Main>
      <Title>FEATURED PROJECTS</Title>    
      <CardGrid>
        <Project
          netlifyURL="https://hippo-clothing.netlify.app/"
          githubURL="https://github.com/annatakman/Final-Project-Frontend"
          title="WEB SHOP"
          /* subTitle="SITE." */
          description=" Fullstack project. Final project I did during the Technigo boot camp. 
          We worked in a team of three people and together we built a mock web shop where you can shop used 
          clothing and also sign up and sell your own used clothing online. "
          listOfTags={webShopList}
        />
        <Project
          netlifyURL="https://kajsa-happythought.netlify.app/"
          githubURL="https://github.com/kajsabootin/project-happy-thoughts-api"
          title="HAPPY THOUGHTS"
          /* subTitle="APP." */
          description=" Fullstack project. I built a mini version of Twitter, but with less negativity. (Just love). "
          listOfTags={thoughtsList}
        />
        <Project
          netlifyURL="https://quiz-hippos.netlify.app/"
          githubURL="https://github.com/kajsabootin/project-redux-quiz-hippos"
          title="FOOD QUIZ"
          /* subTitle="SITE." */
          description=" A team project in the Technigo Bootcampt and the task was to build a quiz game using Redux."
          listOfTags={reduxquizList}
        />
        <Project
          netlifyURL="https://kajsabootin-muisc.netlify.app/"
          githubURL="https://github.com/kajsabootin/project-music-releases"
          title="POPULAR MUSIC"
          /* subTitle="SITE." */
          description=" Music site built with React, using API to fetch data - Pair programming project."
          listOfTags={musicList}
        />
      </CardGrid>
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

const CardGrid = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px 50px;
  margin: auto;
  justify-self: center;
  grid-template-columns: 1fr;
  @media (min-width: 668px) {
    grid-template-columns: 1fr 1fr;
  }
  `;