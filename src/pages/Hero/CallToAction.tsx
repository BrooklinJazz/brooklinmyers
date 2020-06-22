import styled from "styled-components";
import { translations } from "../../constants/translations";

export const CallToAction = styled.h3.attrs((props) => ({
    children: translations.CALL_TO_ACTION,
}))`
  font-size: 3vw;
  padding: 3px 0;
  margin: 0;
  font-weight: bold;
`;
