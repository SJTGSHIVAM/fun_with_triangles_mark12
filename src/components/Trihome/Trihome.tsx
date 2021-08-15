import { useState } from "react";
import { Link } from "react-router-dom";
import "./Trihome.css";

const Trihome = () => {
  return (
    <div className="bcard">
      <header className="head">
        <h1>Welcome to Fun with Triangles</h1>
      </header>
      <div>
        <div className="smallcard">
          <Link to="/angle" className="grid-nav">
            Angles of Triangle?
          </Link>
        </div>
        <div className="smallcard">
          <Link to="/area" className="grid-nav">
            Calculate Area
          </Link>
        </div>
      </div>
      <div>
        <div className="smallcard">
          <Link to="/hype" className="grid-nav">
            Check hypotenuse
          </Link>
        </div>
        <div className="smallcard">
          <Link to="/quiz" className="grid-nav">
            Take a Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Trihome;
