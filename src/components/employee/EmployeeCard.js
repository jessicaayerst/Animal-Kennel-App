import React, { Component } from 'react';
import { Link } from "react-router-dom";


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./emp.png')} alt="Employee" />
          </picture>
          <h3>Employee: <span className="card-employeeName">{this.props.employeeProp.name}</span></h3>
          <Link to={`/employees/${this.props.employeeProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
