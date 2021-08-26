import './App.css';
import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        data: {
            email: "",
            password: "",
        },
        loading : false,
        loginErrors: ""
     }
     this.onSubmit = this.onSubmit.bind(this);
     this.onChange = this.onChange.bind(this);
}
onChange=(e)=>{
    this.setState({
        data:{[e.target.name]: e.target.value}
    });
}
onSubmit=(e)=>{
  //Prevents the page from refreshing while submitting a form
  e.preventDefault();
  //This submits the data to the parent component.
  this.props.submit(this.state.data);
};

render() { 
  return (  
      <div class="container">
          <form onSubmit={this.onSubmit}>
          <h1><center>Login</center></h1>
            <label for="email"><b>Username</b></label>
              <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={this.state.data.email}
              onChange={this.onChange}
              required
              />

            <label for="password"><b>Password</b></label>
              <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.data.password}
              onChange={this.onChange}
              required
              />

            <label for="user_type"><b>User Type</b></label><br></br>
              <select id="user_type" name="user_type" value={this.state.data.userType} required>
                <option value="Candidate">Candidate</option>
                <option value="RMG">RMG</option>
                <option value="Account_POC">Account_POC</option>
                <option value="Employee">Employee</option>
              </select>
              <br></br>
              
            <button type="submit" class="btn">Login</button>
          </form>
      </div>
  );
}
}
  /*
  render() { 
    return (
      <div class="container">
    <h1><center>Login</center></h1>
    <label for="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Email" name="email" value={data.email} required></input>
    
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={data.password} required></input>
    
    <label for="user_type"><b>User Type</b></label><br></br>

    <select id="user_type" name="user_type" value={data.userType} required>
    <option value="Candidate">Candidate</option>
    <option value="RMG">RMG</option>
    <option value="Account_POC">Account_POC</option>
    <option value="Employee">Employee</option>
    </select>
    <br></br>
    
    <button type="login" class="btn">Login</button>
  </div>
      );
  }
}*/
 
export default LoginForm;