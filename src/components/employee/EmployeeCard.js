import React, { Component } from 'react';


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./emp.png')} alt="Employee" />
          </picture>
          <h3>Employee: <span className="card-employeeName">{this.props.employeeProp.name}</span></h3>
          <p>Email: {this.props.employeeProp.email}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employeeProp.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
