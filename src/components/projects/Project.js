import React from "react";
import styled from "styled-components";
import { Tags } from "components/projects/Tags";

export const Project = ({
  netlifyURL,
  githubURL,
  title,
  /* subTitle, */
  description,
  listOfTags,
}) => {
  return (
    <WorkContainer>
      <Div>
      <A href={netlifyURL} target="_blank" rel="noopener noreferrer">      
        {/* <ProjectView> */}
          <Title className="project-title">{title}</Title>
        {/* </ProjectView> */}
      </A>
      <A href={githubURL} target="_blank" rel="noopener noreferrer">
        <GithubLink>github repo</GithubLink>
      </A>
      </Div>
      <P>
        {/* <Span>{subTitle}</Span> */}
        {description}
        {/* <Span style={{ textDecoration: "underline" }}>&gt;&gt;</Span> */}
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
  width: fit-content;
`;

const P = styled.p`
 /*  color: #000;
  margin: 0 0 10px 0; */
  font-size: 20px;
`;

/* const Span = styled.span`
  font-family: "Roboto";
  font-weight: bold;
  color: #000;
`; */

/* const ProjectView = styled.div`` */

const Div = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
margin-bottom: 20px;`

const Title = styled.span`
color: #ff4f70;`

const GithubLink = styled.span`
font-weight: lighter;
color: black;`

const TagContainer = styled.div`
display: flex;
flex-wrap: wrap;`
