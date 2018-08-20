import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserService from '../../services/UserService'

export default class PrivateRoute extends Component {
  render() {
    // We can take user from UserService also
    const { user, ...restProps } = this.props;
    return UserService.getUser() ? <Route {...restProps} /> : <Redirect to="/signup" />;
  }
}
