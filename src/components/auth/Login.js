import React, { Component } from "react"
import UserManager from "./../../managers/UserManager"
import APIManager from "./../../managers/APIManager"
import "./Login.css"
import { Button, Form, Container, Row, Col } from 'reactstrap'

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited

  handleFieldChange = entry => {
    const stateToChange = {}
    stateToChange[entry.target.id] = entry.target.value
    this.setState(stateToChange)
  }


  // REGISTRATION HANDLER

  handleRegister = e => {
    e.preventDefault()

    // the variable newUser represents the user as defined by username and password

    const newUser = {
      username: this.state.username,
      password: this.state.password
    }

    // if a field is left blank, alert the user

    if (!this.state.username || !this.state.password) {
      alert("Please enter a new username and password to register.")

    // otherwise move forward to check if username already exists

    } else if (this.state.username || this.state.password)

    {
      APIManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)

          // if it's a new username, add the user to the database and log them into session storage

        } else if (!users.length) {
          
            UserManager.addUser(newUser).then(user =>{
              sessionStorage.setItem("credentials", parseInt(user.id))
              this.props.setAuth()
            }
            )
        }
      })
    }
  }


  // LOGIN HANDLER

  handleLogin = e => {
    e.preventDefault()

    // if a field is left blank, alert the user

    if (!this.state.username || !this.state.password) {
      alert("Please enter a valid username and password or register a new account.")

      // otherwise, call the searchNP fetch to see if the user exists in the database.
      // If not, alert the user. If so, log user into session storage.

    } else if (this.state.username || this.state.password) {
      APIManager.searchNP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else if (user.length) {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    }
  }

  // Describes Login page display- divided into one row with two columns

  render() {
    return (
      <div className="mainLogin">
        <Container>

          <Row>

            <Col>
              <h1 className="slogan-log">Where do you <br /> want to play?</h1>
              <p className="sub-slogan-log">Book gigs.<br />
              Stay organized.<br />
              Take your touring to the next level.</p>
            </Col>

            <Col>
              <Form className="loginForm">
                <h1 className="h3 mb-3 font-weight-normal" id="loginHeader">LOG IN</h1>
                <label htmlFor="inputUsername">Username:</label>
                <input onChange={this.handleFieldChange} type="username" id="username" placeholder="Username" required="" autoFocus="" /><br />
                <label htmlFor="inputPassword">Password:</label>
                <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" /><br />
                <Button type="submit" className="loginButton" id="signInButton" onClick={this.handleLogin}>
                  Sign in
                </Button>
                <Button type="submit" className="loginButton" id="registerButton" onClick={this.handleRegister}>
                  Register
                </Button>
              </Form>
            </Col>

          </Row>
          
        </Container>
      </div>
      )
  }
}