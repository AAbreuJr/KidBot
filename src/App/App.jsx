import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Board from '../pages/Board/Board'

class App extends Component {
  state = {
  }

  render() {
    return (
    <>
      <h1>All Purpose Quiz Tool!</h1>
    <Route
    exact path='/'
    render = {() =>
    <Board />}
    />
    <Route 
    exact path='/starship/'
    render={( {location} ) => 
      <StarshipDetails
        location={location}
      />
  }/>
  </>
    )
  }
}


export default App;