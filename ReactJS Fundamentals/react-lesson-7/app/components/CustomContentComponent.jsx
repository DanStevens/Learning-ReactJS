import React from 'react';

/**
 * Example of a React component that supports arbitrary children via `this.props.children`.
 */
export default class CustomContentComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Content Component</h1>
        {this.props.children}
        <p>More content</p>
      </div>
    );
  }
}