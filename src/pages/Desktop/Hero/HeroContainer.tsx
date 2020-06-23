import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 60vw;
  height: 60vh;
  display: flex;
  @media (max-width: 1000px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 90vw;
  }
`;
