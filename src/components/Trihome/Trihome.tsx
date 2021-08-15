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
        <span>
          <Link to="/area" className="grid nav">
            Angles of Triangle?
          </Link>
        </span>
        <span>
          <Link to="/hype" className="grid nav">
            Calculate Area
          </Link>
        </span>
      </div>
      <div>
        <span>
          <Link to="/quiz" className="grid nav">
            Check hypotenuse
          </Link>
        </span>
        <span>
          <Link to="/angle" className="grid nav">
            Take a Quiz
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Trihome;
