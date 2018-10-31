import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  padding: 5px;
  margin-bottom: 10px;
  border-top: 1px solid #ebebeb;
`;

const Contributor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const ContributorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
  color: #002240;
`;

const Avatar = styled.img`
  border-radius: 5px;
  height: 50px;
  width: 50px;
`;
const Name = styled.a`
  font-size: 10px;
  text-decoration: none;
`;

export default function Contributors({ contributors }) {
  if (contributors.lenth === 0) return null;

  return (
    <Container>
      <Title>Contributors</Title>
      <ContributorsContainer>
        {contributors.map(contributor => {
          return (
            <Contributor>
              <a href={contributor.url} target="_blank">
                <Avatar src={contributor.avatar} />
              </a>
              <Name href={contributor.url} target="_blank">
                {contributor.name}
              </Name>
            </Contributor>
          );
        })}
      </ContributorsContainer>
    </Container>
  );
}
