import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './component/Nav.js';

class App extends Component{
  state = {
    user: {
      firstname: 'Miguel',
      lastname: 'Dorado',
      age: 20
    },
    users: [
      {firstname: 'BOOL1', lastname: 'BOOL1.1'},
      {firstname: 'BOOL2', lastname: 'BOOL2.1'},
      {firstname: 'BOOL3', lastname: 'BOOL3.1'},
      {firstname: 'BOOL4', lastname: 'BOOL4.1'},
    ]

  }
  constructor(props){
    super(props);
  }

  render(){
    let {firstname, lastname } = this.state.user;
    let users = this.state.users;
    console.log(users);

    return(
        <div class="App">
          <Nav user={this.state.user}/>    
          <h1> HELLO WORLD </h1>
          <p> {firstname} {lastname}</p>
          <div>
            <input type="text" name="firstname" value={firstname}/>
            <input type="text" name="firstname" value={lastname}/>
          </div>
          <div>
          </div>
        </div>    
    )
  }
}

export default App;