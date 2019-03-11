import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import MySiftz from "./components/MySiftz";
import Search from "./components/Search";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import SearchResult from "./components/SearchResult";
// import { RedirectUser } from "./components/Login/RedirectUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isloggedin: false };
    //this.PrivateRoute = this.PrivateRoute.bind(this);
  }

  // componentDidMount() {
  //   const presence = window.localStorage.getItem("token");
  //   this.setState({ isloggedin: presence ? true : false });
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/mySiftz"
            // component={this.state.isloggedin ? MySiftz : Login}
            exact
            component={MySiftz}
          />
          <Route
            path="/search"
            // component={this.state.isloggedin ? Search : Login}
            component={Search}
          />
          <Route
            path="/search-result"
            // component={this.state.isloggedin ? Search : Login}
            component={SearchResult}
          />
          <Route expact path="/signup" component={SignUp} />

          <Route
            expact
            path="/login"
            // component={this.state.isloggedin ? Login : Login}
            component={LogIn}
          />
          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
