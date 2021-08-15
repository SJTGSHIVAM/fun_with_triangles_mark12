import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

import NotFound from "./components/notfound";
import Trihome from "./components/Trihome";
import TriArea from "./components/TriArea";
import TriQuiz from "./components/TriQuiz";
import TriHype from "./components/TriHype";
import TriAngle from "./components/TriAngle";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      <Switch>
        <Route path="/" component={Trihome} exact />
        <Route path="/angle" component={TriAngle} exact />
        <Route path="/hype" component={TriHype} exact />
        <Route path="/area" component={TriArea} exact />
        <Route path="/quiz" component={TriQuiz} exact />
        <Route path="/about" exact component={About} />
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
