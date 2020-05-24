import React from "react";
import styled from "styled-components";
import {
  LinkedinWithCircle,
  MediumWithCircle,
  MailWithCircle,
  GithubWithCircle
} from "styled-icons/entypo-social";
const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: ${props => React.Children.count(props.children) * 40}px;
`;

const SocialMedia = () => {
  const size = 30;
  return (
    <SocialContainer>
      <MailWithCircle data-test-id="Mail" size={size} />
      <LinkedinWithCircle data-test-id="Linkedin" size={size} />
      <GithubWithCircle data-test-id="Github" size={size} />
      <MediumWithCircle data-test-id="Medium" size={size} />
    </SocialContainer>
  );
};

// TODO add type for children
export const Page = ({ children }: { children: any }) => {
  return (
    <>
      <SocialMedia />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};
