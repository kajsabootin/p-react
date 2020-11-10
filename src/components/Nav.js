import React from "react";
import styled from "styled-components";
import { NavHashLink as NavLink } from "react-router-hash-link";

export const Nav = () => {
  return (
    <Wrapper>
      <Ul>
      <NavLink smooth="true" to="/#welcome">
        <Li className="nav-title">HOME</Li>
      </NavLink>
      <NavLink to="/work#work">
          <Li>WORK</Li>
        </NavLink>      
        <NavLink to="/projects#projects">
          <Li>PROJECTS</Li>
        </NavLink>
        <NavLink to="/tech#tech">
          <Li>TECH</Li>
        </NavLink>
      </Ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 0 0 0 0;
position: sticky;
top: 0;
z-index: 10;
`

/* const Text = styled.h2`
color: #ff4f70;
` */

const Li = styled.a`
color: #ff4f70;
list-style: none;
`

const Ul = styled.p`
display: flex;
align-self: flex-end;
margin: 0;
padding: 0 0 10px 0;
text-decoration: none;
@media (min-width: 668px) {
  padding: 0 0 0 0;
}
`
