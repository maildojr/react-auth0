import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Column } from "style/Grid";
import { Title, Text } from "style";
import Profile from "components/Profile";

const Home = () => {
  const { isAuthenticated, error } = useAuth0();

  return (
    <Container>
      <Row>
        <Column sm={12} md={12} xl={12}>
          <Title>ReactJS with Auth0</Title>
        </Column>
      </Row>
      <Row>
        <Column sm={12} md={12} xl={12}>
          {!isAuthenticated ? (
            <Text>Application ReactJS TypeScript using Auth0. Click on Login to procceed to Auth0 login.</Text>
          ) : (
            <Text>Application ReactJS TypeScript using Auth0. Click on Logout to procceed to Auth0 logout.</Text>
          )}
        </Column>
      </Row>
      <Row>
        <Column sm={12} md={12} xl={12}>
          <Profile />
          {error && <Text color="error">{error.message}</Text>}
        </Column>
      </Row>
    </Container>
  );
};

export default Home;
