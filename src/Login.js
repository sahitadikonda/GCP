import React, { Component } from 'react';


class Login extends Component {
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
 
export default Login;