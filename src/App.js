import React, { Component, Suspense } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./navigation";
import Preview from "./preview";
import hooks from "./docs.json";
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
    border-radius: 5px;
    color: white;
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
  render() {
    return (
      <Router>
        <Container>
          <GlobalStyle />
          <Navigation />
          <Route path="/" exact render={() => <Landing />} />
          <Suspense fallback={<Loading />}>
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
