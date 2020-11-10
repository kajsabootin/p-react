import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Text>
        <P> Say Hello...</P>
      </Text>
      <Wrapper>
        <A href="mailto:kaajsabootin@gmail.com?subject=Let's do cool stuff together!"> 
        <P>EMAIL </P>
        </A>
        <A href="https://github.com/kajsabootin"> 
        <P>GITHUB </P>
        </A>
        <A href="https://www.linkedin.com/in/kajsa-bootin-5a777a157/"> 
        <P>LINKEDIN </P>
        </A>
      </Wrapper>
    </FooterWrapper>   
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: black;
  padding: 10px 0;
  margin-top: 15px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
`;

const P = styled.p`
  display: inline;
  margin: 0;
`;

const Wrapper = styled.div`
  &:hover > *:not(:hover) {
    opacity: 0.3;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  width: fit-content;
  transition: all 0.2s;
`;