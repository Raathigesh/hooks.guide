import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Navigation from "./navigation";
import Preview from "./preview";
import hooks from "./docs";
import Landing from "./landing";
import Loading from "./loading";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Nunito", "Helvetica", "Helvetica Neue", "Segoe UI", "Helvetica",
    "Arial", sans-serif;
}

#preview-root {
  background-color: #002240;
  padding: 7px;
  border-radius: 0 5px 5px 5px;
  color: white;
  max-width: 900px;
  box-shadow: 0px 0px 5px rgba(195, 22, 22, 0.03),
    0px 13px 47px rgba(0, 0, 0, 0.14);
}
`;

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-128510325-1");
  }

  render() {
    return (
      <Router>
        <Container>
          <GlobalStyle />
          <Navigation />
          <Route path="/" exact render={() => <Landing />} />
          <Suspense fallback={<Loading />} maxDuration={1000}>
            {Object.entries(hooks).map(([key, value]) => {
              return value.map(item => {
                return (
                  <Route
                    path={`/${key}/${item.name}`}
                    render={() => <Preview item={item} />}
                  />
                );
              });
            })}
          </Suspense>
        </Container>
      </Router>
    );
  }
}

export default App;
