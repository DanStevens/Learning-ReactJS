import React from 'react';

// Profile component as a function instead of a class
// let Profile = props => (
//   <div>
//     <h2>{props.name}</h2>
//     <p>
//       {props.name} is {props.age} and {props.bio}
//     </p>
//     <h3>Hobbies</h3>
//     <ul>
//       {props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
//     </ul>
//   </div>
// );
// export default Profile;

// 'default' keyword allows caller to import this class without wrapping in braces. So instead of:
//    import {Profile} from './components/Profile.jsx'
// user can write:
//    import Profile from './components/Profile.jsx'
export default class Profile extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Keep logic efficient and to a minimum - we are trying to improve performance by deciding
    // whether or not to re-render the component. The test should cost less than the render cost to 
    // be worthwhile
    return this.props.name !== nextProps.name || this.props.age !== nextProps.age ||
      this.props.bio !== nextProps.bio;
  }

  render() {
    console.log('Rendering Profile component');
    let hobbies = this.props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>
          {this.props.name} is {this.props.age} and {this.props.bio}
        </p>
        <h3>Hobbies</h3>
        <ul>
          {hobbies}
        </ul>
      </div>
    )
  }
}