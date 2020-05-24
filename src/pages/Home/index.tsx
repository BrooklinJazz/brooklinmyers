import React from "react";
import styled from "styled-components";
import { Links } from "./Links/Links";
import { Page } from "../../components/Page";

export const Text = styled.h2`
  font-weight: 200;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const Brand = styled.h1.attrs(props => ({
  children: "Brooklin Myers"
}))`
  font-weight: 200;
  font-size: 24px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

export const Home = () => {
  return (
    <Page>
      <Brand />
      <Links />
    </Page>
  );
};
