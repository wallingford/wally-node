import React from "react";
// Read !! > https://reactjs.org/docs/components-and-props.html
// Couldn't get this to work, but I don't think stateless components SHOULD
// hold state! (a changeable button label)
const ButtonFSC = props => {
    //let count = 0;

    const myHandler = e => {
        e.preventDefault();
        fetch('/api/message', {
                method: 'GET',
                credentials: 'include'
            })
                .then(response => response.json())
                .then(data => { // props.count = data.express;
                    this.setState({
                        text: 'clicked 1'
                    });});

    };

    return (<button type="submit" onClick={myHandler}>FSC: {props.label} + {props.count} </button>);
}

export default ButtonFSC;