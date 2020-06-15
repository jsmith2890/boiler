import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        username:
        <input name='username' value={username} onChange={this.handleChange} />
        password:
        <input
          name='password'
          type='password'
          value={password}
          onChange={this.handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: (user) => dispatch(loginUser(user)) };
};

export default connect(null, mapDispatchToProps)(Login);
