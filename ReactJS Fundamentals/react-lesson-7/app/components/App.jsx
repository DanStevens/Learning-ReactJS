import React from 'react';
import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import {getProfiles} from '../utils/profileApi.js';

// Examples functional stateless component
var MyComponent = props => (
  // Like render() function but no 'this' or 'return'
  <div>
    <p>I am a functional stateless component!</p>
    <p>Property X: {props.x}</p>
  </div>
);

// 'default' keyword allows caller to import this class without wrapping in braces. So instead of:
//    import {Profile} from './components/Profile.jsx'
// user can write:
//    import Profile from './components/Profile.jsx'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    }

    // Bind each instance function to this instance so that we don't need to call find when setting
    // up event handers. For example, instead of:
    //   <button onClick={this.addProfile.bind(this)}>Add</button>
    // We can do:
    //   <button onClick={this.addProfile}>Add</button>
    this.addProfile = this.addProfile.bind(this);
  }

  /**
   * invoked immediately after a component is mounted (inserted into the tree and after render()).
   * Initialization that requires DOM nodes should go here. If you need to load data from a remote
   * endpoint, this is a good place to instantiate the network request.
   */
  componentDidMount() {
    getProfiles().then(profiles => this.setState({profiles: profiles}));
  }

  // React doesn't use native browser events; it has its own synthetic event system on top. This
  // allows it work around event inconsistencies across older browsers.
  addProfile(profile) {
    // e.target - the element that raised the event

    // let profile = {
    //   name: 'Tom',
    //   age: 22,
    //   bio: 'enjoys sports',
    //   hobbies: ['basketball', 'baseball']
    // };

    // While this will add the profile to this.state, it won't trigger a rerender
    // this.state.push(profile);

    // Call this.setState() to modify state and trigger rerender
    this.setState({
      // Use Array.concat() not Array.push() as push returns size of array not the array itself
      profiles: this.state.profiles.concat([profile])
    });
  }

  render() {
    let profiles = this.state.profiles.map(profile => {
      return (
        <Profile name={profile.name} age={profile.age} bio={profile.bio} hobbies={profile.hobbies} />
      );
    })
    return (
      <div>
        {profiles}
        <AddProfile addProfile={this.addProfile} />
      </div>
    );
  }
}