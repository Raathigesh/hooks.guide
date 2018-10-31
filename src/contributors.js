import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Contributor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const ContributorsContainer = styled.div`
  display: flex;
  width: 60px;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  border-radius: 5px;
  height: 40px;
  width: 40px;
`;
const Name = styled.a`
  font-size: 10px;
  text-decoration: none;
`;

export default function Contributors({ contributors }) {
  if (!contributors.lenth) return null;
  return (
    <Container>
      <Title>Contributors</Title>
      <ContributorsContainer>
        {contributors.map(contributor => {
          return (
            <Contributor>
              <Avatar src={contributor.avatar} />
              <Name href={contributor.url}>{contributor.name}</Name>
            </Contributor>
          );
        })}
      </ContributorsContainer>
    </Container>
  );
}
