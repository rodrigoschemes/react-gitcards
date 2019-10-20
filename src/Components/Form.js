import React, {Component} from 'react';
import Axios from 'axios';
import '../App.css';

class Form extends Component{
    state = { userName: ''}

    handleSubmit = async (event) =>{
        event.preventDefault()
        const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data)
        this.setState({ userName: ''})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value = {this.state.userName}
                    onChange = {event => this.setState({ userName: event.target.value})}
                    placeholder="GitHub username"/>
                <button>Add card</button>
            </form>
        )
    }
}

export default Form