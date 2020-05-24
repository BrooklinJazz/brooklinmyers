import React from "react";
import styled from "styled-components";
import { SocialMedia } from "./SocialIcons";
const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// TODO add type for children
export const Page = ({ children }: { children: any }) => {
  return (
    <>
      <SocialMedia />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};
