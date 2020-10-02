import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import MyGamesPage from '../MyGames/MyGames'
import AddGame from "../AddGame/AddGame";
import MathGame from "../MathGame/MathGame";
import ScienceGame from "../ScienceGame/ScienceGame"
import SSGame from "../SSGame/SSGame"
import * as MyGameAPI from '../../services/myGame-api';

class App extends Component {
  state = {
    myGames: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: [] });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddGame = async newGameData => {
    const newGame = await MyGameAPI.create(newGameData);
    newGame.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    this.setState(state => ({
      myGames: [...state.myGames, newGame]
    }), () => this.props.history.push('/games')) 
  }

  async componentDidMount() {
    const myGames = await MyGameAPI.getAll();
    console.log(myGames)
    this.setState({ myGames })
  }

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
        path='/games' render={() =>
        authService.getUser() ?
        <MyGamesPage
        myGames={this.state.myGames}
        user={this.state.user}
        />
        :
        <Redirect to='/' />
      } />
        <Route 
        exact
        path='/addgame' render={() =>
        <AddGame 
        handleAddGame={this.handleAddGame}
        />
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
