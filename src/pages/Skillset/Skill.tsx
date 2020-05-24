import React from "react";
import styled from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";

const Ul = styled.ul`
  margin: 0;
  padding-left: 10px;
  min-width: 150px;
  width: max-content;
`;

const Li = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 5px;
`;

const List = ({ list }: {
  list: string[];
}) => {
  return (<Ul>
    {list.map(each => (<Li key={each}>{each}</Li>))}
  </Ul>);
};

const Area = styled.div<{
  gridArea: string;
}> `
  grid-area: ${props => props.gridArea};
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-end;
`;

interface SkillProps {
  icons: StyledIcon[];
  area: string;
  list: string[];
}

export const Skill = ({ icons, area, list }: SkillProps) => {
  // because these skills do not move or update - using index for the key is fine
  return (<Area gridArea={area}>
    {icons.map((Each, i) => (<Each key={i} size={30} />))}
    <List list={list} />
  </Area>);
};
