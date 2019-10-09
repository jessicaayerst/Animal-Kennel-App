import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./Kennel.css"
import {withRouter} from 'react-router-dom';
import auth0Client from './auth/Auth'
class Kennel extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
  }
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}

export default withRouter(Kennel);