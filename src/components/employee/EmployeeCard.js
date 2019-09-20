import React, { Component } from 'react';


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./emp.png')} alt="Employee" />
          </picture>
          <h3>Employee: <span className="card-employeeName">Jessica Ayerst</span></h3>
          <p>Email: jessicaayerst@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;