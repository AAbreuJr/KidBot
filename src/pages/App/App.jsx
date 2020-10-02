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
// Added.
import logo from '../../images/01.png'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Divider, Header, Image, Segment } from 'semantic-ui-react'
import QuizPage from '../../pages/QuizPage/QuizPage'

// Added.
const qNo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const testArray = [
  '',
  'What part of the body helps you move?', 
  'What city is the White House in?', 
  'How many stars on the American Flag?', 
  'Who was the first U.S president?', 
  'They had 40 boxes of pasta sauce in storage and received 47 more boxes last month. How many boxes of pasta sauce are there?', 
  'Lulu has 2 boxes of 10 chocolates each. How many chocolates does she have?', 
  'What is Fe?', 
  'Acceleration due to gravity?', 
  'Force equation.', 
  'Is the Sun a star?'
]

const answerArray = [
  'Answer to the Questions Below:',
  'Answer: Muscles', 
  'Answer: Washington, D.C.', 
  'Answer: 50 for the 50 US states', 
  'Answer: George Washington', 
  'Answer: 87 boxes of pasta sauce', 
  'Answer: 20 chocolates', 
  'Answer: Iron', 
  'Answer: 9.8 meters per second squared', 
  'Answer: Force = Mass x Acceleration', 
  'Answer: Yes'
]

class App extends Component {
  state = {
    myGames: [],
    user: authService.getUser(),
    // Added.
    quizIdx: 0
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
  // Added.
  handleSummon = (idx) => {
    this.setState({ quizIdx: idx })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const {user} = this.state
    // Added.
    const { activeItem } = this.state
    return (
      <>
      <NavBar user={user} handleLogout={this.handleLogout} />

{/* Added. */}
<div className='App'>
  <Segment inverted color='blue'>
    <Header as='h1' floated='left'>
      Quiz Page
    </Header>
    <Divider clearing />
      <Grid columns={2} centered>
        <Grid.Column>
          <Image centered
              height='400' 
              src={logo} 
              color='blue'
            />
          <Header className= 'title' as='h1'>
            KidBot: The Student Quiz App
          </Header>
        </Grid.Column> 
      </Grid>
  </Segment>
  </div>
  <br></br>
    <main>
      <QuizPage 
        qNo={qNo}
        quizIdx={this.state.quizIdx}
        handleSummon={this.handleSummon}
        testArray={testArray}
        answerArray={answerArray}
        />
    </main>        
        

     
        
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
