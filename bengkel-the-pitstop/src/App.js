import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import React from 'react';

class App extends React.Component {
    render() {
        return (
          <div>
            <Router>
              <Switch>
                <Route path = "/" component = {HomeComponent}/> 
              </Switch>
            </Router>
          </div>
        );
    }
}

export default App;
