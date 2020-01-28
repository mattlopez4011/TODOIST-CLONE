import React from 'react';
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";

export const App = () => (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <h1>Hello World!</h1>*/}
      {/*    <h3>Accept the unexpected. When thins go wrong, don't stand around and complain. Assess your options and move forward. </h3>*/}
      {/*</header>*/}
      <Header/>
      <Content/>
    </div>
  );


