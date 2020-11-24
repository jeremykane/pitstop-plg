import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/shared-components/HeaderComponent";
import FooterComponent from "./components/shared-components/FooterComponent";
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="header">
            <HeaderComponent />
          </div>
          <div className="wrapper">
            <Switch>
              <Route path="/" component={HomeComponent} />
            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;
