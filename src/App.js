import React, {Component} from 'react';
import './App.css';
import CardList from './Components/CardList';
import Form from './Components/Form';

//github usernames: gaearon, sophiebits, sebmarkbage, bvaughn

class App extends Component{
  
  state = {
    profiles: []
  }

  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };

  render(){
    return(
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    ) 
  }
}

export default App;
