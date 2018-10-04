import React from 'react';
import './AddProfile.css';

export default class AddProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      bio: '',
      hobby: ''
    };

    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleHobby = this.handleHobby.bind(this);
    this.handleAddProfile = this.handleAddProfile.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  handleBio(e) {
    this.setState({
      bio: e.target.value
    });
  }

  handleHobby(e) {
    this.setState({
      hobby: e.target.value
    });
  }

  handleAddProfile(e) {
    let newProfile = {
      name: this.state.name,
      age: this.state.age,
      bio: this.state.bio,
      hobbies: [this.state.hobby]
    };
    this.props.addProfile(newProfile);
  }

  render() {
    return (
      <div>
        <h2>Add a new profile</h2>
        <div class="addProfileForm">
          <label>Name: </label>
          <input onChange={this.handleName} value={this.state.name} />
          <label>Age: </label>
          <input onChange={this.handleAge} value={this.state.age} />
          <label>Bio: </label>
          <input onChange={this.handleBio} value={this.state.bio} />
          <label>Hobby: </label>
          <input onChange={this.handleHobby} value={this.state.hobby} />
        </div>
        <button onClick={this.handleAddProfile}>Add</button>
      </div>
    );
  }
}