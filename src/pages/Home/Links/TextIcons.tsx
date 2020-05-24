import React from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/entypo/Heart";
import { Code } from "@styled-icons/entypo/Code";
import { Tools } from "@styled-icons/entypo/Tools";
import { Text } from "../index";
import { useHistory } from "react-router";

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

// TODO define Icon type
type Icon = any;

interface TextIconProps {
  Icon: any;
  children: string;
  testId: string;
}

const TextIcon = ({ Icon, children, testId }: TextIconProps) => {
  const {push} = useHistory()
  return (
    <IconContainer onClick={() => push(children)} data-test-id={testId}>
      <Text>{children}</Text>
      <Icon size={25} />
    </IconContainer>
  );
};

interface IconData {
  name: string;
  icon: Icon;
}

const icons = [
  { name: "projects", icon: Code },
  { name: "philosophy", icon: Heart },
  { name: "skillset", icon: Tools }
];

export const TextIcons = () => {
  const renderIcon = ({ name, icon }: IconData) => (
    <TextIcon testId={name + "Icon"} Icon={icon}>
      {name}
    </TextIcon>
  );
  return <>{icons.map(renderIcon)}</>;
};
