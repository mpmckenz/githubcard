import React, { Component } from "react";
import "./App.css";
import { Button, Card, CardTitle, Container } from "react-materialize";
import Typography from "@material-ui/core/Typography";
import { CardContent } from "@material-ui/core";
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
        console.log(Object.entries({ profileInfo }));
      });
  };

  handleClick = event => {
    this.setState(previousState => ({ active: !previousState.active }));
  };

  render() {
    return (
      <Container>
        <Button
          id="spinner"
          onClick={this.handleClick}
          className="trinity-rings-spinner"
        >
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </Button>
        {this.state.active ? (
          <Card
            id="card"
            className="small"
            header={
              <div id="parent">
                <CardTitle image={this.state.user.avatar_url}>
                  <br />
                  {/* <Typography variant="h3" gutterBottom> */}
                  <b>{this.state.user.name}</b>
                  <br />
                  {/* </Typography> */}
                </CardTitle>
                <CardContent>
                  {/* <Typography variant="h4" gutterBottom> */}
                  <b>Login: </b>
                  {this.state.user.login}
                  <br />
                  <b>Public repositories:</b> {this.state.user.public_repos}
                  <br />
                  <p>
                    Kenzie Academy is pretty cool. I really like going here and{" "}
                    <b>REALLY want to be a student coach</b> but keeping my
                    grade up is really hard for me to do.{" "}
                  </p>
                  <a href="https://epic-spinners.epicmax.co/#/">Moving Icons</a>
                  {/* </Typography> */}
                </CardContent>
              </div>
            }
          />
        ) : null}
      </Container>
    );
  }
}

export default App;

/* {Object.entries(user).map(([key, value]) => {
      return (
        <div>{key}: {value.toString()}</div>
      )})
      } */
