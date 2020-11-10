/* import React from "react";
import styled from "styled-components";

export const Project = ({
  netlifyURL,
  title,
  subTitle,
  description,
  githubURL,
  imgSrc,
  imgAlt,
}) => {
  return (
    <Card>
        <A href={netlifyURL} target="_blank" rel="noopener noreferrer">
        <ProjectView>
          <Img src={imgSrc} alt={imgAlt} />
          <Title className="project-title">{title}</Title>
        </ProjectView>
      </A>
      <A href={githubURL} target="_blank" rel="noopener noreferrer">
        <GithubLink>GITHUB REPO </GithubLink>
      </A>
      <P>
        <Span>{subTitle}</Span>
        {description}
        
      </P>
     

    </Card>

  )
}

const Card = styled.div`
  margin: 1px 6px 6px 6px;
  background: yellow;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  width: fit-content;
`;

const P = styled.p`
  color: #000;
  margin: 0 0 10px 0;
`;

const Span = styled.span`
  font-family: "Roboto";
  font-weight: bold;
  color: #000;
`;

const Title = styled.h2`
  font-size: 40px;
  grid-row-start: 1;
  z-index: 5;
  align-self: center;
  justify-self: center;
  color: #00ab9b;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 668px) {
    font-size: 40px;
  }
  @media (min-width: 1024px) {
    font-size: 4.2vw;
  }
`;

const GithubLink = styled.h4`
  font-family: "Roboto";
  color: #000;
  background: #ff4f70;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 6px;
  text-align: center;
  padding: 4px;
  margin: 10px auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const ProjectView = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-self: center;
  margin: 36px auto 0;
  text-align: center;
  transition: transform 0.2s;
`;

const Img = styled.img`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 5;
  width: 100%;
`; */

import React from "react";
import styled from "styled-components";
import { Tags } from "components/projects/Tags";

export const Project = ({
  netlifyURL,
  githubURL,
  title,
  subTitle,
  description,
  listOfTags,
}) => {
  return (
    <WorkContainer>
      <A href={netlifyURL} target="_blank" rel="noopener noreferrer">
        <ProjectView>
          <Title className="project-title">{title}</Title>
        </ProjectView>
      </A>
      <A href={githubURL} target="_blank" rel="noopener noreferrer">
        <GithubLink>GITHUB REPO </GithubLink>
      </A>
      <P>
        <Span>{subTitle}</Span>
        {description}
        <Span style={{ textDecoration: "underline" }}>&gt;&gt;</Span>
      </P>
      <TagContainer>
        {listOfTags.map((tag, index) => (
          <Tags text={tag} key={index} />
        ))}
      </TagContainer>
    </WorkContainer>
  )
}

const WorkContainer = styled.section`
  font-size: 25px;
  width: 100%;
  margin: 20px 0 0 0;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: inset 0px 10px #ff4f70;
  @media (min-width: 668px) {
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #ff4f70;
  width: fit-content;
`;

const P = styled.p`
  color: #000;
  margin: 0 0 10px 0;
`;

const Span = styled.span`
  font-family: "Roboto";
  font-weight: bold;
  color: #000;
`;

const ProjectView = styled.div``

const Title = styled.h2``

const GithubLink = styled.h4``

const TagContainer = styled.div`
display: flex;
  flex-wrap: wrap;`
