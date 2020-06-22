import styled from "styled-components"
const brook = require("../../assets/BrooklinMyers.jpg");

export const HeroImage = styled.img.attrs(props => ({
  src: brook
}))`
  width: 100%;
  object-fit: cover;
`;
