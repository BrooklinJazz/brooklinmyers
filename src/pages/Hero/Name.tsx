import styled from "styled-components";
import { translations } from "../../constants/translations";

export const Name = styled.h1.attrs((props) => ({ children: translations.NAME }))`
  font-size: 3vh;
  padding: 3px 0;
  margin: 0;
  font-weight: 100;
`;
