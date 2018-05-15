import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import ButtonFSC from './ButtonFunctionalStatelessComponent'

class App extends Component {
    state = {
        response: '',
        buttonLabel:'Get me a message off the server'
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Wally</h1>
                </header>
                <p className="App-intro">
                    {this.state.response}
                    <Button label={this.state.buttonLabel}></Button>
                    <Button label='Another Button'></Button>
                    <ButtonFSC label='And another'></ButtonFSC>
                </p>
            </div>
        );
    }
}

export default App;
