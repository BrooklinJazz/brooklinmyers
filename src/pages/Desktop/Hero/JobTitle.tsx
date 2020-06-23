import styled from "styled-components";
import { translations } from "../../../constants/translations";
export const JobTitle = styled.h2.attrs((props) => ({
    children: translations.JOB_TITLE,
}))`
  font-size: 2vw;
  padding: 3px 0;
  margin: 0;
  font-weight: 400;
`;
