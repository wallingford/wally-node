import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Button label="Save it" />));

// Example 1
// https://jscomplete.com/repl?j=Sy3QAdKHW
// To render the Button component to the browser
//const WalButton = React.createElement(<Button label="Save it" />);
//App.prototype.state.button = WalButton;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();