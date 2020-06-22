import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/user';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpUser(this.state);
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        username:
        <input name='username' value={username} onChange={this.handleChange} />
        password:
        <input name='password' type='password' value={password} onChange={this.handleChange} />
        <button type='submit'>Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { signUpUser: (user) => dispatch(signUpUser(user)) };
};


export default connect(null, mapDispatchToProps)(SignUp);