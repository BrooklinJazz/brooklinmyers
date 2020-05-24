import React from "react";
import styled from "styled-components";
import {
  LinkedinWithCircle,
  MediumWithCircle,
  MailWithCircle,
  GithubWithCircle
} from "styled-icons/entypo-social";
import { LinkedinURL, GithubURL, MediumURL } from "../constants/links";
import { StyledIcon } from "@styled-icons/styled-icon";

const SocialContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: ${props => React.Children.count(props.children) * 40}px;
`;

const Anchor = styled.a`
  color: black;
`;

const size = 30;

const IconLink = ({
  Icon,
  channel,
  url
}: {
  Icon: StyledIcon;
  channel: string;
  url: string;
}) => {
  return (
    <Anchor data-test-id={channel} target="_blank" href={url}>
      <Icon size={size} />
    </Anchor>
  );
};

export const SocialMedia = () => {
  const size = 30;
  return (
    <SocialContainer>
      <MailWithCircle
        // TODO implement mail sending
        data-test-id="Mail"
        size={size}
      />
      <IconLink
        channel="Linkedin"
        url={LinkedinURL}
        Icon={LinkedinWithCircle}
      />
      <IconLink channel="Github" url={GithubURL} Icon={GithubWithCircle} />
      <IconLink channel="Medium" url={MediumURL} Icon={MediumWithCircle} />
    </SocialContainer>
  );
};
