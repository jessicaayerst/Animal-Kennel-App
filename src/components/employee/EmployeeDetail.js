import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';


class EmployeeDetail extends Component {

  state = {
      name: "",
      email: "",
      loadingStatus: true,
  }

  handleDelete = () => {
      console.log("this is props", this.props)
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
}

  componentDidMount(){

    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        email: employee.email,
        loadingStatus: false
      })}
    )}




  render() {

    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./emp.png')} alt="Person" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Email: {this.state.email}</p>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire</button>
        </div>
      </div>
    )
  }
}

export default EmployeeDetail;