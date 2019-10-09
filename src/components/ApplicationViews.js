import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
// import Login from './auth/Login'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import Callback from './auth/Callback'
import Auth0Client from "./auth/Auth";

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        {/* <Route path="/login" component={Login} /> */}

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route
          exact
          path="/animals"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
              return <AnimalList {...props} animals={this.state.animals} />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return Auth0Client.isAuthenticated() ? <AnimalDetail {...props} animalId={parseInt(props.match.params.animalId)} /> : Auth0Client.signIn()
        }} />
        <Route path="/animals/new" render={(props) => {
          return Auth0Client.isAuthenticated() ? <AnimalForm {...props} /> : Auth0Client.signIn()
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }}
        />
        <Route exact path="/locations" render={(props) => {
          return Auth0Client.isAuthenticated() ? <LocationList {...props} /> : Auth0Client.signIn()
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return Auth0Client.isAuthenticated() ? <LocationDetail {...props} locationId={parseInt(props.match.params.locationId)} /> : Auth0Client.signIn()
        }} />
        <Route path="/locations/new" render={(props) => {
          return Auth0Client.isAuthenticated() ? <LocationForm {...props} /> : Auth0Client.signIn()
        }} />
        <Route exact path="/employees" render={(props) => {
          return Auth0Client.isAuthenticated() ? <EmployeeList {...props} /> : Auth0Client.signIn()
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the employeeId to the EmployeeDetailComponent
          return Auth0Client.isAuthenticated() ? <EmployeeDetail {...props} employeeId={parseInt(props.match.params.employeeId)} /> : Auth0Client.signIn()
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the employeeId to the EmployeeDetailComponent
          return Auth0Client.isAuthenticated() ? <EmployeeWithAnimals {...props} employeeId={parseInt(props.match.params.employeeId)} /> : Auth0Client.signIn()
        }} />
        <Route path="/employees/new" render={(props) => {
          return Auth0Client.isAuthenticated() ? <EmployeeForm {...props} /> : Auth0Client.signIn()
        }} />
        <Route exact path="/owners" render={(props) => {
          return Auth0Client.isAuthenticated() ? <OwnerList /> : Auth0Client.signIn()
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the ownerId to the OwnerDetailComponent
          return Auth0Client.isAuthenticated() ? <OwnerDetail {...props} ownerId={parseInt(props.match.params.ownerId)} /> : Auth0Client.signIn()
        }} />
        <Route exact path="/callback" component={Callback} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews