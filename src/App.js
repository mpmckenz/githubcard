import React, { Component } from "react";
import "./App.css";

const githubProfile = "https://api.github.com/users/mpmckenz";

class App extends Component {
  state = { user: {}, active: false };

  handleClick = event => {
    fetch(githubProfile)
      .then(response => response.json())
      .then(profileInfo => {
        this.setState(previousState => {
          return {
            user: profileInfo,
            active: !previousState.active
          };
        });
        // Object.entries(profileInfo);
      });
  };

  // handleClick() {
  //   {this.setState(prevStaeactive: !previousState.active)}
  // }

  render() {
    return (
      <div id="parentContainer">
        <button onClick={this.handleClick}>View Profile</button>
        <div id="profileContainer" />
        <p>Profile Name: {this.state.user.name}</p>
        {/* <img>{this.state.user.avatar_url}</img> */}
        <p>Login: {this.state.user.login}</p>
        <p>Number of Followers: {this.state.user.followers}</p>
        <p>
          {this.state.user.name} is following {` `}
          {this.state.user.following} other users
        </p>
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
