import { Component } from 'react';
import { userService } from '../services';
import { history } from './../helpers/history';
import { userActions } from './../actions';
import { connect } from 'react-redux';

function withAuth(AuthComponent) {

  class AuthWrapped extends Component {
  
    componentWillMount() {
      const user=userService.getProfile();
      try {        
        if (!user) {
          history.replace('/login');
        } else {
          const {loggedIn}=this.props;
          if (!loggedIn) {

            const { dispatch } = this.props;
            let fetchedUser=JSON.parse(user);
            dispatch(userActions.autoAuthenticate(fetchedUser));
          }                 
        }
      } catch (err) {
        userService.logout();
        this.props.history.replace('/login');
      }
    }

    render() {     
      const {user,loggedIn}=this.props;

      if (user) {
        return <AuthComponent {...this.props} />;     
      } else {
        return null;
      }
        
    }
  }

  function mapStateToProps(state) {
    if (state.authentication) {
      const { user,loggedIn } = state.authentication;
      return {
        user,
        loggedIn,
      };
    } else {
      return {};
    }
  }

  return connect(mapStateToProps)(AuthWrapped);

}

export default withAuth;


