import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import AddGame from "../AddGame/AddGame";
import MathGame from "../MathGame/MathGame";
import ScienceGame from "../ScienceGame/ScienceGame"
import SSGame from "../SSGame/SSGame"

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: [] });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={({ history }) => (
            <main>
              <Login
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route 
        exact
        path='/addgame' render={() =>
        <AddGame />
        }
        />
        <Route 
        exact
        path='/math-game' render={() =>
        <MathGame />
        }
        />
        <Route 
        exact
        path='/science-game' render={() =>
        <ScienceGame />
        }
        />
        <Route 
        exact
        path='/ss-game' render={() =>
        <SSGame />
        }
        />
      </>
    );
  }
}

export default App;
