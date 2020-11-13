import React from "react";
import styled from "styled-components";
import { Tags } from "components/projects/Tags";

export const WorkExperience = ({
  title,
  description,
  listOfTags,
  subTitle
  /* emoji, 
  ariaLabel */
  }
) => {
  return (
    <TechContainer>  
      <Div>
      <Title className="project-title">{title}</Title>
      <Text>{subTitle}</Text>
      </Div>
      <P>
        {description}
      </P>
      <TagContainer>
        {listOfTags.map((tag, index) => (
          <Tags text={tag} key={index} />
        ))}
      </TagContainer>
    </TechContainer>
  )
}

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
const Title = styled.span`
color: #ff4f70;`

const P = styled.p`
font-size: 20px;`

const Div = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
`

const Text = styled.span`
font-weight: lighter;
`

const TagContainer = styled.div`
display: flex;
flex-wrap: wrap;`