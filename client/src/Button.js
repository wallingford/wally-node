import React, {Component} from "react";

class Button extends Component {

    state = {
       message: 'This isn\'t from the server'
    }

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/api/message', {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => this.setState({ message: data.express }));
    }

    handleSubmit(event) {
        event.preventDefault();
        //const data = new FormData(event.target);
        this.componentDidMount();

        /*
        fetch('/api/message', {
            method: 'GET'
        })
            .then(function() {
                Object.assign({}, this.state, {message:'still not'});
            })
            .catch(function() {
                Object.assign({}, this.state, {message:'ERRRORROOR'});
            });
        */
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">{this.props.label} - {this.state.message} </button>
            </form>
        );
    }
}

export default Button;