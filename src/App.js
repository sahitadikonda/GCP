import React from 'react';
import {Route} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";

const App = () => (

<section>
  <Route path="/login" exact component = {LoginPage}/>

</section>
);

export default App;
