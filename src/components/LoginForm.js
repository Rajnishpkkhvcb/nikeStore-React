import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

// import imggg from "../nike-login.png"

const StyledFormContainer = styled.div`
  padding-top: 180px;
  padding-bottom: 160px;
  padding-right: 60px;
  padding-left: 60px;
  margin-left:850px;
  margin-top:-100px;
  background: #FD9869;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f37736, #FD9869);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f37736, #fff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  // text-align:left;
  z-index: 2; /* Set the desired z-index value */
`;

const StyledImageContainer = styled.div`
  height: 100px;
  width: 100px;
  // background-color:#F9F7F4;;
  margin-left: 100px;
  // filter: blur(6px); /* Adjust the blur value as needed */
`;


const StyledButton = styled.button`
  background-color: #EB4511;
  // color: white; 
  // padding: 10px 15px; 
  border:none;
  // cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  // background: #000;
  color: #fff;
  text-decoration: none;
  pointer-events: all;
  // width:125px;
  // border:0.5px solid #fff;
  // border-radius: 25px;
`;






class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    let isLoggedIn = false;
    this.state = {
      email: "",
      password: "",
      isLoggedIn
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/list" />;
    }
    const { email, password } = this.state;
    return (
      <div>
      <div>
      <StyledImageContainer>
          <img src="img/nike2.png" alt="Your Image" />
        </StyledImageContainer>
      </div>
      <StyledFormContainer>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
          />
<StyledButton type="submit">Sign-In</StyledButton>
        </form>
      </StyledFormContainer>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    //logic magic
    if (email === "A" && password === "B") {
      this.setState({
        isLoggedIn: true
      });
      console.log(this.state.isLoggedIn);
    }
  };
}

export default LoginForm;
