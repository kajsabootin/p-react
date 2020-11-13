import React from "react";
import styled from "styled-components";

export const CodeSnippet = () => {
  return (
      <Terminal>
        <Dif>
        Name: Kajsa
        </Dif>
        <br />         
        <Dif>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Dif>
      </Terminal>
  )
}

const Dif = styled.span`
  color: #fff;
  font-family: monospace;
  font-weight: normal;
`;

const Terminal = styled.section`
  width: 100%;
  max-width: 575px;
  margin: auto;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 1px #808080;
  background: #00ab9b;
`;