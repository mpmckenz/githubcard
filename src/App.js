import React, { Component } from "react";
import "./App.css";

const githubProfile = "https://api.github.com/users/mpmckenz";

// const testArr = { numberone: 1, numbertwo: 2, numberthree: 3 };
// console.log(Object.entries(testArr));

class App extends Component {
  state = { user: {}, active: false };

  componentDidMount = event => {
    fetch(githubProfile)
      .then(response => response.json())
      .then(profileInfo => {
        this.setState({ user: profileInfo });
        // active: !previousState.active
        console.log({ profileInfo });
      });
    // Object.entries(profileInfo);
  };

  handleClick = event => {
    this.setState(previousState => ({ active: !previousState.active }));
  };

  render() {
    return (
      <div id="parentContainer">
        <button onClick={this.handleClick}>View Profile</button>
        {this.state.active ? (
          <div id="profileContainer">
            <img alt="" src={this.state.user.avatar_url} />
            <p>Profile Name: {this.state.user.name}</p>
            <p>Login: {this.state.user.login}</p>
            <p>Number of Followers: {this.state.user.followers}</p>
            <p>
              {this.state.user.name} is following {` `}
              {this.state.user.following} other users
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

/* {Object.entries(user).map(([key, value]) => {
      return (
        <div>{key}: {value.toString()}</div>
      )})
      } */
