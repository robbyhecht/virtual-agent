import React, { Component } from "react"
import APIManager from "./../../managers/APIManager"
import OldApiManager from "./OldApiManager"
// import OldApiManager from "./OldApiManager"
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
  
  // searchUsername(username) {
  //   // console.log('api manager username', username)
  //   // return fetch(`${remoteURL}/users?username=${username}`)
  //   // .then(data => data.json())
  // }

  // Registration function

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    if (!this.state.username || !this.state.password) {
      alert("Please enter a new username and password to register.")
    } else if (this.state.username || this.state.password)
      // console.log("username", this.state.username)
      // console.log("password", this.state.password)
      // console.log("API Manager", APIManager)
      // console.log("API Manager searchUsername", searchUsername)

    {
      APIManager.searchUsername(this.state.username).then(users => {
        console.log("users", users)
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else if (!users.length) {
            // OldApiManager.add("users", newUser).then(user =>{
            //   sessionStorage.setItem("credentials", parseInt(user.id))
            //   this.props.setAuth()
            APIManager.add("users", newUser).then(user =>{
              sessionStorage.setItem("credentials", parseInt(user.id))
              this.props.setAuth()
            }
            )
        }
      })
    }
  }

  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) {
      alert("Please enter a valid username and password or register a new account.")
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

  render() {
    return (
      <div id="mainLogin">
        <Container>
          <Row>
            <Col>
              <h1 id="slogan">Where do you <br /> want to play?</h1>
            </Col>
            <Col>
              <Form className="loginForm">
                <h1 className="h3 mb-3 font-weight-normal" id="loginHeader">LOG IN</h1>
                <label htmlFor="inputUsername">Username:</label>
                <input onChange={this.handleFieldChange} type="username" id="username" placeholder="Username" required="" autoFocus="" /><br />
                <label htmlFor="inputPassword">Password:</label>
                <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" /><br />
                <Button type="submit" className="loginButton" onClick={this.handleLogin}>
                  Sign in
                </Button>
                <Button type="submit" className="loginButton" onClick={this.handleRegister}>
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