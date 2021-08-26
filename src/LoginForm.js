import './App.css';

function LoginForm() {
  return (
    <div class="container">
    <h1><center>Login</center></h1>
    <label for="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>
    
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>
    
    <label for="user_type"><b>User Type</b></label><br></br>

    <select id="user_type" name="user_type" required>
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

export default LoginForm;
