import React from 'react';
import { userActions } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Sign.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn, message } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="wrapper">
        <form className="form-signin" onSubmit={this.handleSubmit}>       
          <h2 className="form-signin-heading">Please login</h2>
          <input 
              type="text" 
              className="form-control" 
              name="username" 
              placeholder="Username" 
              required=""               
              onChange={this.handleChange}
              autoFocus="" />

          <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Password"               
              onChange={this.handleChange}
              required=""/> 

          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
          </label>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { message } = state.alert;
  return {
    loggingIn,
    message,
  };
}

export default connect(mapStateToProps)(SignIn);
