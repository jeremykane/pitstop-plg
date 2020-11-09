import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/shared-components/HeaderComponent"
import React from 'react';

class App extends React.Component {
    render() {
        return (
          <div className = "App">
            <Router>
              <HeaderComponent/>
              <div className = "content">
                <Switch>
                  <Route path = "/" component = {HomeComponent}/>
                </Switch>
              </div>
            </Router>
          </div>
        );
    }
}

export default App;
