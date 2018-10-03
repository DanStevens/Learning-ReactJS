import React from 'react';

let Profile = props => (
  <div>
    <h2>{props.name}</h2>
    <p>
      {props.name} is {props.age} and {props.bio}
    </p>
    <h3>Hobbies</h3>
    <ul>
      {props.hobbies.map(hobby => <li>{hobby}</li>)}
    </ul>
  </div>
);
export default Profile;

// 'default' keyword allows caller to import this class without wrapping in braces. So instead of:
//    import {Profile} from './components/Profile.jsx'
// user can write:
//    import Profile from './components/Profile.jsx'
// export default class Profile extends React.Component {
//   render() {
//     let hobbies = this.props.hobbies.map(hobby => <li>{hobby}</li>);
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <p>
//           {this.props.name} is {this.props.age} and {this.props.bio}
//         </p>
//         <h2>Hobbies</h2>
//         <ul>
//           {hobbies}
//         </ul>
//       </div>
//     )
//   }
// }