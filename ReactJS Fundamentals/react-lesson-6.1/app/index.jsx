import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

// No longer works - see https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactcreateclass
// var App = React.createClass({
//   render: function() {
//     return (
//       <p>Hello, World!</p>
//     );
//   }
// })

// https://reactjs.org/docs/components-and-props.html#functional-and-class-components
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // TODO
    }
  }

  render() {
    return <p>Hello, World!</p>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));