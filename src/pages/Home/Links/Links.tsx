import React from "react";
import { TextIcons } from "./TextIcons";
import styled from "styled-components";

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const Links = () => {
  return (
    <LinksContainer>
      <TextIcons/>
    </LinksContainer>
  );
};
