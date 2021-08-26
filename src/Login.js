import React, { Component } from 'react';
import axios from "axios";
import LoginForm from './LoginForm';
import './App.css';

class Login extends Component {
    submit = data => {
        const {email, password} = this.state.data;
        //This calls the URL to submit the post request.
        axios.post("http://localhost:8080/login/login",
            {
                email: data.email,
                password: data.password
            },
            {withCredentials: true}
        )
        .then(response =>{
          var email = response.data.email;
    
          //This part is responsible for the window navigation after login.
          response.data.success
          ?  (document.getElementById('status').innerHTML = "Login Successfull!")/*,setTimeout(() => {window.location.replace('/landing?name='+ email)},5000))
          */: document.getElementById('status').innerHTML = response.data.message
        });
      };
    
    render() { 
        return (  
        <div>
          <LoginForm submit={this.submit}/>
        </div>
        );
    }
}
 
export default Login;

/*class Login extends Component {
        state = { 
            isLoading : true,
            Login : []
         }
         async componentDidMount(){
             const response=await fetch('/api/login');
             const body = await response.json();
             this.setState({Login:body,isLoading :false});
         }

    render() { 
        const{Login,isLoading}=this.state;
        if(isLoading){
            return(<div>Loading.....</div>);
        }
        return (  
            <div>
                <h2>Login</h2>
                
            </div>
        );
    }
}
 
export default Login;*/