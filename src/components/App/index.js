import React from "react";
import survey from "./survey.png";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import CreateSurvey from "../CreateSurvey";
import TakeSurvey from "../TakeSurvey";

function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/">
          <img src={survey} alt="survey.png" />
        </Link>
        <div className="app-feature">
          <Switch>
            <Route path="/" exact>
              <Link to="/create-survey">
                <button className="app-create-survey" type="button">
                  Create Survey
                </button>
              </Link>
              <Link to="take-survey">
                <button className="app-take-survey" type="button">
                  Take Survey
                </button>
              </Link>
            </Route>
            <Route path="/create-survey" exact>
              <CreateSurvey />
            </Route>
            <Route path="/take-survey" exact>
              <TakeSurvey />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
