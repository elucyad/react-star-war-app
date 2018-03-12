import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';
import { alertActions } from '../../actions';
import { history } from '../../helpers';
import Home from '../Home/Home';
import Login from '../SignIn/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    return (
      <Router history={history}>
        <div className="app-main">
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>

    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}
export default connect(mapStateToProps)(App);

