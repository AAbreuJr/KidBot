import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
      e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/addgame");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <main>
        <h1 className='title'>KidBot</h1>
        <h7>The Lesson Plan Activity Builder</h7>
        <br/>
        <img src="https://i.imgur.com/iqhzgXm.png" alt=""/>
       
          <div className="card-body">
            <h3 id='LogInWord'>Log In</h3>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label className="text" htmlFor="email">Email</label>
              <br/>
            <input className="email"
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
              <br/>
              <br/>
            <label className="text" htmlFor="password">Password</label>
              <br/>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={pw}
              name="pw"
              onChange={this.handleChange}
            />
              <br/>
              <br></br>
            <button className="logIn">Log In</button>
              <br/>
              <br></br>
            </form>
          </div>
      </main>
    );
  }
}

export default LoginPage;
